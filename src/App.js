import Header from './components/header/Header';
import About from './components/about/About';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollUp/ScrollUp';
import Portfolio from './components/portfolio/Portfolio';

import { useWindowSize } from './utils';

function App() {
  const { width } = useWindowSize();

  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <Portfolio />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
      {width <= 768 && <ScrollUp />}
    </>
  );
}

export default App;
