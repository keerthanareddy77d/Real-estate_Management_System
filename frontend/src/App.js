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
      <Login></Login>
      <Routes>
     <Route path='Home' element={<Home/>}/>
     <Route path='Agencies' element={<Agencies/>}/>
     <Route path='CONTACT-US' element={<Contact/>}/>
    <Route path='Properties' element={<ImageSlider images={images}/>}/>  
    <Route path='sign-up' element={<Crudr/>}/>
    <Route path='log-in' element={<Login/>}/>
  </Routes>
    </div>
  );
}

export default App;