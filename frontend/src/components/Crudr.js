import '../App.css'; 
import { useState, useEffect} from 'react'; 
import axios from 'axios'; 
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid';
import { Link,Avatar,Button,TextField } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@material-ui/core';



function Crudr() { 
  const [Firstname,setFirstName]= useState(""); 
  const [Lastname,setLastName]= useState(""); 
  const [Username,setUserName]= useState("");
  const [Role,setRole]=useState("Buyers");
  const [Password,setPassword]= useState("");
  const [Reglist,setRegList]= useState([]); 
  
  useEffect(()=>{  
    axios.get("/display").then((response)=>{ 
      setRegList(response.data); 
    })     
  },[]); 
  const addToList=()=>{ 
    axios.post("/newreg",{Firstname:Firstname, Lastname:Lastname,Username:Username,Password:Password,Role:Role}); 
    

    console.log(Firstname,Username); 
    
  } 
  const paperStyle={padding :20,height:'130vh',width:280, margin:"20px auto"}
  return ( 
    <div className="App"> 
    <Paper elevation={10} style={paperStyle} backgroundColor="#00adb5">
    <Grid align='center'>
      <h1>Create an account</h1> 
      <Avatar style={{height:"50px" ,width:"50px"}}/>
      <br/>
      <TextField onChange={(event)=>setFirstName(event.target.value)} label='Firstname' placeholder='Enter Firstname' fullWidth required/><br/>
   <br/>
      <TextField onChange={(event)=>setLastName(event.target.value)} label='Lastname' placeholder='Enter Lastname' fullWidth required/><br/><br/>
      <Typography variant='h6'>Select Role</Typography>
      <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={Role}
          onChange={(event)=>setRole(event.target.value)}
          label="Role"
        >
          <MenuItem value={"Buyers"}>Buyers</MenuItem>
          <MenuItem value={"Sellers"}>Sellers</MenuItem>
      </Select><br/><br/>
<TextField onChange={(event)=>setUserName(event.target.value)} label='Username' placeholder='Enter username' fullWidth required/><br/>
<br/>
<TextField onChange={(event)=>setPassword(event.target.value)} label='Password' placeholder='Enter password' type='password' fullWidth required/><br/>
<br/>
<br/>
<Button href="/log-in" type='submit' color='primary' variant="contained" fullWidth>Sign up</Button>

<br/><br/>
<Typography > Already have an account?
                     <Link href="/log-in" >
                        Log in 
                </Link>
                </Typography>
</Grid>
</Paper>
   {/* <h1>All Credentials</h1> 
   
    {Reglist.map((val,key)=>{ 
  return <div key={key} className="User"> 
    <h1>{val.Firstname}</h1> 
    <h1>{val.Lastname}</h1>
    <h1>{val.Username}</h1>
    <h1>{val.Password}</h1> 
  </div> 
  })}*/}
    </div> 
  ); 
} 
 
export default Crudr;