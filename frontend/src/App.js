import './App.css';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import { Routes, Route } from "react-router-dom";
import ImageSlider from './components/imagesSlider';
import images from './components/images';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <ImageSlider images={images}></ImageSlider>
     <Routes>
    <Route path='sign-up' element={<Register/>}/>
    <Route path='log-in' element={<Login/>}/>
  </Routes>
    </div>
  );
}

export default App;
