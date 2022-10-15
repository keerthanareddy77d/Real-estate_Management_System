import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PropertyDetails() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <center>
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Welcome to a life of splendour at GUNADALA"
        subheader="October 28, 2022"
      />
      <CardMedia
        component="img"
        height="194"
        image={"/b2.jpg"}
        alt="VILLA"
        
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        BANDI YALAMANCHALI is the prestigious project in Gunadala.
        <br></br>
        62 VILLAS 11 ACRES
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph color={'red'}>DETAILS:</Typography>
          <Typography paragraph color={'darkblue'}>
          BANDI YALAMANCHALI project is currently under-construction and will be ready for possession by June 2024. The construction is in full swing and the foundation work is under process.
          </Typography>
          <Typography paragraph color={'darkblue'}>
            Part payment on initial reservation of Villa.
          </Typography>
          <Typography paragraph color={'darkblue'}>
          A 1BHK (1BHK+1T + Study Room) apartment with total area of 512 sq ft ()is priced Rs 81 lakh.
          </Typography>
          <Typography color={'darkblue'}>
          AMENITIES: -Swimming Pool  -Children’s Play Area  -Banquet Hall  and many more.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    <br/><br/>
<Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Welcome to a life of splendour at TADEPALLI"
        subheader="October 28, 2022"
      />
      <CardMedia
        component="img"
        height="194"
        image={"/b1.jpg"}
        alt="APPARTMENT"
        
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        LOTUS is the prestigious project in Tadepalli.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph color={'red'}>DETAILS:</Typography>
          <Typography paragraph color={'darkblue'}>
          LOTUS project is currently under-construction and will be ready for possession by January 2023. The construction is in full swing and the foundation work is under process.
          </Typography>
          <Typography paragraph color={'darkblue'}>
            Part payment on initial reservation of Flat.
          </Typography>
          <Typography paragraph color={'darkblue'}>
          Built Up area: 1680 sq.ft. (156.08 sq.m.)<br></br>
Carpet area: 1350 sq.ft. (125.42 sq.m.)  
          </Typography>
          <Typography color={'darkblue'}>
          ₹ 79 Lac+ Govt Charges & Tax<br></br>
@ 4,438 per sq.ft. (Negotiable)
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    <br/><br/>
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="SPACIOUS LAND FOR SALE!!"
        subheader="December 28, 2022"
      />
      <CardMedia
        component="img"
        height="194"
        image={"/b3.jpg"}
        alt="LAND"
        
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        LAND for sale at miriyalagudem.
        <br></br>
        8 ACRES
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph color={'red'}>DETAILS:</Typography>
          <Typography paragraph color={'darkblue'}>
          This project is currently vacent and has high high demand. This land could be used for cultivation.
          </Typography>
          <Typography paragraph color={'darkblue'}>
            Part payment on initial reservation of Land.
          </Typography>
          <Typography color={'darkblue'}>
          For further details of land you can contact us!.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    <br/><br/>
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="LIVE A JOYFULL LIFE AT BHAVANIPURAM"
        subheader="October 28, 2022"
      />
      <CardMedia
        component="img"
        height="194"
        image={"/b4.jpg"}
        alt="VILLA"
        
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        KONERU is the prestigious project at bhavanipuram.
        <br></br>
        13 floors appartment
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph color={'red'}>DETAILS:</Typography>
          <Typography paragraph color={'darkblue'}>
          KONERU project is currently under-construction and will be ready for possession by October 2026. The construction is in full swing and the foundation work is under process.
          </Typography>
          <Typography paragraph color={'darkblue'}>
            Part payment on initial reservation of your flat.
          </Typography>
          <Typography paragraph color={'darkblue'}>
          A 1BHK (1BHK+1T + Study Room) apartment with total area of 812 sq ft ()is priced Rs 96 lakh.
          </Typography>
          <Typography color={'darkblue'}>
          AMENITIES: -Swimming Pool  -Children’s Play Area  -Banquet Hall  and many more.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </center>
    </div>
  );
}