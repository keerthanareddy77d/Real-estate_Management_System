import React from 'react'
import { Card,CardContent,Typography } from '@mui/material';
import female from './gallery/female.jpeg'
import male from './gallery/male.png'
import male2 from './gallery/male2.jpg'
import Avatar from '@mui/material/Avatar';
function Agencies() {
  return (
    <div>
    <h1>Agencies</h1>
    <center>
          
      <Card sx={{maxWidth:280}}>
        <Avatar    src={female}
                style={{
                  margin: "20px",
                  width: "200px",
                  height: "200px",
                }} />
        <CardContent>
            <Typography >
                <pre>Name:sahithi
                <br/>
                contact:1234567890
                <br/>
                place:abc
                </pre>
            </Typography>
        </CardContent>

      </Card>
    </center>
    <center>
<Card sx={{maxWidth:280}}>
        <Avatar    src={male}
                style={{
                  margin: "20px",
                  width: "200px",
                  height: "200px",
                }} />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                
            </Typography>
            <Typography >
                <pre>Name:rehana
                <br/>
                contact:0987654321
                <br/>
                place:cba
                </pre>
            </Typography>
        </CardContent>

      </Card>
    </center>
    <center>
<Card sx={{maxWidth:280}}>
        <Avatar    src={male2}
                style={{
                  margin: "20px",
                  width: "200px",
                  height: "200px",
                }} />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                
            </Typography>
            <Typography >
                <pre>Name:keerthana
                <br/>
                contact:5432167890
                <br/>
                place:bac
                </pre>
            </Typography>
        </CardContent>

      </Card>
    </center>
    </div>
  )
}

export default Agencies 