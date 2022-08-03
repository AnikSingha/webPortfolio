import Header from '../components/Header.js';
import About from '../components/About.js';
import Skills from '../components/Skills.js';
import ContactBtn from '../components/ContactBtn'

export default function Home() {
    return (
        <div>
            <Header/>
            <About/>
            <Skills/>
            <ContactBtn/>
        </div>
    )
}
