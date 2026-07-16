import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, Prose } from "@/components/docs/DocsPrimitives";
import { Heart, MessageCircle, Github, Mail } from "lucide-react";

export const Route = createFileRoute("/docs/support")({
  component: Page,
  head: () => ({ meta: [{ title: "Support · Jennifer Docs" }, { name: "description", content: "Get help with Jennifer." }] }),
});

function Page() {
  return (
    <>
      <PageHeader eyebrow="Help" title="Support" description="We're here to help. Pick a channel below." icon={<Heart className="h-8 w-8 text-brand" />} />
      <Section>
        <div className="grid gap-3 sm:grid-cols-2">
          <a href="#" className="glass-strong rounded-2xl p-6 transition hover:border-white/20">
            <MessageCircle className="h-6 w-6 text-brand" />
            <div className="mt-3 font-semibold">Support Server</div>
            <p className="mt-1 text-sm text-muted-foreground">Chat live with our team and other admins.</p>
          </a>
          <a href="https://github.com" className="glass-strong rounded-2xl p-6 transition hover:border-white/20">
            <Github className="h-6 w-6 text-brand" />
            <div className="mt-3 font-semibold">Report a bug</div>
            <p className="mt-1 text-sm text-muted-foreground">Open a GitHub issue with logs and steps.</p>
          </a>
          <a href="#" className="glass-strong rounded-2xl p-6 transition hover:border-white/20">
            <Mail className="h-6 w-6 text-brand" />
            <div className="mt-3 font-semibold">Email us</div>
            <p className="mt-1 text-sm text-muted-foreground">For business or partnership enquiries.</p>
          </a>
          <a href="#" className="glass-strong rounded-2xl p-6 transition hover:border-white/20">
            <Heart className="h-6 w-6 text-brand" />
            <div className="mt-3 font-semibold">Sponsor</div>
            <p className="mt-1 text-sm text-muted-foreground">Support development and keep the bot free.</p>
          </a>
        </div>
      </Section>
      <Prose><p className="text-sm">Response time: usually within 24 hours on weekdays.</p></Prose>
    </>
  );
}
