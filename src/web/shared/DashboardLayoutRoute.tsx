/**
 * DashboardLayoutRoute — the shell for everything behind sign-in.
 *
 * Sidebar owning the full height, no bar above it. That is what makes a screen
 * read as an application rather than a website with a menu.
 *
 * ── The guard lives here, not in each page ────────────────────────────────
 * <AuthGuard> wraps the <Outlet />, so every page under /dashboard is
 * protected by one check. Put it in the pages instead and each new file is a
 * chance to forget — the kind of omission nothing catches until it is public.
 *
 * Because this is a ROUTE, the shell mounts once: sidebar state and any
 * provider mounted here survive navigation between dashboard pages.
 */
import * as React from 'react';
import { NavLink, Outlet, useLocation, useMatch, Link } from 'react-router-dom';
import {
  Button, Sheet, SheetContent, SheetTrigger,
  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent,
  DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator,
  Tooltip, TooltipTrigger, TooltipContent,
} from '@bloomneo/uikit';
import {
  LogOut, Menu, ChevronDown, ChevronRight, PanelLeft,
  Home, Layers, Users, MoreHorizontal, ScrollText, Settings, User as UserIcon,
} from 'lucide-react';
import { brand } from './brand';
import { LogoMark } from './Logo';
import { ThemeControls } from './ThemeControls';
import { AuthGuard } from '@/features/auth/components';
import { useAuth } from '@/features/auth/hooks';
import type { NavItem } from './nav.base';

/*
 * Nav is COLLECTED, not declared here.
 *
 * `import.meta.glob` with `eager` is resolved by Vite at BUILD time, so this
 * is a static import list by the time it runs — no runtime lookup, and a layer
 * that is not installed contributes nothing because its file does not exist.
 *
 * Sorting by `order` keeps the sidebar stable regardless of the order the
 * bundler happens to hand back the modules, which is not guaranteed.
 */
const navModules = import.meta.glob<{ items?: NavItem[] }>('./nav.*.ts', { eager: true });

const NAV: NavItem[] = Object.keys(navModules)
  .sort()
  .flatMap((k) => navModules[k].items ?? [])
  .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));

/*
 * Collapsed state persists per browser.
 *
 * Someone who narrows the sidebar means it — reopening it on every navigation
 * or every visit turns a preference into a chore. Read lazily inside useState
 * so this touches localStorage once per mount rather than once per render, and
 * guard `window` so the module stays importable if this is ever pre-rendered.
 */
const COLLAPSE_KEY = 'sidebar:collapsed';

function useSidebarCollapsed() {
  const [collapsed, setCollapsed] = React.useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.localStorage.getItem(COLLAPSE_KEY) === '1';
  });

  const toggle = React.useCallback(() => {
    setCollapsed((prev) => {
      const next = !prev;
      try {
        window.localStorage.setItem(COLLAPSE_KEY, next ? '1' : '0');
      } catch {
        // Private mode / storage disabled — the toggle still works for this
        // session, it just will not be remembered. Not worth surfacing.
      }
      return next;
    });
  }, []);

  return { collapsed, toggle };
}

/** Brand block. h-16 matches the top bar so the two dividers line up. */
function SidebarBrand({ collapsed }: { collapsed?: boolean }) {
  return (
    <Link
      to="/admin"
      className={[
        'flex h-16 shrink-0 items-center',
        collapsed ? 'justify-center px-0' : 'gap-2.5 px-5',
      ].join(' ')}
    >
      <LogoMark className="size-8 shrink-0" />
      {!collapsed && (
        <span className="min-w-0 leading-tight">
          <span className="block truncate text-[15px] font-semibold tracking-tight text-sidebar-foreground">{brand.name}</span>
          <span className="block text-[11px] font-medium text-sidebar-foreground/50">Admin console</span>
        </span>
      )}
    </Link>
  );
}

/**
 * One row of the sidebar.
 *
 * Collapsed, the label leaves the DOM and the Tooltip carries the name.
 * className stays a STRING (never NavLink's function form): Radix Slot
 * concatenates className, and a function would be stringified into junk.
 * useMatch gives the active flag instead.
 */
