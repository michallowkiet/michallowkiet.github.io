import { useRef, useState } from 'react';
import Navbar from './components/Navbar';
import About from './views/About';
import Contact from './views/Contact';
import Footer from './views/Footer';
import Hero from './views/Hero';
import Projects from './views/Projects';
import Skills from './views/Skills';

function App() {
  const [selectedPage, setSelectedPage] = useState<string>('home');

  return (
    <div className='App'>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Hero setSelectedPage={setSelectedPage} />
      <About setSelectedPage={setSelectedPage} />
      <Skills setSelectedPage={setSelectedPage} />
      <Projects setSelectedPage={setSelectedPage} />
      <Contact setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;
