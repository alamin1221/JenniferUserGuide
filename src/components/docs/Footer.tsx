import { Link } from "@tanstack/react-router";
import { Sparkles, Github, MessageCircle, LayoutDashboard, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="grid h-9 w-9 place-items-center rounded-xl gradient-brand glow-purple">
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <div className="font-bold">Jennifer</div>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">The all-in-one Discord bot with moderation, verification, tickets, welcome, anti-raid and voice tools.</p>
          </div>
          <FooterCol title="Product" links={[
            { label: "Documentation", to: "/docs" },
            { label: "Commands", to: "/docs/commands" },
            { label: "Changelog", to: "/docs/changelog" },
            { label: "Dashboard", href: "#" },
          ]} />
          <FooterCol title="Community" links={[
            { label: "Support Server", href: "#" },
            { label: "GitHub", href: "https://github.com" },
            { label: "Discord", href: "#" },
            { label: "Status", href: "#" },
          ]} />
          <FooterCol title="Legal" links={[
            { label: "Privacy", href: "#" },
            { label: "Terms", href: "#" },
            { label: "Support", to: "/docs/support" },
            { label: "FAQ", to: "/docs/faq" },
          ]} />
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-muted-foreground sm:flex-row">
          <div>© {new Date().getFullYear()} Jennifer. All rights reserved.</div>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1"><Heart className="h-3 w-3 text-brand" /> Made with love</span>
            <span>v3.2.0</span>
            <a href="https://github.com" className="inline-flex items-center gap-1 hover:text-foreground"><Github className="h-3 w-3" /> GitHub</a>
            <a href="#" className="inline-flex items-center gap-1 hover:text-foreground"><MessageCircle className="h-3 w-3" /> Discord</a>
            <a href="#" className="inline-flex items-center gap-1 hover:text-foreground"><LayoutDashboard className="h-3 w-3" /> Dashboard</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; to?: string; href?: string }[] }) {
  return (
    <div>
      <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{title}</div>
      <ul className="space-y-2 text-sm">
        {links.map((l) => (
          <li key={l.label}>
            {l.to ? <Link to={l.to} className="text-muted-foreground transition hover:text-foreground">{l.label}</Link>
              : <a href={l.href} className="text-muted-foreground transition hover:text-foreground">{l.label}</a>}
          </li>
        ))}
      </ul>
    </div>
  );
}