function NavRow({
  to, label, icon: Icon, end, collapsed, onNavigate,
}: {
  to: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  end?: boolean;
  collapsed?: boolean;
  onNavigate?: () => void;
}) {
  const isActive = Boolean(useMatch({ path: to, end: end ?? false }));

  const row = (
    <NavLink
      to={to}
      end={end}
      onClick={onNavigate}
      aria-label={collapsed ? label : undefined}
      className={[
        'group relative flex h-9 items-center rounded-lg text-sm transition-colors',
        collapsed ? 'w-full justify-center px-0' : 'gap-3 px-3',
        isActive
          ? 'bg-primary/10 font-medium text-primary'
          : 'text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground',
      ].join(' ')}
    >
      {isActive && !collapsed && (
        <span aria-hidden className="absolute inset-y-2 -left-3 w-[3px] rounded-r-full bg-primary" />
      )}
      <Icon className={`size-[18px] shrink-0 ${isActive ? 'text-primary' : 'text-sidebar-foreground/55 group-hover:text-sidebar-foreground'}`} />
      {!collapsed && <span className="truncate">{label}</span>}
    </NavLink>
  );

  if (!collapsed) return row;
  return (
    <Tooltip>
      <TooltipTrigger asChild>{row}</TooltipTrigger>
      <TooltipContent side="right">{label}</TooltipContent>
    </Tooltip>
  );
}

function initialsOf(name?: string | null, email?: string | null) {
  const src = (name || email || 'U').trim();
  const parts = src.split(/[\s@._-]+/).filter(Boolean);
  return ((parts[0]?.[0] ?? 'U') + (parts[1]?.[0] ?? '')).toUpperCase();
}

function roleLabel(role?: string, level?: string) {
  if (role === 'admin') return level === 'system' ? 'System admin' : 'Administrator';
  return 'Member';
}

function Avatar({ initials, className = '' }: { initials: string; className?: string }) {
  return (
    <span className={`grid shrink-0 place-items-center rounded-full bg-gradient-to-br from-primary to-primary/70 font-semibold text-primary-foreground ring-2 ring-background ${className}`}>
      {initials}
    </span>
  );
}

function SidebarNav({
  collapsed, onNavigate,
}: { collapsed?: boolean; onNavigate?: () => void }) {
  const { logout, user } = useAuth();
  const visible = NAV.filter((item) => (!item.role || item.role === user?.role) && !(user?.role && item.hideForRoles?.includes(user.role)));
  const initials = initialsOf(user?.name, user?.email);

  const signOut = (
    <button
      onClick={() => logout()}
      aria-label="Sign out"
      className="grid size-8 shrink-0 cursor-pointer place-items-center rounded-lg text-sidebar-foreground/60 transition-colors hover:bg-sidebar-accent hover:text-sidebar-foreground"
    >
      <LogOut className="size-4" />
    </button>
  );

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <nav className={`flex flex-1 flex-col gap-0.5 overflow-y-auto pb-3 ${collapsed ? 'px-3' : 'px-4'}`} aria-label="Main">
        {visible.map(({ to, label, icon: Icon, end, section }, i) => (
          <React.Fragment key={to}>
            {section && !collapsed && (
              <span className={`${i === 0 ? 'mt-1' : 'mt-5'} px-3 pb-1.5 text-[11px] font-semibold uppercase tracking-[0.08em] text-sidebar-foreground/40`}>
                {section}
              </span>
            )}
            {section && collapsed && i > 0 && (
              <span aria-hidden className="mx-2 my-2 border-t border-sidebar-border" />
            )}
            <NavRow to={to} label={label} icon={Icon} end={end} collapsed={collapsed} onNavigate={onNavigate} />
          </React.Fragment>
        ))}
      </nav>

      {/* Who is signed in, and the way out. Kept apart from navigation so
          signing out is never one slip from "Users". */}
      <div className="border-t border-sidebar-border p-3">
        {collapsed ? (
          <div className="flex flex-col items-center gap-2">
            <Avatar initials={initials} className="size-8 text-xs" />
            <Tooltip>
              <TooltipTrigger asChild>{signOut}</TooltipTrigger>
              <TooltipContent side="right">Sign out</TooltipContent>
            </Tooltip>
          </div>
        ) : (
          <div className="flex items-center gap-3 rounded-xl px-2 py-1.5">
            <Avatar initials={initials} className="size-9 text-xs" />
            <span className="min-w-0 flex-1 leading-tight">
              <span className="block truncate text-sm font-medium text-sidebar-foreground">{user?.name || user?.email}</span>
              <span className="block truncate text-xs text-sidebar-foreground/50">{roleLabel(user?.role, user?.level)}</span>
            </span>
            {signOut}
          </div>
        )}
      </div>
    </div>
  );
}

