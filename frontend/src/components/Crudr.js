import '../App.css'; 
import { useState, useEffect} from 'react'; 
import axios from 'axios'; 
import Paper from '@mui/material/Paper'

function Crudr() { 
  const [Firstname,setFirstName]= useState(""); 
  const [Lastname,setLastName]= useState(""); 
  const [Username,setUserName]= useState("");
  const [Password,setPassword]= useState("");
  const [Reglist,setRegList]= useState([]); 
  useEffect(()=>{  
    axios.get("/display").then((response)=>{ 
      setRegList(response.data); 
    })     
  },[]); 
  const addToList=()=>{ 
    axios.post("/newreg",{Firstname:Firstname, Lastname:Lastname,Username:Username,Password:Password}); 
    console.log(Firstname,Username); 
  } 
  const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
  return ( 
    <div className="App"> 
    <Paper elevation={10} style={paperStyle}>
      <h1>Sign up</h1> 

<label>First Name</label><br/> 
<input type="text" 
onChange={(event)=>setFirstName(event.target.value)}/><br/> 

<label>Last Name </label><br/> 
<input type="text" 
onChange={(event)=>setLastName(event.target.value)}/><br/>

<label>User Name </label><br/> 
<input type="text" 
onChange={(event)=>setUserName(event.target.value)}/><br/>

<label>Password</label><br/> 
<input type="text" 
onChange={(event)=>setPassword(event.target.value)}/><br/>
<br/>
<button onClick={addToList}>Sign up</button> 
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