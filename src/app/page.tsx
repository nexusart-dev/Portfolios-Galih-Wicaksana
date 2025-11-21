import About from "./about/About"
import Certificate from "./certificate/Certificate"
import Contact from "./contacts/Contact"
import Footer from "./section/Footer"
import Header from "./section/Header"
import Hero from "./hero/Hero"
import Projects from "./projects/Projects"
import Skills from "./skills/Skills"
import Tools from "./tools/Tools"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors">
      <Header />
      <Hero />
      <About />
      <Certificate />
      <Projects />
      {/* <Skills /> */}
      <Tools />
      <Contact />
      <Footer />
    </main>
  )
}