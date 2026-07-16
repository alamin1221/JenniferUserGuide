import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section } from "@/components/docs/DocsPrimitives";
import permissions from "@/data/permissions.json";
import { KeyRound, ShieldAlert, ShieldCheck, Shield } from "lucide-react";

export const Route = createFileRoute("/docs/guides/permissions")({
  component: Page,
  head: () => ({ meta: [{ title: "Permissions Guide · Jennifer Docs" }, { name: "description", content: "Every Discord permission Jennifer uses, and why." }] }),
});

const riskIcon = { high: ShieldAlert, medium: Shield, low: ShieldCheck } as const;
const riskColor = { high: "text-red-400", medium: "text-amber-400", low: "text-emerald-400" } as const;

function Page() {
  return (
    <>
      <PageHeader eyebrow="Guide" title="Permission Guide" description="Every Discord permission Jennifer might request, and what it's used for." icon={<KeyRound className="h-8 w-8 text-brand" />} />
      <Section>
        <div className="grid gap-3">
          {permissions.map((p) => {
            const I = riskIcon[p.risk as keyof typeof riskIcon];
            return (
              <div key={p.name} className="glass-strong flex items-start gap-4 rounded-2xl p-5">
                <I className={`mt-0.5 h-5 w-5 shrink-0 ${riskColor[p.risk as keyof typeof riskColor]}`} />
                <div>
                  <div className="font-semibold">{p.name}</div>
                  <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Section>
    </>
  );
}
