import { Coffee, Puzzle, Leaf, Rocket, Database, LucideIcon } from 'lucide-react'

export const ICON_MAP: Record<string, LucideIcon> = {
  Coffee,
  Puzzle,
  Leaf,
  Rocket,
  Database,
}

export function getIcon(name: string): LucideIcon | null {
  return ICON_MAP[name] || null
}
