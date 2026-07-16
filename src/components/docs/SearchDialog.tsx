import { useEffect, useMemo, useState } from "react";
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { useNavigate } from "@tanstack/react-router";
import { allCommands, allCategories, commandSlug } from "@/lib/docs";
import nav from "@/data/navigation.json";
import { Icon } from "./Icon";

export function SearchDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const navigate = useNavigate();
  const pages = useMemo(() => nav.flatMap((s) => s.items.map((i) => ({ ...i, section: s.label }))), []);
  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Search commands, guides, categories…" />
      <CommandList>
        <CommandEmpty>No results.</CommandEmpty>
        <CommandGroup heading="Pages">
          {pages.map((p) => (
            <CommandItem key={p.to} value={`${p.section} ${p.label}`} onSelect={() => { onOpenChange(false); navigate({ to: p.to }); }}>
              <span className="text-muted-foreground">{p.section}</span>
              <span className="mx-1 text-muted-foreground">/</span>
              <span>{p.label}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Categories">
          {allCategories.map((c) => (
            <CommandItem key={c.slug} value={`${c.name} ${c.description}`} onSelect={() => { onOpenChange(false); navigate({ to: `/docs/commands/${c.slug}` }); }}>
              <Icon name={c.icon} size={14} />
              <span className="ml-2">{c.name}</span>
              <span className="ml-2 text-xs text-muted-foreground">{c.description}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Commands">
          {allCommands.map((c) => (
            <CommandItem key={c.command} value={`${c.command} ${c.description}`} onSelect={() => { onOpenChange(false); navigate({ to: `/docs/commands/${c.category}`, hash: commandSlug(c.command) }); }}>
              <code className="font-mono text-brand">{c.command}</code>
              <span className="ml-2 truncate text-xs text-muted-foreground">{c.description}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}

export function useSearchHotkey(setOpen: (v: boolean) => void) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.key === "k" || e.key === "K") && (e.metaKey || e.ctrlKey)) {
        e.preventDefault(); setOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setOpen]);
}
