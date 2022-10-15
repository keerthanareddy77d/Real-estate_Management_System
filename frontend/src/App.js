import './App.css';
import Login from './components/Login';
import { Routes, Route } from "react-router-dom";
import ImageSlider from './components/imagesSlider';
import images from './components/images';
import abtbg from './components/gallery/abtbg.jpg'
import Agencies from './components/Agencies';
import Contact from './components/Contact';
import Home from './components/Home';
import Crudr from './components/Crudr';
import './index.css'

function App() {
  return (
    <div className="App" style={{
      backgroundImage: 'url('+abtbg+')',
      backgroundSize:"cover",
      height: "500vh",
     
     }}
      >
      <Home></Home>
    
    </div>
  );
}

export default App;