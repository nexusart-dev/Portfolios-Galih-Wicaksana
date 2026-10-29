import About from './about/About'
import Certificate from './certificate/Certificate'
import Contact from './contacts/Contact'
import Hero from './hero/Hero'
import Projects from './projects/Projects'
import Footer from './section/Footer'
import Header from './section/Header'
import Tools from './tools/Tools'

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Certificate />
                <Projects />
                <Tools />
                <Contact />
            </main>
            <Footer />
        </>
    )
}
