// import logo from './logo.svg';
import "./App.css";
import Navbar from "./components/Navbar.js";
import Hero from "./components/HeroSection.js";
import CardsComponent from "./components/CardsComponent.js";
import Sections from "./components/Sections.js"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {/* <CardsComponent/> */}
      <Sections />
    </div>
  );
}

export default App;
