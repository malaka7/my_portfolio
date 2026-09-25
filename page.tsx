import { StarField } from '@/components/star-field'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { USP } from '@/components/sections/usp'
import { Education } from '@/components/sections/education'
import { Skills } from '@/components/sections/skills'
import { Experience } from '@/components/sections/experience'
import { Projects } from '@/components/sections/projects'
import { Services } from '@/components/sections/services'
import { Certificates } from '@/components/sections/certificates'
import { Testimonials } from '@/components/sections/testimonials'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <StarField />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <USP />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Certificates />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
