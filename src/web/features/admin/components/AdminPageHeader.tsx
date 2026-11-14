/**
 * AdminPageHeader — the title block admin pages open with.
 * @file src/web/features/admin/components/AdminPageHeader.tsx
 *
 * Rendered INSIDE each admin page's content, not in the chrome. Navigating
 * between admin pages swaps only this and what follows it; the surrounding
 * AdminLayoutRoute (sidebar, top bar) stays mounted, so sidebar scroll and any
 * provider it holds survive the transition.
 *
 * Replaces the `title` + `breadcrumbs` props AdminShell used to own. Migrating
 * a page is mechanical:
 *   <AdminShell title="Audit" breadcrumbs={[…]}>CONTENT</AdminShell>
 * becomes
 *   <><AdminPageHeader title="Audit" breadcrumbs={[…]} />CONTENT</>
 *
 * @llm-rule WHEN: Every admin page should open with this header block
 * @llm-rule AVOID: Reintroducing a chrome wrapper — let the layout route own chrome
 */

import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';

export interface AdminPageHeaderProps {
  /** Page title, rendered as <h1>. */
  title?: string;
  /** One line under the title. Counts, scope, or what the page is for. */
  description?: ReactNode;
  /** Optional breadcrumb trail. Entries with `href` are clickable. */
  breadcrumbs?: { label: string; href?: string }[];
  /**
   * Primary actions for the page — typically one Button.
   *
   * Placed here rather than left to each page so the button lands in the same
   * spot on every screen. A "New user" control that moves depending on which
   * admin page you are on is a control people have to re-find each time.
   */
  actions?: ReactNode;
  /** Small label above the title. */
  eyebrow?: ReactNode;
}

export function AdminPageHeader({
  title,
  description,
  breadcrumbs,
  actions,
  eyebrow,
}: AdminPageHeaderProps) {
  const hasCrumbs = Boolean(breadcrumbs && breadcrumbs.length > 0);
  if (!title && !description && !hasCrumbs && !actions && !eyebrow) return null;

  return (
    <div className="mb-6 space-y-2 md:mb-8">
      {hasCrumbs && (
        <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground">
          <ol className="flex flex-wrap items-center gap-1.5">
            {breadcrumbs!.map((crumb, i) => (
              <li key={i} className="flex items-center gap-1.5">
                {crumb.href ? (
                  <Link to={crumb.href} className="transition-colors hover:text-foreground">
                    {crumb.label}
                  </Link>
                ) : (
                  <span>{crumb.label}</span>
                )}
                {i < breadcrumbs!.length - 1 && <span aria-hidden>/</span>}
              </li>
            ))}
          </ol>
        </nav>
      )}

      {/* Title and actions share a row on wide screens and stack below `sm`,
          where a button next to a 3xl heading has nowhere to go. */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">{eyebrow}</p>}
          {title && <h1 className="text-[28px] font-extrabold leading-tight tracking-[-0.03em] sm:text-3xl">{title}</h1>}
          {description && <p className="text-sm text-muted-foreground">{description}</p>}
        </div>
        {actions && <div className="flex shrink-0 flex-wrap gap-2">{actions}</div>}
      </div>
    </div>
  );
}
