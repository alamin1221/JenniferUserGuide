import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Bot, Command, LayoutDashboard, MessageCircle, Rocket, Shield, ShieldCheck, Sparkles, Ticket, Volume2, Zap, Github } from "lucide-react";
import { allCategories, allCommands } from "@/lib/docs";
import { Footer } from "@/components/docs/Footer";
import { Icon } from "@/components/docs/Icon";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "Jennifer — The All-in-One Discord Bot" },
      { name: "description", content: "Moderation, verification, tickets, welcome, anti-raid, voice tools and more. Explore the official Jennifer documentation." },
    ],
  }),
});

function Home() {
  const cmdCount = allCommands.length;
  const catCount = allCategories.length;

  return (
    <div className="relative min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-white/5 bg-background/60 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-7xl items-center gap-4 px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-lg gradient-brand glow-purple">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span className="font-bold">Jennifer</span>
            <span className="hidden rounded-full border border-brand/30 bg-brand/10 px-2 py-0.5 text-[10px] font-semibold text-brand sm:inline">BOT</span>
          </Link>
          <nav className="ml-6 hidden items-center gap-5 text-sm text-muted-foreground md:flex">
            <Link to="/docs" className="transition hover:text-foreground">Docs</Link>
            <Link to="/docs/commands" className="transition hover:text-foreground">Commands</Link>
            <Link to="/docs/faq" className="transition hover:text-foreground">FAQ</Link>
            <Link to="/docs/changelog" className="transition hover:text-foreground">Changelog</Link>
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/5 transition hover:bg-white/10"><Github className="h-4 w-4" /></a>
            <Link to="/docs" className="inline-flex items-center gap-1.5 rounded-xl gradient-brand px-3 py-2 text-xs font-semibold text-white glow-purple">
              Get Started <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="grid-bg absolute inset-0" />
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 sm:pt-24">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mx-auto max-w-3xl text-center">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-medium text-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse-glow" /> Version 3.2 · Now live
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
              Everything your <span className="gradient-text">Discord server</span> ever needs.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Jennifer is a premium all-in-one Discord bot — moderation, verification, tickets, welcome, anti-raid, voice tools, invite tracking and much more. Setup in under a minute.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href="#invite" className="inline-flex items-center gap-2 rounded-xl gradient-brand px-5 py-3 text-sm font-semibold text-white glow-purple transition hover:opacity-90">
                <Bot className="h-4 w-4" /> Invite Jennifer
              </a>
              <Link to="/docs" className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition hover:bg-white/10">
                <BookOpen className="h-4 w-4" /> Read the docs
              </Link>
              <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-muted-foreground transition hover:text-foreground">
                <LayoutDashboard className="h-4 w-4" /> Dashboard
              </a>
              <a href="#" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-muted-foreground transition hover:text-foreground">
                <MessageCircle className="h-4 w-4" /> Support server
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { k: cmdCount + "+", v: "Slash commands" },
              { k: catCount + "", v: "Feature categories" },
              { k: "v3.2.0", v: "Latest version" },
              { k: "99.9%", v: "Uptime" },
            ].map((s) => (
              <div key={s.v} className="glass rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold gradient-text">{s.k}</div>
                <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="mb-10 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-brand">Features</div>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Built for serious communities</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Every module is production-grade, battle-tested and configurable in a few clicks.</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {allCategories.slice(0, 9).map((c, i) => (
            <motion.div
              key={c.slug}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.04 }}
              className="glass-strong group relative overflow-hidden rounded-2xl p-6 transition hover:border-white/20"
            >
              <div className={`mb-4 grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br text-white ${c.color}`}>
                <Icon name={c.icon} size={20} />
              </div>
              <h3 className="text-lg font-semibold">{c.name}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{c.description}</p>
              <Link to="/docs/commands/$category" params={{ category: c.slug }} className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand transition hover:gap-2">
                Explore commands <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <div className={`absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${c.color} opacity-0 blur-3xl transition duration-500 group-hover:opacity-20`} />
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/docs/commands" className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:gap-2 transition-all">
            View all {catCount} categories <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* Quick start */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="glass-strong overflow-hidden rounded-3xl">
          <div className="grid gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-brand">Quick Start</div>
              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">From zero to configured in 3 steps</h2>
              <ol className="mt-6 space-y-4">
                {[
                  { icon: Bot, title: "Invite Jennifer", body: "Add the bot with recommended permissions." },
                  { icon: Command, title: "Run /verify setup", body: "Configure verification, welcome, tickets and logs." },
                  { icon: Shield, title: "Enable protection", body: "Turn on Anti-Raid and Anti-Spam with one command." },
                ].map((s, i) => (
                  <li key={s.title} className="flex items-start gap-3">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl gradient-brand text-white text-sm font-semibold">{i + 1}</div>
                    <div>
                      <div className="flex items-center gap-2 font-semibold"><s.icon className="h-4 w-4 text-brand" />{s.title}</div>
                      <p className="text-sm text-muted-foreground">{s.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-6 flex gap-3">
                <Link to="/docs/installation" className="inline-flex items-center gap-1.5 rounded-xl gradient-brand px-4 py-2.5 text-sm font-semibold text-white glow-purple">
                  <Rocket className="h-4 w-4" /> Installation guide
                </Link>
                <Link to="/docs/commands" className="glass inline-flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-semibold">
                  <Command className="h-4 w-4" /> Browse commands
                </Link>
              </div>
            </div>
            <div className="glass rounded-2xl p-4">
              <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="ml-2 font-mono">discord.com/channels/...</span>
              </div>
              <div className="space-y-2 rounded-xl bg-black/40 p-4 font-mono text-sm">
                <div><span className="text-brand">/</span>verify setup</div>
                <div className="text-muted-foreground">✓ Verification panel deployed</div>
                <div><span className="text-brand">/</span>antiraid setup enabled:True action:kick</div>
                <div className="text-muted-foreground">✓ Anti-Raid armed · Server protected</div>
                <div><span className="text-brand">/</span>welcomesystem welcome setup</div>
                <div className="text-muted-foreground">✓ Welcome flow ready</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature strip */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { i: Zap, t: "Instant response", b: "Optimized event loop with sub-100 ms latency." },
            { i: Shield, t: "Enterprise security", b: "Anti-raid, anti-spam, whitelists, blacklists." },
            { i: Volume2, t: "Full voice suite", b: "TTS, temp voice, punishments, moderation." },
            { i: ShieldCheck, t: "Battle-tested", b: "Powering thousands of production servers." },
          ].map((f) => (
            <div key={f.t} className="glass rounded-2xl p-5">
              <f.i className="h-5 w-5 text-brand" />
              <div className="mt-3 font-semibold">{f.t}</div>
              <div className="mt-1 text-sm text-muted-foreground">{f.b}</div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
