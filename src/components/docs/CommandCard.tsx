import { motion } from "framer-motion";
import { CopyButton } from "./CopyButton";
import type { Cmd } from "@/lib/docs";
import { AlertTriangle, Lightbulb, StickyNote } from "lucide-react";

export function CommandCard({ cmd, index = 0 }: { cmd: Cmd; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.25) }}
      className="glass-strong group relative overflow-hidden rounded-2xl p-5 sm:p-6 transition hover:border-white/15"
      id={cmd.command.replace(/^\//, "").replace(/\s+/g, "-")}
    >
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent opacity-0 transition group-hover:opacity-100" />

      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-3 sm:flex sm:items-center sm:justify-between">
        <div className="min-w-0">
          <code className="block truncate font-mono text-base sm:text-lg font-semibold gradient-text">{cmd.command}</code>
          <p className="mt-1 text-sm text-muted-foreground">{cmd.description}</p>
        </div>
        <CopyButton text={cmd.command} />
      </div>

      {cmd.permission && (
        <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          Requires: {cmd.permission}
        </div>
      )}

      {cmd.parameters && cmd.parameters.length > 0 && (
        <div className="mt-4">
          <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Parameters</div>
          <div className="overflow-hidden rounded-xl border border-white/10">
            <table className="w-full text-sm">
              <thead className="bg-white/5 text-left text-[11px] uppercase tracking-wider text-muted-foreground">
                <tr>
                  <th className="px-3 py-2 font-medium">Name</th>
                  <th className="px-3 py-2 font-medium">Type</th>
                  <th className="px-3 py-2 font-medium">Required</th>
                  <th className="px-3 py-2 font-medium">Description</th>
                </tr>
              </thead>
              <tbody>
                {cmd.parameters.map((p) => (
                  <tr key={p.name} className="border-t border-white/5">
                    <td className="px-3 py-2 font-mono text-foreground">{p.name}</td>
                    <td className="px-3 py-2 text-muted-foreground">{p.type}</td>
                    <td className="px-3 py-2">{p.required ? <span className="text-emerald-400">Yes</span> : <span className="text-muted-foreground">No</span>}</td>
                    <td className="px-3 py-2 text-muted-foreground">{p.description ?? "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {cmd.example && (
        <div className="mt-4">
          <div className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Example</div>
          <div className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-black/40 p-3">
            <code className="min-w-0 truncate font-mono text-sm text-emerald-300">{cmd.example}</code>
            <CopyButton text={cmd.example} label="Copy" />
          </div>
        </div>
      )}

      {(cmd.notes || cmd.tips || cmd.warning) && (
        <div className="mt-4 space-y-2">
          {cmd.notes && (
            <div className="flex items-start gap-2 rounded-xl border border-white/10 bg-white/5 p-3 text-sm">
              <StickyNote className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              <div><span className="font-semibold">Note:</span> {cmd.notes}</div>
            </div>
          )}
          {cmd.tips && (
            <div className="flex items-start gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/5 p-3 text-sm">
              <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
              <div><span className="font-semibold text-emerald-300">Tip:</span> {cmd.tips}</div>
            </div>
          )}
          {cmd.warning && (
            <div className="flex items-start gap-2 rounded-xl border border-amber-400/20 bg-amber-400/5 p-3 text-sm">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
              <div><span className="font-semibold text-amber-300">Warning:</span> {cmd.warning}</div>
            </div>
          )}
        </div>
      )}
    </motion.article>
  );
}
