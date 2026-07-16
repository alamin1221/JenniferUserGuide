import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, Prose, Callout } from "@/components/docs/DocsPrimitives";
import { Code2 } from "lucide-react";

export const Route = createFileRoute("/docs/developer")({
  component: Page,
  head: () => ({ meta: [{ title: "Developer Guide · Jennifer Docs" }, { name: "description", content: "Extend or self-host Jennifer." }] }),
});

function Page() {
  return (
    <>
      <PageHeader eyebrow="Reference" title="Developer Guide" description="Contribute, extend, or self-host Jennifer." icon={<Code2 className="h-8 w-8 text-brand" />} />
      <Section title="Tech stack">
        <Prose>
          <ul>
            <li>Python 3.11+ with <code>discord.py 2.x</code></li>
            <li>SQLite / PostgreSQL storage per guild</li>
            <li>aiohttp for external APIs (translate, QR, etc.)</li>
            <li>Cog-based modular architecture</li>
          </ul>
        </Prose>
      </Section>
      <Section title="Adding a new cog">
        <Prose>
          <p>Create a file under <code>cogs/</code> that subclasses <code>commands.Cog</code>. Register slash commands using <code>@app_commands.command()</code>. Reload with <code>/reload cog:my_cog</code>.</p>
        </Prose>
      </Section>
      <Callout>Full source, contribution guide and issue tracker live on our GitHub organization.</Callout>
    </>
  );
}
