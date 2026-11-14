/**
 * useSEO — sets the page title, description, social cards, canonical URL and
 * structured data with the native document API.
 *
 * ── What it does for every page ──────────────────────────────────────────
 * • Title: "<page> · Quick Correction", or the brand-led home title.
 * • Description and keywords: the page's own, else the site defaults below.
 * • Open Graph and Twitter cards from the same values.
 * • Canonical and og:url, when VITE_SITE_URL is set (the public origin, e.g.
 *   https://quickcorrection.app). Without it no canonical is written, since a
 *   localhost canonical would be worse than none.
 * • noindex on signed-in and sign-in areas. Search engines should list the
 *   public site, never a dashboard or a password form.
 * • Optional JSON-LD, replaced on navigation so pages never stack schemas.
 */
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const SITE = {
  name: 'Quick Correction',
  homeTitle: 'Quick Correction — CBSE Class 10 Maths board-pattern tests, marked in minutes',
  description:
    'Set CBSE Class 10 Maths papers in the board pattern, let students write on paper, and get every answer marked question by question with a reason. Teachers approve every mark; parents see what to revise.',
  keywords:
    'CBSE Class 10 maths, board pattern question paper, CBSE maths practice test, answer sheet correction, handwritten answer marking, AI marking, maths test generator, CBSE sample paper, Class 10 maths revision, tuition test papers',
  locale: 'en_IN',
};

const SITE_URL = ((import.meta.env.VITE_SITE_URL as string | undefined) ?? '').replace(/\/$/, '');

/** Areas that must not be indexed: behind sign-in, or the sign-in forms themselves. */
const PRIVATE = /^\/(admin|teacher|parent|faculty|dashboard|auth)(\/|$)/;

interface SEOOptions {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  /** Absolute or root-relative URL of a 1200×630 image. */
  ogImage?: string;
  canonical?: string;
  /** Force noindex on a public page. */
  noindex?: boolean;
  /** Structured data for this page (schema.org object or array). */
  jsonLd?: object | object[];
}

function setMeta(key: string, content: string, isProperty = false) {
  const attr = isProperty ? 'property' : 'name';
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function removeMeta(key: string, isProperty = false) {
  document.head.querySelector(`meta[${isProperty ? 'property' : 'name'}="${key}"]`)?.remove();
}

function setLink(rel: string, href: string | null) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!href) { el?.remove(); return; }
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export const useSEO = ({
  title,
  description = SITE.description,
  keywords = SITE.keywords,
  ogTitle,
  ogDescription,
  ogImage,
  canonical,
  noindex,
  jsonLd,
}: SEOOptions = {}) => {
  const { pathname } = useLocation();
  const ld = jsonLd ? JSON.stringify(jsonLd) : '';

  useEffect(() => {
    const fullTitle = !title || title === SITE.name ? SITE.homeTitle : `${title} · ${SITE.name}`;
    document.title = fullTitle;

    setMeta('description', description);
    setMeta('keywords', keywords);

    const hidden = noindex || PRIVATE.test(pathname);
    setMeta('robots', hidden ? 'noindex, nofollow' : 'index, follow');

    const url = canonical ?? (SITE_URL ? `${SITE_URL}${pathname === '/' ? '/' : pathname}` : null);
    setLink('canonical', hidden ? null : url);

    setMeta('og:type', 'website', true);
    setMeta('og:site_name', SITE.name, true);
    setMeta('og:locale', SITE.locale, true);
    setMeta('og:title', ogTitle || fullTitle, true);
    setMeta('og:description', ogDescription || description, true);
    if (url) setMeta('og:url', url, true); else removeMeta('og:url', true);

    const image = ogImage ? (ogImage.startsWith('http') || !SITE_URL ? ogImage : `${SITE_URL}${ogImage}`) : null;
    setMeta('twitter:card', image ? 'summary_large_image' : 'summary');
    setMeta('twitter:title', ogTitle || fullTitle);
    setMeta('twitter:description', ogDescription || description);
    if (image) { setMeta('og:image', image, true); setMeta('twitter:image', image); }
    else { removeMeta('og:image', true); removeMeta('twitter:image'); }

    // Page-level structured data. The site-wide schema lives in index.html.
    const id = 'page-jsonld';
    document.getElementById(id)?.remove();
    if (ld) {
      const s = document.createElement('script');
      s.type = 'application/ld+json';
      s.id = id;
      s.textContent = ld;
      document.head.appendChild(s);
    }
  }, [title, description, keywords, ogTitle, ogDescription, ogImage, canonical, noindex, ld, pathname]);
};
