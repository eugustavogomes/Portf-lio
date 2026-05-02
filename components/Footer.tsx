import { profile } from '@/data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.07] mt-8 py-10 px-4 text-center">
      <p className="text-zinc-400 text-sm font-medium">
        © {year}{' '}
        <a href={profile.github} className="text-green-400 hover:text-green-300 transition">
          {profile.name}
        </a>
        {' '}— All rights reserved
      </p>
      <p className="text-zinc-600 text-xs mt-2 tracking-wide uppercase">
      </p>
    </footer>
  )
}
