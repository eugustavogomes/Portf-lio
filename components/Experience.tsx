import { experience } from '@/data/portfolio'

export default function Experience() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Experiência</h2>
      <div className="flex flex-col gap-6">
        {experience.map((item) => (
          <div key={item.company} className="rounded-xl p-6 bg-zinc-900 border border-zinc-800">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
              <span className="text-lg font-semibold text-white">{item.role}</span>
              <span className="text-sm text-zinc-500">{item.period}</span>
            </div>
            <p className="text-green-400 text-sm mb-4">{item.company}</p>
            <ul className="flex flex-col gap-2 mb-4">
              {item.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-2 text-sm text-zinc-400">
                  <span className="text-green-500 mt-0.5 shrink-0">›</span>
                  {bullet}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {item.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-1 rounded-md"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
