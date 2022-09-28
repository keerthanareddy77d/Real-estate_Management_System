import './App.css';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Login from './components/Login';
import { Routes, Route } from "react-router-dom";
import ImageSlider from './components/imagesSlider';
import images from './components/images';
import ho from './components/gallery/ho.png'
import Agencies from './components/Agencies';
import Contact from './components/Contact';
import { Typography,Button } from '@mui/material';
import './index.css'

function App() {
  return (
    <div className="App" style={{
      backgroundImage: 'url('+ho+')',
      backgroundSize:"cover",
      height:"800px"
     }}
      >
     
     <Navbar></Navbar>
     <Typography variant='h1' sx={{ color: '#5f4339' }}>YOUR DREAM IS JUST A CLICK AWAY !</Typography>
<br/><br/>

     <Button  variant="contained" color="error" size="large" href="/Properties">Properties</Button>
     <Routes>
     
     <Route path='Agencies' element={<Agencies/>}/>
     <Route path='CONTACT-US' element={<Contact/>}/>
    <Route path='Properties' element={<ImageSlider images={images}/>}/>  
    <Route path='sign-up' element={<Register/>}/>
    <Route path='log-in' element={<Login/>}/>
  </Routes>
    </div>
  );
}

export default App;
