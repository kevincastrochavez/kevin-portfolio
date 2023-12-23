import Header from './components/header/Header';
import About from './components/about/About';
import Home from './components/home/Home';
import Skills from './components/skills/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </>
  );
}

export default App;
