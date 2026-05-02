import { Monitor, Server, Database, GitBranch, Brain } from 'lucide-react'
import { skills } from '@/data/portfolio'
import type { LucideIcon } from 'lucide-react'

const categoryIcons: Record<string, LucideIcon> = {
  'Front-end':          Monitor,
  'Back-end':           Server,
  'Banco de Dados':     Database,
  'DevOps & Qualidade': GitBranch,
  'AI & Data':          Brain,
}

export default function Skills() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Habilidades</h2>

      {/* Mobile: sempre visível, empilhado */}
      <div className="flex flex-col gap-3 md:hidden">
        {skills.map((group) => {
          const Icon = categoryIcons[group.category] ?? Monitor
          return (
            <div key={group.category} className="rounded-xl border border-zinc-800 bg-zinc-900 p-4">
              <div className="flex items-center gap-2 mb-3">
                <Icon size={16} className="text-green-400 shrink-0" />
                <span className="text-xs font-bold text-green-400 uppercase tracking-wider">
                  {group.category}
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs text-zinc-300 bg-zinc-800 px-2 py-1 rounded-md"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      {/* Desktop: grid lado a lado com hover reveal */}
      <div className="hidden md:grid md:grid-cols-5 gap-3">
        {skills.map((group) => {
          const Icon = categoryIcons[group.category] ?? Monitor
          return (
            <div
              key={group.category}
              className="group relative rounded-xl border border-zinc-800 bg-zinc-900
                hover:border-green-500/40 hover:shadow-[0_0_20px_rgba(34,197,94,0.06)]
                transition-all duration-300 cursor-default overflow-hidden"
            >
              {/* Padrão: ícone + nome */}
              <div className="flex flex-col items-center justify-center gap-2 px-3 py-6
                transition-all duration-300
                group-hover:opacity-0 group-hover:-translate-y-2">
                <Icon size={24} className="text-green-400" />
                <span className="text-xs font-semibold text-zinc-300 text-center leading-tight">
                  {group.category}
                </span>
              </div>

              {/* Hover: lista de skills */}
              <div className="absolute inset-0 flex flex-col gap-1.5 p-3
                opacity-0 translate-y-2
                group-hover:opacity-100 group-hover:translate-y-0
                transition-all duration-300 ease-out overflow-y-auto">
                <p className="text-[10px] font-bold text-green-400 uppercase tracking-wider mb-1 shrink-0">
                  {group.category}
                </p>
                {group.items.map((item) => (
                  <span key={item} className="text-xs text-zinc-300 leading-snug">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
