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

function Home()
{
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
        <Route path='sign-up' element={<Crudr/>}/>
        <Route path='log-in' element={<Login/>}/>
      </Routes>
        </div>
      );
}
export default Home;