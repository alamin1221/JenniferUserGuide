import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, Prose, Callout } from "@/components/docs/DocsPrimitives";
import { LayoutDashboard } from "lucide-react";

export const Route = createFileRoute("/docs/dashboard")({
  component: Page,
  head: () => ({ meta: [{ title: "Dashboard Guide · Jennifer Docs" }, { name: "description", content: "How to use the Jennifer web dashboard." }] }),
});

function Page() {
  return (
    <>
      <PageHeader eyebrow="Guide" title="Dashboard Guide" description="Configure every module from a beautiful web dashboard." icon={<LayoutDashboard className="h-8 w-8 text-brand" />} />
      <Section title="Signing in">
        <Prose><p>Head to the dashboard, click <strong>Login with Discord</strong>, authorize Jennifer, then pick the server you want to manage.</p></Prose>
      </Section>
      <Section title="Available modules">
        <Prose>
          <ul>
            <li>Server overview & live statistics</li>
            <li>Verification, Welcome & Leave configuration</li>
            <li>Tickets, Auto Role & Nickname Tag</li>
            <li>Anti-Raid, Anti-Spam, AutoMod, Security</li>
            <li>Logging channels & Announcement scheduler</li>
            <li>Invite tracker, Bot Profile & Keyword system</li>
          </ul>
        </Prose>
      </Section>
      <Callout>Every dashboard action mirrors a slash command — you can use either.</Callout>
    </>
  );
}
