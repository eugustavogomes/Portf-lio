import { education, languages } from '@/data/portfolio'

export default function Education() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8 flex flex-col gap-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Formação</h2>
        <div className="flex flex-col gap-4">
          {education.map((item) => (
            <div
              key={item.course}
              className="rounded-xl p-6 bg-zinc-900 border border-zinc-800"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <p className="text-white font-semibold">{item.course}</p>
                <span className="text-sm text-zinc-500">{item.period}</span>
              </div>
              <p className="text-zinc-400 text-sm">{item.institution}</p>
              <span className="inline-block mt-2 text-xs bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-1 rounded-md">
                {item.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-white mb-6 text-center">Idiomas</h2>
        <div className="flex flex-col gap-4">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className="rounded-xl px-6 py-5 flex justify-between items-center
                bg-zinc-900 border border-zinc-800"
            >
              <span className="text-white font-medium text-lg">{lang.name}</span>
              <span className="text-green-400 text-base">{lang.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
