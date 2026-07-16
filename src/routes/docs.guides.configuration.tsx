import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, Prose, Callout } from "@/components/docs/DocsPrimitives";
import { Settings } from "lucide-react";
import { Link } from "@tanstack/react-router";

const guides = [
  ["verification", "Verification"], ["welcome", "Welcome & Leave"], ["tickets", "Tickets"],
  ["security", "Security"], ["logging", "Logging"], ["invites", "Invite Tracker"],
  ["announcements", "Announcements"], ["keyword", "Keyword System"], ["automod", "AutoMod"],
  ["antispam", "Anti-Spam"], ["antiraid", "Anti-Raid"], ["voice", "Voice"],
];

export const Route = createFileRoute("/docs/guides/configuration")({
  component: Page,
  head: () => ({ meta: [{ title: "Configuration Guide · Jennifer Docs" }, { name: "description", content: "Configure every Jennifer module for your server." }] }),
});

function Page() {
  return (
    <>
      <PageHeader eyebrow="Guide" title="Configuration Guide" description="A one-page overview of every configurable module in Jennifer." icon={<Settings className="h-8 w-8 text-brand" />} />
      <Section title="Modules you can configure">
        <div className="grid gap-3 sm:grid-cols-2">
          {guides.map(([slug, name]) => (
            <Link key={slug} to={`/docs/guides/${slug}`} className="glass rounded-2xl p-4 transition hover:border-white/20">
              <div className="font-semibold">{name}</div>
              <p className="mt-1 text-sm text-muted-foreground">Open the {name} guide</p>
            </Link>
          ))}
        </div>
      </Section>
      <Callout title="Pro tip">Configure security modules (Verification, Anti-Raid, Anti-Spam, Logging) first — they protect the setup of everything else.</Callout>
      <Section title="General best practices">
        <Prose>
          <ul>
            <li>Place Jennifer's role at the top of the role list.</li>
            <li>Create dedicated log channels for each event type.</li>
            <li>Use one control channel where only staff can run commands.</li>
            <li>Test every module in a hidden channel before enabling it publicly.</li>
          </ul>
        </Prose>
      </Section>
    </>
  );
}
