import Header from './components/Header';
import About from './components/About';
import Home from './components/Home';
import Skills from './components/skills/Skills';
import Services from './components/Services';
import Qualification from './components/qualification';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Contact />
      </main>
    </>
  );
}

export default App;
