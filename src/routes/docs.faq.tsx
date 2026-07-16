import { createFileRoute } from "@tanstack/react-router";
import { PageHeader, Section, Prose } from "@/components/docs/DocsPrimitives";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import faq from "@/data/faq.json";
import { HelpCircle } from "lucide-react";

export const Route = createFileRoute("/docs/faq")({
  component: Page,
  head: () => ({ meta: [{ title: "FAQ · Jennifer Docs" }, { name: "description", content: "Frequently asked questions about the Jennifer Discord bot." }] }),
});

function Page() {
  return (
    <>
      <PageHeader eyebrow="Reference" title="Frequently Asked Questions" description="Answers to the most common questions about Jennifer." icon={<HelpCircle className="h-8 w-8 text-brand" />} />
      <Section>
        <Accordion type="single" collapsible className="space-y-2">
          {faq.map((f, i) => (
            <AccordionItem key={i} value={`q${i}`} className="glass rounded-2xl border-0 px-4">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">{f.q}</AccordionTrigger>
              <AccordionContent><Prose>{f.a}</Prose></AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>
    </>
  );
}
