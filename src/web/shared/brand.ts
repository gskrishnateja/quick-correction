/**
 * One source of brand truth.
 *
 * UIKit deliberately ships no <Logo>, no <Header> and no <Footer> — product
 * identity is the one thing a component library cannot get right for you.
 * It lives here instead, so there is exactly one place to change it.
 *
 * The theme id must match the class in `styles/brand.css`.
 */
export const brand = {
  /** Theme id — matches `.theme-medhamark` in styles/brand.css. */
  themeId: 'medhamark',

  name: 'Quick Correction',
  tagline: 'Board-pattern tests, handwritten answers, AI correction.',

  /** Shown in the shell and the browser tab. */
  shortName: 'Quick Correction',

  /** Primary navigation. The header and the mobile slide-over pick these up. */
  nav: [
    { label: 'How it works', to: '/how-it-works' },
    { label: 'For teachers', to: '/teachers' },
    { label: 'For parents', to: '/parents' },
    { label: 'FAQ', to: '/faq' },
  ] as { label: string; to: string }[],

  /** Footer link groups, rendered by SiteFooter on every public page. */
  footer: [
    {
      heading: 'Product',
      links: [
        { label: 'How it works', to: '/how-it-works' },
        { label: 'Try the demo', to: '/demo' },
        { label: 'FAQ', to: '/faq' },
      ],
    },
    {
      heading: 'For you',
      links: [
        { label: 'Teachers', to: '/teachers' },
        { label: 'Parents', to: '/parents' },
        { label: 'Sign in', to: '/auth/login' },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'About', to: '/about' },
        { label: 'Contact', to: '/contact' },
      ],
    },
    {
      heading: 'Legal',
      links: [
        { label: 'Privacy', to: '/privacy' },
        { label: 'Terms', to: '/terms' },
        { label: 'Refunds', to: '/refund' },
        { label: 'Cancellation', to: '/cancellation' },
      ],
    },
  ] as { heading: string; links: { label: string; to: string }[] }[],

  social: {
    github: 'https://github.com',
  },
} as const;

export type BrandNavItem = (typeof brand.nav)[number];
