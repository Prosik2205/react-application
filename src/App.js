import './App.css';
import Header from './components/header';
import Hero from './components/hero';
import Main from './components/main';
import Why from './components/why';
import Features from './components/features';
import Footer from './components/footer';


function App () {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Main />
      <Why />
      <Features />
      <Footer/>

    </div>
  );
}

export default App;
