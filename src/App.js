import './App.css';
import {navbarLinks, heroData} from "./data/data";
import Navbar from './container/Navbar';
import Hero from './container/Hero';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
    </div>
  );
}

export default App;
