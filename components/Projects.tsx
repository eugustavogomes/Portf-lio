import { projects } from '@/data/portfolio'

export default function Projects() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Projetos</h2>
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.name}
            className="rounded-xl p-6 flex flex-col gap-3 transition-all duration-200
              bg-zinc-900 border border-zinc-800
              hover:border-green-500/50
              hover:shadow-[0_0_20px_rgba(34,197,94,0.07)]"
          >
            <h3 className="text-lg font-semibold text-white">{project.name}</h3>
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
            <div className="flex gap-3 mt-1">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-500 hover:text-green-400 transition"
                >
                  GitHub →
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-500 hover:text-green-400 transition"
                >
                  Demo →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
