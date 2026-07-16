import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader, Section, Prose } from "@/components/docs/DocsPrimitives";
import { allCategories, allCommands } from "@/lib/docs";
import { Icon } from "@/components/docs/Icon";
import { Terminal } from "lucide-react";
import { useState, useMemo } from "react";
import { CopyButton } from "@/components/docs/CopyButton";

export const Route = createFileRoute("/docs/commands/")({
  component: CommandsIndex,
  head: () => ({ meta: [{ title: "All Commands · Jennifer Docs" }, { name: "description", content: "Every slash command supported by Jennifer, grouped by category." }] }),
});

function CommandsIndex() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return allCommands;
    return allCommands.filter((c) => c.command.toLowerCase().includes(s) || c.description.toLowerCase().includes(s));
  }, [q]);

  return (
    <>
      <PageHeader
        eyebrow="Reference"
        title="Complete Command Reference"
        description={`${allCommands.length} slash commands across ${allCategories.length} categories. Click any command for full details.`}
        icon={<Terminal className="h-8 w-8 text-brand" />}
      />

      <Section>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Filter commands…"
          className="glass w-full rounded-xl px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-brand"
        />
      </Section>

      {q === "" ? (
        <Section title="Categories">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {allCategories.map((c) => {
              const count = allCommands.filter((x) => x.category === c.slug).length;
              return (
                <Link key={c.slug} to={`/docs/commands/${c.slug}`} className="glass-strong group rounded-2xl p-5 transition hover:border-white/20">
                  <div className="flex items-start justify-between">
                    <div className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br text-white ${c.color}`}>
                      <Icon name={c.icon} size={18} />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-[10px] font-semibold text-muted-foreground">{count}</span>
                  </div>
                  <div className="mt-3 font-semibold">{c.name}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{c.description}</p>
                </Link>
              );
            })}
          </div>
        </Section>
      ) : (
        <Section title={`${filtered.length} result${filtered.length !== 1 ? "s" : ""}`}>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead className="bg-white/5 text-left text-[11px] uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-3 py-2">Command</th>
                  <th className="px-3 py-2">Description</th>
                  <th className="px-3 py-2">Category</th>
                  <th className="px-3 py-2"></th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((c) => (
                  <tr key={c.command} className="border-t border-white/5 hover:bg-white/5">
                    <td className="px-3 py-2 font-mono text-brand">{c.command}</td>
                    <td className="px-3 py-2 text-muted-foreground">{c.description}</td>
                    <td className="px-3 py-2 text-xs text-muted-foreground">{c.category}</td>
                    <td className="px-3 py-2 text-right"><CopyButton text={c.command} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      )}

      <Prose>
        <p className="text-xs">Tip: press <code>⌘K</code> anywhere to instantly search across every command, guide and page.</p>
      </Prose>
    </>
  );
}
