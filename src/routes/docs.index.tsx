import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section, Prose, Callout } from "@/components/docs/DocsPrimitives";
import { allCategories, allCommands } from "@/lib/docs";
import { Icon } from "@/components/docs/Icon";
import { ArrowRight, BookOpen } from "lucide-react";

export const Route = createFileRoute("/docs/")({
  component: Introduction,
  head: () => ({ meta: [{ title: "Introduction · Jennifer Docs" }, { name: "description", content: "Welcome to the official Jennifer Discord bot documentation." }] }),
});

function Introduction() {
  return (
    <>
      <PageHeader
        eyebrow="Getting Started"
        title="Welcome to Jennifer"
        description="The official documentation for the Jennifer Discord bot. Learn every command, feature and configuration option."
        icon={<BookOpen className="h-8 w-8 text-brand" />}
      />

      <Section>
        <Prose>
          <p>
            Jennifer is a premium all-in-one Discord bot with <strong>{allCommands.length}+ slash commands</strong> across <strong>{allCategories.length} feature categories</strong> —
            moderation, verification, tickets, welcome, anti-raid, voice tools, invite tracking, announcements and much more.
          </p>
          <p>Use the sidebar to jump into any topic, or start with the quick links below.</p>
        </Prose>
      </Section>

      <Section title="Popular guides">
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { to: "/docs/installation", label: "Installation", desc: "Invite the bot and grant permissions." },
            { to: "/docs/guides/verification", label: "Verification", desc: "Set up human verification with modal questions." },
            { to: "/docs/guides/antiraid", label: "Anti-Raid", desc: "Auto-lockdown and punish raiders." },
            { to: "/docs/guides/tickets", label: "Tickets", desc: "Create a ticket panel and staff role." },
          ].map((c) => (
            <Link key={c.to} to={c.to} className="glass rounded-2xl p-4 transition hover:border-white/20">
              <div className="flex items-center justify-between">
                <div className="font-semibold">{c.label}</div>
                <ArrowRight className="h-4 w-4 text-brand" />
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section title="Browse by category">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {allCategories.map((c) => (
            <Link key={c.slug} to={`/docs/commands/${c.slug}`} className="glass-strong group rounded-2xl p-4 transition hover:border-white/20">
              <div className="flex items-center gap-3">
                <div className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br text-white ${c.color}`}>
                  <Icon name={c.icon} size={16} />
                </div>
                <div className="min-w-0">
                  <div className="truncate font-semibold">{c.name}</div>
                  <div className="truncate text-xs text-muted-foreground">{c.description}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Callout title="Need help?">
        Check the <Link to="/docs/faq" className="text-brand underline-offset-4 hover:underline">FAQ</Link> or the{" "}
        <Link to="/docs/troubleshooting" className="text-brand underline-offset-4 hover:underline">Troubleshooting</Link> page. Still stuck? Join our support server.
      </Callout>
    </>
  );
}
