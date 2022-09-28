import React from 'react'
import { Paper } from '@mui/material'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone'

function Contact() {
    const paperStyle={padding: '30px 20px' ,width:190,margin:"20px auto"}
  return (
    <div>
        <h1>CONTACT SERVICES</h1>
        <Paper elevation={20} style={paperStyle}>
        <ContactMailIcon  color="success"
                sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 , height:"50px",width:"50px"}}/>   
        <a href="mailto:sthiraproperties@gmail.com">sthiraproperties@gmail.com</a> <br/>   
        <ContactPhoneIcon color="success"sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 , height:"50px",width:"50px"}}/>
        <a href="callto:7288982069">7288982069</a>
        </Paper>
    </div>
  )
}

export default Contact