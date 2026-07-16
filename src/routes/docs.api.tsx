import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, Prose, Callout } from "@/components/docs/DocsPrimitives";
import { Plug } from "lucide-react";
import { CopyButton } from "@/components/docs/CopyButton";

const endpoints = [
  { m: "GET", p: "/api/v1/guilds/:id", d: "Fetch a guild's Jennifer configuration." },
  { m: "GET", p: "/api/v1/guilds/:id/commands", d: "List enabled commands for the guild." },
  { m: "POST", p: "/api/v1/guilds/:id/verify", d: "Trigger a verification event via webhook." },
  { m: "GET", p: "/api/v1/stats", d: "Global bot statistics." },
];

export const Route = createFileRoute("/docs/api")({
  component: Page,
  head: () => ({ meta: [{ title: "API Reference · Jennifer Docs" }, { name: "description", content: "REST endpoints exposed by the Jennifer dashboard." }] }),
});

function Page() {
  return (
    <>
      <PageHeader eyebrow="Reference" title="API Reference" description="Authenticated REST endpoints for the Jennifer dashboard & integrations." icon={<Plug className="h-8 w-8 text-brand" />} />
      <Callout variant="warn" title="Authentication">All endpoints require a Bearer token created in the dashboard.</Callout>
      <Section title="Endpoints">
        <div className="space-y-3">
          {endpoints.map((e) => (
            <div key={e.p} className="glass-strong flex items-center justify-between gap-3 rounded-2xl p-4">
              <div className="flex min-w-0 items-center gap-3">
                <span className={`shrink-0 rounded-md px-2 py-0.5 font-mono text-[11px] font-bold ${e.m === "GET" ? "bg-emerald-400/15 text-emerald-300" : "bg-brand/15 text-brand"}`}>{e.m}</span>
                <code className="truncate font-mono text-sm">{e.p}</code>
              </div>
              <CopyButton text={`${e.m} ${e.p}`} />
            </div>
          ))}
        </div>
        <div className="mt-4"><Prose><p className="text-sm">Every endpoint returns JSON with a <code>data</code> and <code>error</code> field.</p></Prose></div>
      </Section>
    </>
  );
}
