import { certificates } from '@/data/portfolio'

export default function Certificates() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Certificados</h2>
      <div className="flex flex-col gap-4">
        {certificates.map((cert) => (
          <div
            key={cert.name}
            className="rounded-xl px-6 py-4 flex justify-between items-center bg-zinc-900 border border-zinc-800"
          >
            <span className="text-white font-medium">{cert.name}</span>
            <span className="text-green-400 text-sm shrink-0 ml-4">{cert.issuer}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
