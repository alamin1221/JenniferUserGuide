import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageHeader({ eyebrow, title, description, icon }: { eyebrow?: string; title: string; description?: string; icon?: ReactNode }) {
  return (
    <motion.header initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mb-8 border-b border-white/5 pb-8">
      {eyebrow && <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-brand">{eyebrow}</div>}
      <div className="flex items-center gap-3">
        {icon}
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
      </div>
      {description && <p className="mt-3 max-w-2xl text-muted-foreground">{description}</p>}
    </motion.header>
  );
}

export function Section({ title, children, id }: { title?: string; children: ReactNode; id?: string }) {
  return (
    <section id={id} className="mb-10">
      {title && <h2 className="mb-4 text-xl font-semibold">{title}</h2>}
      <div className="space-y-4">{children}</div>
    </section>
  );
}

export function Callout({ variant = "info", title, children }: { variant?: "info" | "warn" | "success" | "danger"; title?: string; children: ReactNode }) {
  const v = {
    info: "border-brand/30 bg-brand/5 text-foreground",
    warn: "border-amber-400/30 bg-amber-400/5",
    success: "border-emerald-400/30 bg-emerald-400/5",
    danger: "border-red-400/30 bg-red-400/5",
  }[variant];
  return (
    <div className={`rounded-2xl border ${v} p-4`}>
      {title && <div className="mb-1 font-semibold">{title}</div>}
      <div className="text-sm text-muted-foreground">{children}</div>
    </div>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return <div className="space-y-4 leading-relaxed text-muted-foreground [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-foreground [&_a]:text-brand [&_a]:underline-offset-4 hover:[&_a]:underline [&_code]:rounded [&_code]:bg-white/5 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-xs [&_code]:text-brand [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6 [&_li]:mt-1.5">{children}</div>;
}
