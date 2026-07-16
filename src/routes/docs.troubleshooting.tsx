import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, Prose, Callout } from "@/components/docs/DocsPrimitives";
import { AlertTriangle } from "lucide-react";

const problems = [
  { t: "Slash commands are missing", b: "Re-invite the bot with the `applications.commands` scope. Wait 5-10 minutes and restart your Discord client." },
  { t: "Bot appears offline", b: "Check the status page. If Discord is fine, wait 1-2 minutes — the bot may be restarting." },
  { t: "\"Missing Permissions\" error", b: "The bot's role must be ABOVE the roles it manages. Grant Administrator or ensure Manage Roles / Channels / Messages are enabled." },
  { t: "Role hierarchy issue", b: "Drag Jennifer's role above every role it needs to manage in Server Settings → Roles." },
  { t: "Database / configuration errors", b: "Run the corresponding `/... status` command. If corrupted, run `/... setup` again to reset the module." },
  { t: "Hosting or latency issues", b: "Check `/utility ping`. Values under 200 ms are healthy. Higher values may indicate Discord API problems." },
  { t: "Discord API rate limits", b: "Bulk actions (mass ban, mass tag, DM broadcast) are throttled by Discord itself. Wait 1-2 minutes between large operations." },
  { t: "Verification not working", b: "Ensure the verified role is BELOW the bot role, and the verification channel is visible to unverified members." },
  { t: "Tickets not creating", b: "Confirm the ticket category exists and the bot has Manage Channels + View Channel permission in it." },
  { t: "Welcome message not sending", b: "Check `/welcomesystem welcome status`. Ensure the configured channel exists and the bot can send messages there." },
];

export const Route = createFileRoute("/docs/troubleshooting")({
  component: Page,
  head: () => ({ meta: [{ title: "Troubleshooting · Jennifer Docs" }, { name: "description", content: "Common problems and how to fix them." }] }),
});

function Page() {
  return (
    <>
      <PageHeader eyebrow="Reference" title="Troubleshooting" description="Common issues and step-by-step fixes." icon={<AlertTriangle className="h-8 w-8 text-brand" />} />
      <Section>
        <div className="grid gap-3">
          {problems.map((p) => (
            <div key={p.t} className="glass-strong rounded-2xl p-5">
              <div className="font-semibold">{p.t}</div>
              <p className="mt-1 text-sm text-muted-foreground">{p.b}</p>
            </div>
          ))}
        </div>
      </Section>
      <Callout title="Still stuck?">Join our support server — link in the sidebar and footer.</Callout>
    </>
  );
}
