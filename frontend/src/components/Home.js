import '../App.css';
import Navbar from './Navbar';
import Login from './Login';
import { Routes, Route } from "react-router-dom";
import ImageSlider from './imagesSlider';
import images from './images';
import ho from './gallery/ho.png'
import Agencies from './Agencies';
import Contact from './Contact';
import Crudr from './Crudr';
import { Typography,Button } from '@mui/material';
import '../index.css'
import Razorpay from './Razorpay';
import GoogleMap from './GoogleMap';
import PropertyDetails from './PropertyDetails'

function Home()
{
    return (
        <div className="App" 
          >
         
         <Navbar></Navbar>
    <br/><br/>
         <Routes>
         
         <Route path='Agencies' element={<Agencies/>}/>
         <Route path='CONTACT-US' element={<Contact/>}/>
         <Route path='Properties' element={<ImageSlider images={images}/>}/>  
         <Route path='sign-up' element={<Crudr/>}/>
         <Route path='log-in' element={<Login/>}/>
         <Route path='Property-details' element={<PropertyDetails/>}/>
         <Route path='Razorpay' element={<Razorpay/>}/>
        <Route path='Maps' element={<GoogleMap/>}/>
      </Routes>
        </div>
      );
}
export default Home;