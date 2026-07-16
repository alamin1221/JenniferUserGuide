import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { categoryBySlug, commandsFor, allCategories } from "@/lib/docs";
import { PageHeader, Section } from "@/components/docs/DocsPrimitives";
import { CommandCard } from "@/components/docs/CommandCard";
import { Icon } from "@/components/docs/Icon";
import { CopyButton } from "@/components/docs/CopyButton";

export const Route = createFileRoute("/docs/commands/$category")({
  component: CategoryPage,
  loader: ({ params }) => {
    const cat = categoryBySlug(params.category);
    if (!cat) throw notFound();
    return { cat };
  },
  notFoundComponent: () => (
    <div className="glass-strong rounded-2xl p-10 text-center">
      <h1 className="text-2xl font-bold">Category not found</h1>
      <Link to="/docs/commands" className="mt-4 inline-block text-brand">Browse all categories</Link>
    </div>
  ),
  errorComponent: ({ error }) => <div className="glass-strong rounded-2xl p-6"><p>{error.message}</p></div>,
  head: ({ params }) => {
    const cat = allCategories.find((c) => c.slug === params.category);
    return { meta: [
      { title: `${cat?.name ?? "Category"} · Jennifer Commands` },
      { name: "description", content: cat?.description ?? "Jennifer command category." },
    ] };
  },
});

function CategoryPage() {
  const { cat } = Route.useLoaderData();
  const cmds = commandsFor(cat.slug);
  return (
    <>
      <PageHeader
        eyebrow="Commands"
        title={cat.name}
        description={cat.description}
        icon={<div className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br text-white ${cat.color}`}><Icon name={cat.icon} size={20} /></div>}
      />

      <Section title={`Overview (${cmds.length} commands)`}>
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <table className="w-full text-sm">
            <thead className="bg-white/5 text-left text-[11px] uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-3 py-2">Command</th>
                <th className="px-3 py-2">Description</th>
                <th className="px-3 py-2">Permission</th>
                <th className="px-3 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {cmds.map((c) => (
                <tr key={c.command} className="border-t border-white/5 hover:bg-white/5">
                  <td className="px-3 py-2 font-mono text-brand">
                    <a href={`#${c.command.replace(/^\//, "").replace(/\s+/g, "-")}`}>{c.command}</a>
                  </td>
                  <td className="px-3 py-2 text-muted-foreground">{c.description}</td>
                  <td className="px-3 py-2 text-xs text-muted-foreground">{c.permission ?? "—"}</td>
                  <td className="px-3 py-2 text-right"><CopyButton text={c.command} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section title="Details">
        <div className="grid gap-4">
          {cmds.map((c, i) => <CommandCard key={c.command} cmd={c} index={i} />)}
        </div>
      </Section>
    </>
  );
}
