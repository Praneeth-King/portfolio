import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Footer from './components/Footer';

import './App.css'

function App() { 
  return (
    <div style={{ backgroundColor: '#a2e0da' }}>
      <Navbar />
      <Home />
      <About />
      <Skills />
      
      <Contact />
      <Footer/>
    </div>
  );
  }
export default App;