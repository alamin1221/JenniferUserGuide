import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import navData from "@/data/navigation.json";
import cats from "@/data/categories.json";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = new Set<string>(["/", "/docs", "/docs/commands"]);
        (navData as { items: { to: string }[] }[]).forEach((s) => s.items.forEach((i) => paths.add(i.to)));
        (cats as { slug: string }[]).forEach((c) => paths.add(`/docs/commands/${c.slug}`));
        const guides = ["configuration","permissions","moderation","verification","welcome","tickets","voice","announcements","invites","security","antiraid","antispam","logging","autorole","nickname","automod","keyword","botprofile"];
        guides.forEach((g) => paths.add(`/docs/guides/${g}`));

        const urls = [...paths].map((p) => `  <url><loc>${BASE_URL}${p}</loc><changefreq>weekly</changefreq></url>`).join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});
