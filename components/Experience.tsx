import { Fragment } from 'react'
import { experience } from '@/data/portfolio'

type ExperienceItem = typeof experience[0]

function ExperienceCard({ item }: { item: ExperienceItem }) {
  return (
    <div className="rounded-xl p-6 bg-zinc-900 border border-zinc-800">
      <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
        <span className="text-lg font-semibold text-white">{item.role}</span>
        <span className="text-sm text-zinc-500 shrink-0">{item.period}</span>
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
  )
}

function MobileTransitionDivider() {
  return (
    <div className="flex gap-4 items-center">
      <div className="flex flex-col items-center w-7 gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 block" />
        <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 block" />
        <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 block" />
      </div>
      <span className="text-zinc-500 text-xs italic tracking-wide">Jornada Profissional</span>
    </div>
  )
}

function DesktopTransitionDivider() {
  return (
    <div className="grid grid-cols-[1fr_40px_1fr] items-center -my-2">
      <div className="pr-4 flex justify-end">
        <span className="text-zinc-500 text-xs italic tracking-wide"></span>
      </div>
      <div className="flex flex-col items-center gap-1.5 z-10">
        <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 block" />
        <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 block" />
        <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 block" />
      </div>
      <div />
    </div>
  )
}

export default function Experience() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-white mb-8 text-center">Jornada Profissional</h2>

      {/* Mobile: left-border timeline */}
      <div className="flex flex-col gap-8 md:hidden">
        {experience.map((item) => (
          <Fragment key={item.company}>
            {item.transition && <MobileTransitionDivider />}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-3 h-3 mt-6 rounded-full bg-green-500 ring-[3px] ring-zinc-950 shrink-0" />
                <div className="flex-1 w-px bg-green-500/25 mt-2" />
              </div>
              <div className="flex-1 pb-2">
                <ExperienceCard item={item} />
              </div>
            </div>
          </Fragment>
        ))}
      </div>

      {/* Desktop: alternating center timeline */}
      <div className="hidden md:block relative">
        <div className="absolute left-1/2 top-6 bottom-6 w-px -translate-x-1/2
          bg-gradient-to-b from-green-500/0 via-green-500/35 to-green-500/0" />

        <div className="flex flex-col gap-10">
          {experience.map((item, i) => {
            const isLeft = i % 2 !== 0
            return (
              <Fragment key={item.company}>
                {item.transition && <DesktopTransitionDivider />}
                <div className="grid grid-cols-[1fr_40px_1fr] items-start">
                  <div className="pr-4">
                    {isLeft && <ExperienceCard item={item} />}
                  </div>

                  <div className="flex justify-center pt-6">
                    <div className="w-3.5 h-3.5 rounded-full bg-green-500 ring-[3px] ring-zinc-950 shrink-0 z-10" />
                  </div>

                  <div className="pl-4">
                    {!isLeft && <ExperienceCard item={item} />}
                  </div>
                </div>
              </Fragment>
            )
          })}
        </div>
      </div>
    </section>
  )
}
