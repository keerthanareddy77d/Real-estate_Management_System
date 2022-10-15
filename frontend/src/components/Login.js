import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useState,useEffect } from 'react';
import axios from 'axios';
import two from './gallery/two.jpg'
const Login=()=>{


    /*axios.get(url, changedNote).then(response => {
        setNotes(notes.map(note => note.id !== id ? note : response.data))
      })*/
    
    const [Username,setUserName]= useState("");
    const [Password,setPassword]= useState("");
    const [Reglist,setRegList]= useState([]); 

    const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
   
    const log=()=>
    {
        
        axios.get("/display").then((response)=>{ 
            setRegList(response.data); 
        })
        
    }
    return(
        <Grid>
            <div className="App"
           
            > 
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Login</h2>
                </Grid>
                <TextField onChange={(event)=>setUserName(event.target.value)} label='Username' placeholder='Enter username' fullWidth required/>
                <TextField onChange={(event)=>setPassword(event.target.value)} label='Password' placeholder='Enter password' type='password' fullWidth required/>
                
                <Button href="/home" type='submit' color='secondary' variant="contained" style={btnstyle} fullWidth>Sign in</Button>

                <Typography >
                     <Link href="#" >
                     <br/>
                        Forgot password ?
                </Link>
                
                </Typography>
                <br/>
                <Typography > Do you have an account ?
                     <Link href="/sign-up" >
                        Sign Up 
                </Link>
                </Typography>
                {/*{Reglist.map((val,key)=>{ 
        if(Username===val.Username)
        {
            if(Password===val.Password)
            {
                return(
                    <div><Link href='/Home'>Now you are allowed to go Home page</Link>
                    </div>
                  
    
                )
            }
        }
        }
        )
    }*/}
            </Paper>
            </div>
        </Grid>
    )
}

export default Login