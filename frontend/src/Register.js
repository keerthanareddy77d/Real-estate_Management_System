import React from 'react'
import {Grid,Paper, TextField} from '@material-ui/core';
import Avatar from '@mui/material/Avatar';
import {Button } from '@material-ui/core';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import PasswordField from 'material-ui-password-field';

function Register() {
    const paperStyle={padding: '30px 20px' ,width:300,margin:"20px auto"}
    const headerStyle={margin:0}
  return (
    <div>
       <Grid>
         <Paper elevation={20} style={paperStyle}>
            <Grid align='center'>
                <Avatar/>
                <h2 style={headerStyle}>Create a new account</h2>
                
            </Grid>
            <form>
                <TextField fullWidth label='First Name' />
                <TextField fullWidth label='Last Name' />
                <TextField fullWidth label='Email'/>
                <TextField fullWidth label='UserName' />
                <br/><br/>
                <FormControl>
                <FormLabel  id="demo-radio-buttons-group-label"  >Gender</FormLabel>
                <br/>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        name="radio-buttons-group"
                        style={{display:'initial'}}
                    >
                       <FormControlLabel value="female" control={<Radio/>} label="Female"/>
                       <FormControlLabel value="male" control={<Radio/>} label="Male"/>
                       <FormControlLabel value="other" control={<Radio/>} label="Other"/>
                    </RadioGroup>
                </FormControl>
                <br/>
                <TextField fullWidth label='Phone Number'/>
                <br/><br/>
                <PasswordField  fullWidth Placeholder='Enter your secret password' floatingLabelText='Password'/>
                <PasswordField fullWidth/>
                <br/><br/><br/>
                <FormGroup>
                     <FormControlLabel control={<Checkbox/>}  label="Accept all terms and condition of this site" />
                </FormGroup>
                <br/>
                <Button style={{backgroundColor: "#ff1744"}} type='Reset' variant='contained' color='secondary' >Reset</Button>
                <Button style={{backgroundColor: "#00e676"}} type='submit' variant='contained' color='primary' >Sign up</Button>
            </form>
         </Paper>
        
       </Grid>
    </div>
  )
}

export default Register
