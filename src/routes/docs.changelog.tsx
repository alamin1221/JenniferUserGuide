import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, Prose } from "@/components/docs/DocsPrimitives";
import { GitCommit } from "lucide-react";

const releases = [
  { v: "v3.2.0", d: "2026-06-10", notes: ["Added `/announce dm` global broadcast", "Improved Anti-Raid detection accuracy", "New per-server Bot Profile module"] },
  { v: "v3.1.0", d: "2026-04-02", notes: ["Introduced Nickname Tag system", "AutoMod violation leaderboards", "TTS voice picker"] },
  { v: "v3.0.0", d: "2026-01-14", notes: ["Full rewrite on discord.py 2.x", "New dashboard", "Master Security module"] },
];

export const Route = createFileRoute("/docs/changelog")({
  component: Page,
  head: () => ({ meta: [{ title: "Changelog · Jennifer Docs" }, { name: "description", content: "Release notes for the Jennifer Discord bot." }] }),
});

function Page() {
  return (
    <>
      <PageHeader eyebrow="Reference" title="Changelog" description="Everything new in every release." icon={<GitCommit className="h-8 w-8 text-brand" />} />
      <Section>
        <div className="space-y-4">
          {releases.map((r) => (
            <div key={r.v} className="glass-strong rounded-2xl p-6">
              <div className="flex items-baseline justify-between">
                <div className="text-lg font-bold gradient-text">{r.v}</div>
                <div className="text-xs text-muted-foreground">{r.d}</div>
              </div>
              <Prose><ul>{r.notes.map((n) => <li key={n}>{n}</li>)}</ul></Prose>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
