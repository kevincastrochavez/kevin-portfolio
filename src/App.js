import Header from './components/Header';
import About from './components/About';
import Home from './components/Home';
import Skills from './components/skills/Skills';

function App() {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About />
        <Skills />
      </main>
    </>
  );
}

export default App;
