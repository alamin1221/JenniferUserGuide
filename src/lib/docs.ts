import commands from "@/data/commands.json";
import categories from "@/data/categories.json";

export type Cmd = {
  command: string;
  category: string;
  description: string;
  permission?: string;
  syntax?: string;
  example?: string;
  notes?: string;
  tips?: string;
  warning?: string;
  parameters?: { name: string; type: string; required?: boolean; description?: string }[];
};
export type Category = {
  slug: string; name: string; icon: string; description: string; color: string;
};

export const allCommands = commands as Cmd[];
export const allCategories = categories as Category[];

export function commandsFor(slug: string) {
  return allCommands.filter((c) => c.category === slug);
}
export function categoryBySlug(slug: string) {
  return allCategories.find((c) => c.slug === slug);
}
export function commandSlug(cmd: string) {
  return cmd.replace(/^\//, "").replace(/\s+/g, "-").toLowerCase();
}
