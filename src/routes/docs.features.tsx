import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/docs/DocsPrimitives";
import { allCategories } from "@/lib/docs";
import { Icon } from "@/components/docs/Icon";
import { Bot } from "lucide-react";

export const Route = createFileRoute("/docs/features")({
  component: Page,
  head: () => ({ meta: [{ title: "Bot Features · Jennifer Docs" }, { name: "description", content: "Every feature module offered by Jennifer." }] }),
});

function Page() {
  return (
    <>
      <PageHeader eyebrow="Overview" title="Bot Features" description="Explore every module Jennifer ships with." icon={<Bot className="h-8 w-8 text-brand" />} />
      <Section>
        <div className="grid gap-3 sm:grid-cols-2">
          {allCategories.map((c) => (
            <Link key={c.slug} to={`/docs/commands/${c.slug}`} className="glass-strong group rounded-2xl p-5 transition hover:border-white/20">
              <div className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br text-white ${c.color}`}><Icon name={c.icon} size={20} /></div>
              <div className="mt-3 font-semibold">{c.name}</div>
              <p className="mt-1 text-sm text-muted-foreground">{c.description}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
