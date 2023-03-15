import { useState } from 'react';
import Navbar from './components/Navbar';
import About from './views/About';
import Contact from './views/Contact';
import Hero from './views/Hero';
import Projects from './views/Projects';
import Skills from './views/Skills';

function App() {
  const [selectedPage, setSelectedPage] = useState<string>('home');

  return (
    <div className='App'>
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
