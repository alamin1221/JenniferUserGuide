import { Link, useRouterState } from "@tanstack/react-router";
import nav from "@/data/navigation.json";
import { allCategories } from "@/lib/docs";
import { Icon } from "./Icon";
import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function DocsSidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <aside className="flex h-full w-full flex-col gap-1 overflow-y-auto p-4">
      <Link to="/" className="mb-4 flex items-center gap-2.5 px-2" onClick={onNavigate}>
        <div className="grid h-9 w-9 place-items-center rounded-xl gradient-brand glow-purple">
          <Sparkles className="h-4 w-4 text-white" />
        </div>
        <div className="min-w-0">
          <div className="truncate text-sm font-bold">Jennifer</div>
          <div className="truncate text-[10px] uppercase tracking-widest text-muted-foreground">Documentation</div>
        </div>
      </Link>

      {nav.map((section) => (
        <NavSection key={section.label} section={section as any} pathname={pathname} onNavigate={onNavigate} />
      ))}

      <div className="mt-2">
        <div className="mb-1 px-3 py-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Categories</div>
        <div className="space-y-0.5">
          {allCategories.map((c) => {
            const to = `/docs/commands/${c.slug}`;
            const active = pathname === to;
            return (
              <Link
                key={c.slug}
                to={to}
                onClick={onNavigate}
                className={cn(
                  "group flex items-center gap-2.5 rounded-lg px-3 py-1.5 text-sm transition",
                  active ? "bg-white/10 text-foreground" : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                )}
              >
                <span className={cn("grid h-6 w-6 shrink-0 place-items-center rounded-md bg-gradient-to-br text-white", c.color)}>
                  <Icon name={c.icon} size={13} />
                </span>
                <span className="truncate">{c.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

function NavSection({ section, pathname, onNavigate }: { section: { label: string; icon: string; items: { label: string; to: string }[] }; pathname: string; onNavigate?: () => void }) {
  const hasActive = section.items.some((i) => pathname === i.to);
  const [open, setOpen] = useState(hasActive || section.label === "Getting Started");
  return (
    <div>
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground"
      >
        <span className="flex items-center gap-2"><Icon name={section.icon} size={13} />{section.label}</span>
        <motion.span animate={{ rotate: open ? 0 : -90 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="h-3.5 w-3.5" />
        </motion.span>
      </button>
      {open && (
        <div className="ml-2 border-l border-white/5 pl-2">
          {section.items.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={onNavigate}
                className={cn(
                  "relative block rounded-md px-3 py-1.5 text-sm transition",
                  active ? "bg-white/10 text-foreground" : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                )}
              >
                {active && <span className="absolute inset-y-1 left-0 w-0.5 rounded-full gradient-brand" />}
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