/*
 * Phones get a floating tab bar instead of a hamburger: the four places an
 * admin goes most sit one thumb-tap away, everything else is under "More".
 * Matches the Quick Correction Journeys mock-up.
 */
const MOBILE_TABS = [
  { to: '/admin', label: 'Overview', icon: Home, end: true },
  { to: '/admin/content', label: 'Content', icon: Layers, end: false },
  { to: '/admin/users', label: 'Users', icon: Users, end: false },
] as const;

function MobileTab({ to, label, icon: Icon, end }: { to: string; label: string; icon: React.ComponentType<{ className?: string }>; end: boolean }) {
  const active = Boolean(useMatch({ path: to, end }));
  return (
    <NavLink
      to={to}
      end={end}
      className={`flex h-[52px] flex-1 flex-col items-center justify-center gap-0.5 rounded-[18px] text-[11px] font-semibold transition-colors ${active ? 'bg-primary/10 text-primary' : 'text-muted-foreground'}`}
    >
      <Icon className="size-5" />
      {label}
    </NavLink>
  );
}

function MobileTabBar() {
  const { logout } = useAuth();
  const [open, setOpen] = React.useState(false);
  const { pathname } = useLocation();
  React.useEffect(() => setOpen(false), [pathname]);
  const inMore = MORE_ITEMS.some((m) => pathname.startsWith(m.to));

  return (
    <nav
      aria-label="Admin"
      className="fixed inset-x-4 bottom-[max(1rem,env(safe-area-inset-bottom))] z-30 flex h-[66px] items-center gap-1 rounded-[26px] border border-white/60 bg-background/85 px-2 shadow-[0_16px_34px_-12px_rgba(15,23,51,0.3)] backdrop-blur-xl dark:border-border lg:hidden"
    >
      {MOBILE_TABS.map((t) => <MobileTab key={t.to} {...t} />)}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button
            type="button"
            className={`flex h-[52px] flex-1 cursor-pointer flex-col items-center justify-center gap-0.5 rounded-[18px] text-[11px] font-semibold transition-colors ${inMore || open ? 'bg-primary/10 text-primary' : 'text-muted-foreground'}`}
          >
            <MoreHorizontal className="size-5" />
            More
          </button>
        </SheetTrigger>
        <SheetContent side="bottom" className="rounded-t-3xl px-4 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-3">
          <span aria-hidden className="mx-auto mb-3 block h-1 w-10 rounded-full bg-muted-foreground/25" />
          <ul className="grid gap-1">
            {MORE_ITEMS.map(({ to, label, icon: Icon }) => (
              <li key={to}>
                <Link to={to} className="flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium hover:bg-muted">
                  <span className="grid size-10 place-items-center rounded-xl bg-primary/10 text-primary"><Icon className="size-[18px]" /></span>
                  {label}
                  <ChevronRight className="ml-auto size-4 text-muted-foreground" />
                </Link>
              </li>
            ))}
            <li className="mt-1 border-t border-border pt-2">
              <button type="button" onClick={() => logout()} className="flex w-full cursor-pointer items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium text-destructive hover:bg-destructive/10">
                <span className="grid size-10 place-items-center rounded-xl bg-destructive/10"><LogOut className="size-[18px]" /></span>
                Sign out
              </button>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  );
}

const MORE_ITEMS = [
  { to: '/admin/audit', label: 'Audit log', icon: ScrollText },
  { to: '/admin/settings', label: 'Settings', icon: Settings },
  { to: '/dashboard/profile', label: 'Profile', icon: UserIcon },
] as const;

