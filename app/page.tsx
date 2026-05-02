import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Certificates from '@/components/Certificates'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certificates />
      <Footer />
    </main>
  )
}
