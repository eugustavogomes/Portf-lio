import { skills } from '@/data/portfolio'

export default function Skills() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Habilidades</h2>
      <div className="flex flex-col gap-5">
        {skills.map((group) => (
          <div key={group.category} className="rounded-xl p-6 bg-zinc-900 border border-zinc-800">
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-3">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="text-sm bg-green-500/10 text-green-300 border border-green-500/20 px-3 py-1 rounded-full"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
