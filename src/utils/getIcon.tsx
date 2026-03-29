import { Coffee, Puzzle, Leaf, Rocket, Database, Layout, ShieldCheck, LucideIcon } from 'lucide-react'

export const ICON_MAP: Record<string, LucideIcon> = {
  Coffee,
  Puzzle,
  Leaf,
  Rocket,
  Database,
  Layout,
  ShieldCheck,
}

export function getIcon(name: string): LucideIcon | null {
  return ICON_MAP[name] || null
}