/** The page's name for the top bar, from the nav entry it sits under. */
function usePageTitle(pathname: string) {
  const match = [...NAV]
    .sort((a, b) => b.to.length - a.to.length)
    .find((n) => (n.end ? pathname === n.to : pathname === n.to || pathname.startsWith(n.to + '/')));
  return match?.label ?? '';
}

export function Shell() {
  const { user, logout } = useAuth();
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { collapsed, toggle } = useSidebarCollapsed();
  const title = usePageTitle(pathname);
  const isAdminArea = pathname.startsWith('/admin');
  const area = isAdminArea ? 'Admin' : 'Dashboard';

  // The shell persists across navigation, so this would otherwise stay open.
  React.useEffect(() => setMobileOpen(false), [pathname]);

  const initials = initialsOf(user?.name, user?.email);

  return (
    <div className="flex min-h-screen bg-muted/40 text-foreground dark:bg-background">
      {/* Width is the only thing that changes on collapse, and it transitions. */}
      <aside
        className={[
          'hidden shrink-0 border-r border-sidebar-border bg-sidebar transition-[width] duration-200 ease-out lg:block',
          collapsed ? 'w-[72px]' : 'w-64',
        ].join(' ')}
      >
        <div className="sticky top-0 flex h-screen flex-col">
          <SidebarBrand collapsed={collapsed} />
          <SidebarNav collapsed={collapsed} />
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-20 flex h-16 items-center gap-2 border-b border-border/70 bg-background/80 px-4 backdrop-blur-md md:px-6">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open navigation" className={`size-9 lg:hidden ${isAdminArea ? 'hidden' : ''}`}>
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex w-72 flex-col bg-sidebar p-0">
              <SidebarBrand />
              <SidebarNav onNavigate={() => setMobileOpen(false)} />
            </SheetContent>
          </Sheet>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggle}
                aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                aria-pressed={collapsed}
                className="hidden size-9 text-muted-foreground lg:inline-flex"
              >
                <PanelLeft className="size-[18px]" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>{collapsed ? 'Expand sidebar' : 'Collapse sidebar'}</TooltipContent>
          </Tooltip>

          {/* Logo only where the sidebar is not showing it (phones). */}
          <Link to="/admin" className="flex min-w-0 items-center gap-2 lg:hidden" aria-label={`${brand.name} home`}>
            <LogoMark className="size-8 shrink-0" />
            <span className="truncate text-[15px] font-semibold tracking-tight">{brand.name}</span>
          </Link>

          <span aria-hidden className="mx-1 hidden h-5 w-px bg-border lg:block" />
          <nav aria-label="Breadcrumb" className="hidden min-w-0 items-center gap-1.5 text-sm lg:flex">
            <span className="hidden text-muted-foreground sm:inline">{area}</span>
            {title && <ChevronRight className="hidden size-3.5 text-muted-foreground/60 sm:inline" aria-hidden />}
            <span className="truncate font-medium">{title}</span>
          </nav>

          <div className="ml-auto flex items-center gap-1">
            <ThemeControls />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-9 gap-1.5 rounded-full pl-1 pr-2">
                  <Avatar initials={initials} className="size-7 text-[11px] ring-0" />
                  <ChevronDown className="size-3.5 text-muted-foreground" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="font-normal">
                  <span className="block truncate text-sm font-medium text-foreground">{user?.name || 'Signed in'}</span>
                  <span className="block truncate text-xs text-muted-foreground">{user?.email}</span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild><Link to="/dashboard/profile">Profile</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link to="/">Back to site</Link></DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => logout()}>
                  <LogOut className="size-4" /> Sign out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <main className={`flex-1 px-4 py-6 md:px-8 md:py-8 ${isAdminArea ? 'pb-32 lg:pb-8' : ''}`}>
          <div className="mx-auto w-full max-w-7xl">
            <Outlet />
          </div>
        </main>
        {isAdminArea && <MobileTabBar />}
      </div>
    </div>
  );
}

export function DashboardLayoutRoute() {
  // One guard for every page in the section.
  return (
    <AuthGuard>
      <Shell />
    </AuthGuard>
  );
}
