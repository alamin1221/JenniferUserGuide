import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Search, Github, ExternalLink } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { DocsSidebar } from "./DocsSidebar";
import { useState } from "react";
import { SearchDialog, useSearchHotkey } from "./SearchDialog";
import nav from "@/data/navigation.json";
import { allCategories } from "@/lib/docs";

const APP_VERSION = "v3.2.0";

export function DocsTopBar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [sheetOpen, setSheetOpen] = useState(false);
  useSearchHotkey(setSearchOpen);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const crumbs = buildCrumbs(pathname);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/70 backdrop-blur-xl">
      <div className="flex h-14 items-center gap-3 px-3 sm:px-6">
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger asChild>
            <button className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 lg:hidden" aria-label="Open menu">
              <Menu className="h-4 w-4" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-80 border-white/10 bg-background/95 p-0">
            <SheetTitle className="sr-only">Documentation navigation</SheetTitle>
            <DocsSidebar onNavigate={() => setSheetOpen(false)} />
          </SheetContent>
        </Sheet>

        <nav className="hidden min-w-0 items-center gap-1.5 truncate text-sm text-muted-foreground sm:flex">
          {crumbs.map((c, i) => (
            <span key={c.to} className="flex items-center gap-1.5">
              {i > 0 && <span className="text-white/20">/</span>}
              <Link to={c.to} className="truncate transition hover:text-foreground">{c.label}</Link>
            </span>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={() => setSearchOpen(true)}
            className="glass flex h-9 items-center gap-2 rounded-xl px-3 text-sm text-muted-foreground transition hover:text-foreground"
          >
            <Search className="h-4 w-4" />
            <span className="hidden sm:inline">Search docs…</span>
            <kbd className="ml-2 hidden rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[10px] sm:inline">⌘K</kbd>
          </button>
          <span className="hidden rounded-full border border-brand/40 bg-brand/10 px-2 py-0.5 text-[10px] font-semibold text-brand sm:inline">{APP_VERSION}</span>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 transition hover:bg-white/10" aria-label="GitHub">
            <Github className="h-4 w-4" />
          </a>
          <a href="#invite" className="hidden items-center gap-1.5 rounded-xl gradient-brand px-3 py-2 text-xs font-semibold text-white glow-purple sm:inline-flex">
            Invite Bot <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </header>
  );
}

function buildCrumbs(pathname: string) {
  const crumbs: { label: string; to: string }[] = [{ label: "Docs", to: "/docs" }];
  if (pathname === "/docs" || pathname === "/") return crumbs;
  // find in nav
  for (const s of nav) {
    for (const it of s.items) {
      if (it.to === pathname) { crumbs.push({ label: s.label, to: s.items[0]?.to || "/docs" }); crumbs.push({ label: it.label, to: it.to }); return crumbs; }
    }
  }
  const catMatch = pathname.match(/^\/docs\/commands\/([^/]+)/);
  if (catMatch) {
    crumbs.push({ label: "Commands", to: "/docs/commands" });
    const cat = allCategories.find((c) => c.slug === catMatch[1]);
    if (cat) crumbs.push({ label: cat.name, to: pathname });
    return crumbs;
  }
  if (pathname.startsWith("/docs/commands")) crumbs.push({ label: "Commands", to: "/docs/commands" });
  return crumbs;
}
