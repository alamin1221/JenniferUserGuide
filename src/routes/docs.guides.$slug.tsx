import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { PageHeader, Section, Prose, Callout } from "@/components/docs/DocsPrimitives";
import { allCategories, categoryBySlug, commandsFor } from "@/lib/docs";
import { Icon } from "@/components/docs/Icon";
import { CommandCard } from "@/components/docs/CommandCard";
import { CopyButton } from "@/components/docs/CopyButton";

const map: Record<string, string> = {
  configuration: "settings",
  moderation: "purge",
  verification: "verify",
  welcome: "welcome",
  tickets: "ticket",
  voice: "voice",
  announcements: "announce",
  invites: "invite",
  security: "security",
  antiraid: "antiraid",
  antispam: "antispam",
  logging: "logs",
  autorole: "autorole",
  nickname: "tag",
  automod: "automod",
  keyword: "keyword",
  botprofile: "botprofile",
};

export const Route = createFileRoute("/docs/guides/$slug")({
  component: GuidePage,
  loader: ({ params }) => {
    const catSlug = map[params.slug];
    if (!catSlug) throw notFound();
    const cat = categoryBySlug(catSlug);
    if (!cat) throw notFound();
    return { cat };
  },
  notFoundComponent: () => (
    <div className="glass-strong rounded-2xl p-10 text-center">
      <h1 className="text-2xl font-bold">Guide not found</h1>
      <Link to="/docs" className="mt-4 inline-block text-brand">Back to docs</Link>
    </div>
  ),
  errorComponent: ({ error }) => <div className="glass-strong rounded-2xl p-6"><p>{error.message}</p></div>,
  head: ({ params }) => {
    const catSlug = map[params.slug];
    const cat = allCategories.find((c) => c.slug === catSlug);
    return { meta: [
      { title: `${cat?.name ?? "Guide"} Guide · Jennifer Docs` },
      { name: "description", content: `Configure ${cat?.name ?? "this feature"} step by step.` },
    ] };
  },
});

function GuidePage() {
  const { cat } = Route.useLoaderData();
  const cmds = commandsFor(cat.slug);
  const setupCmd = cmds.find((c) => /setup|panel|send/.test(c.command)) ?? cmds[0];

  return (
    <>
      <PageHeader
        eyebrow="Guide"
        title={`${cat.name} Guide`}
        description={cat.description}
        icon={<div className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br text-white ${cat.color}`}><Icon name={cat.icon} size={20} /></div>}
      />

      <Section title="Overview">
        <Prose>
          <p>{cat.description} This guide walks you through setup, options and best-practices for the <strong>{cat.name}</strong> module.</p>
        </Prose>
      </Section>

      <Section title="Quick setup">
        <div className="glass-strong flex items-center justify-between gap-3 rounded-xl p-4">
          <code className="font-mono text-brand">{setupCmd?.command}</code>
          {setupCmd && <CopyButton text={setupCmd.command} />}
        </div>
        <Callout variant="info">Every command in this module also works from the web dashboard.</Callout>
      </Section>

      <Section title="Step-by-step">
        <Prose>
          <ol>
            <li>Run the setup command above to enable the module.</li>
            <li>Configure the channels and roles the module should use.</li>
            <li>Use <code>/{cat.slug} status</code> (where available) to verify the configuration.</li>
            <li>Test the flow in a private channel before rolling out.</li>
          </ol>
        </Prose>
      </Section>

      <Section title={`All ${cat.name} commands (${cmds.length})`}>
        <div className="grid gap-4">
          {cmds.map((c, i) => <CommandCard key={c.command} cmd={c} index={i} />)}
        </div>
      </Section>
    </>
  );
}
