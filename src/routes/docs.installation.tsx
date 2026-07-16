import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, Prose, Callout } from "@/components/docs/DocsPrimitives";
import { Rocket } from "lucide-react";
import { CopyButton } from "@/components/docs/CopyButton";

export const Route = createFileRoute("/docs/installation")({
  component: Page,
  head: () => ({ meta: [{ title: "Installation · Jennifer Docs" }, { name: "description", content: "Invite Jennifer to your Discord server and configure permissions." }] }),
});

function Page() {
  return (
    <>
      <PageHeader eyebrow="Getting Started" title="Installation" description="Invite Jennifer to your server in under a minute." icon={<Rocket className="h-8 w-8 text-brand" />} />
      <Section title="1. Invite the bot">
        <Prose>
          <p>Open the invite link and select the server you want to add Jennifer to. You must have the <code>Manage Server</code> permission on the target server.</p>
          <ul>
            <li>Recommended: keep <strong>Administrator</strong> checked.</li>
            <li>Alternatively, grant: Manage Guild, Manage Roles, Manage Channels, Manage Messages, Kick / Ban / Timeout / Move / Mute Members.</li>
            <li>Always include the <code>applications.commands</code> scope so slash commands appear.</li>
          </ul>
        </Prose>
      </Section>
      <Section title="2. Verify the bot is online">
        <div className="glass-strong flex items-center justify-between gap-3 rounded-xl p-4">
          <code className="font-mono text-brand">/utility ping</code>
          <CopyButton text="/utility ping" />
        </div>
      </Section>
      <Section title="3. Run your first setup">
        <div className="grid gap-3 sm:grid-cols-2">
          {["/verify setup","/welcomesystem welcome setup","/antiraid setup","/ticket setup"].map((c) => (
            <div key={c} className="glass flex items-center justify-between gap-3 rounded-xl p-3"><code className="font-mono text-brand text-sm">{c}</code><CopyButton text={c} /></div>
          ))}
        </div>
      </Section>
      <Callout variant="success" title="You're ready!">
        Head to the sidebar and pick any guide to configure a specific feature.
      </Callout>
    </>
  );
}
