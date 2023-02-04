import Header from './components/Header';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <>
      <Header />

      <main className='main'>
        <Home />
        <About />
      </main>
    </>
  );
}

export default App;
