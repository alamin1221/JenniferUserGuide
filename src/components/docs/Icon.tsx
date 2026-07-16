import * as React from "react";
import { icons } from "lucide-react";

export function Icon({ name, className, size }: { name: string; className?: string; size?: number }) {
  const LucideIcon = (icons as any)[name] ?? icons.Circle;
  return <LucideIcon className={className} size={size ?? 18} />;
}
