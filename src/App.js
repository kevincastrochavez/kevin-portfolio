import Header from './components/Header';
import About from './components/About';
import Home from './components/Home';
import Skills from './components/skills/Skills';
import Services from './components/Services';
import Qualification from './components/qualification';

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
      </main>
    </>
  );
}

export default App;
