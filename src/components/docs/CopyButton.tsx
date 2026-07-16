import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

export function CopyButton({ text, label = "Copy" }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={async () => {
        try { await navigator.clipboard.writeText(text); } catch {}
        setCopied(true);
        toast.success("Copied!", { description: text });
        setTimeout(() => setCopied(false), 1600);
      }}
      className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition hover:bg-white/10 hover:text-foreground"
      aria-label={`Copy ${text}`}
    >
      <motion.span key={copied ? "y" : "n"} initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="inline-flex">
        {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
      </motion.span>
      {copied ? "Copied" : label}
    </button>
  );
}
