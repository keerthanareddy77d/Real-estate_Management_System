import '../App.css'; 
import { useState, useEffect} from 'react'; 
import axios from 'axios'; 
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid';
import { Link,Avatar,Button,TextField } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@material-ui/core';
import VillaIcon from '@mui/icons-material/Villa';



function Show() { 
  const [Pname,setPname]= useState(""); 
  const [Pcity,setPcity]= useState(""); 
  const [Pstate,setPstate]= useState("");
  const [Pnumber,setPnumber]= useState(0);
  const [Reglist,setRegList]= useState([]); 
  
  useEffect(()=>{  
    axios.get("/pic").then((response)=>{ 
      setRegList(response.data); 
    })     
  },[]); 
  const addToList=()=>{ 
    axios.post("/newpic",{Pname:Pname,Pcity:Pcity,Pstate:Pstate,Pnumber:Pnumber}); 
    

    console.log(Pname); 
    
  } 
  const deletePic=(id)=>{
    axios.delete(`/delpic/${id}`);
    
  }
  const paperStyle={padding :50,height:'80vh',width:280, margin:"10px auto"}
  return ( 
    <div className="App"
     > 
    <Paper elevation={10} style={paperStyle} backgroundColor="#00adb5">
    <h1>UPLOAD YOUR PROPERTY</h1>
    <Grid align='center'>
       
      <VillaIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
      <br/>
      <TextField onChange={(event)=>setPname(event.target.value)} label='PROPERTY NAME' placeholder='PROPERTY NAME' fullWidth required/><br/>
   <br/>
      <TextField onChange={(event)=>setPcity(event.target.value)} label='PROPERTY CITY' placeholder='PROPERTY STATE' fullWidth required/><br/><br/>
     
    
<TextField onChange={(event)=>setPstate(event.target.value)} label='PROPERTY STATE' placeholder='PROPERTY STATE' fullWidth required/><br/>
<br/>
<TextField onChange={(event)=>setPnumber(event.target.value)} label='Contact Number' placeholder='Contact number' fullWidth required/><br/>
<br/>
<Button onClick={addToList} type='submit' color='primary' variant="contained" fullWidth>UPLOAD</Button>
<br/>
<br/>

</Grid>
</Paper>
<h1>All Properties that are uploaded by SELLERS</h1> 
   
   {Reglist.map((val,key)=>{ 
 return <div key={key} className="User"> 
   <h1>Property : {val.Pname}</h1> 
   <h1>City : {val.Pcity}</h1>
   <h1>State : {val.Pstate}</h1>
   <h1>Contact me : {val.Pnumber}</h1>
   <Button onClick={()=>deletePic(val._id)}>Delete</Button>
 </div> 
 })}
    </div> 
  ); 
} 
 
export default Show;