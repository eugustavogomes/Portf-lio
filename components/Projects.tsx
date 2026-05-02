'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { projects } from '@/data/portfolio'

export default function Projects() {
  const [current, setCurrent] = useState(0)
  const [dir, setDir] = useState(1)
  const [animKey, setAnimKey] = useState(0)
  const total = projects.length

  const prev = () => {
    setDir(-1)
    setAnimKey((k) => k + 1)
    setCurrent((i) => (i - 1 + total) % total)
  }

  const next = () => {
    setDir(1)
    setAnimKey((k) => k + 1)
    setCurrent((i) => (i + 1) % total)
  }

  const goTo = (i: number) => {
    setDir(i > current ? 1 : -1)
    setAnimKey((k) => k + 1)
    setCurrent(i)
  }

  const project = projects[current]

  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Projetos</h2>

      {/* Card — full width */}
      <a
        key={animKey}
        href={project.github || undefined}
        target="_blank"
        rel="noopener noreferrer"
        className={`block w-full min-h-[200px] rounded-xl p-6 flex flex-col gap-3 cursor-pointer
          bg-zinc-900 border border-zinc-800
          hover:border-green-500/50 hover:shadow-[0_0_20px_rgba(34,197,94,0.07)]
          ${dir === 1 ? 'card-slide-right' : 'card-slide-left'}`}
      >
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-lg font-semibold text-white">{project.name}</h3>
          <span className="text-xs text-zinc-600 shrink-0 mt-1">{current + 1} / {total}</span>
        </div>

        <p className="text-zinc-400 text-sm flex-1">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-1 rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </a>

      {/* Navigation: arrows + dots in one row */}
      <div className="flex items-center justify-center gap-4 mt-4">
        <button
          onClick={prev}
          aria-label="Projeto anterior"
          className="p-1.5 rounded-lg border border-zinc-700 text-zinc-400
            hover:border-green-500 hover:text-green-400 transition"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="flex gap-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Ir para projeto ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? 'w-6 bg-green-500' : 'w-1.5 bg-zinc-700 hover:bg-zinc-500'
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Próximo projeto"
          className="p-1.5 rounded-lg border border-zinc-700 text-zinc-400
            hover:border-green-500 hover:text-green-400 transition"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </section>
  )
}
