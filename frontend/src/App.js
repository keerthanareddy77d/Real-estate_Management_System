import './App.css';
import Login from './components/Login';
import { Routes, Route } from "react-router-dom";
import ImageSlider from './components/imagesSlider';
import images from './components/images';
import ho from './components/gallery/ho.png'
import Agencies from './components/Agencies';
import Contact from './components/Contact';
import Home from './components/Home';
import Crudr from './components/Crudr';
import './index.css'

function App() {
  return (
    <div className="App" style={{
      backgroundImage: 'url('+ho+')',
      backgroundSize:"cover",
      height:"800px"
     }}
      >
      <Home></Home>
      <Routes>

  </Routes>
    </div>
  );
}

export default App;