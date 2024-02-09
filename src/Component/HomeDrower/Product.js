
import React, { useContext, useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, Container, Grid } from '@mui/material';
import {product} from "../../product11";
// import { CarddataContext } from '../ContextProvider/Cardcontext';
import { useCardcontext } from '../ContextProvider/Cardcontext';

// // ----------------------------------------------------------------------

export default function ProductsPage() {

let {addtocard}=useCardcontext();

  const drawerWidth = 70;

  const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
      ...(open && {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      }),
    }),
  );

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
  
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  
  return (
    <>

<Container maxWidth="xl" disableGutters>

      <Main sx={{marginTop:"5%" }}>
      <Grid container  >
      {product.map(data=>(
<Grid item xs={4} sx={{marginBottom:"3%"}}>


  <Card sx={{ maxWidth: 345 }}>
    

    
    <CardMedia
      component="img"
      height="194"
      image={data.image}
      alt="Paella dish"
      sx={{width:"100%",height:"250px"}}
    />
    <CardContent>
    <Typography variant='h6' sx={{display:"inline"}}>
      {data.name}
    </Typography>
    <Typography variant='h6' sx={{display:"inline",float:"right",color:"#616161"}}>
      {data.price}
    </Typography>
      <Typography variant="body2"  sx={{width:"90%"}}color="text.secondary">
      {data.title}
      </Typography>
      
      <Button sx={{ width:"100%",marginTop:"5%"}} variant="contained"       onClick={()=>{addtocard(data.id,data)}}
  >Add to Card</Button>
    </CardContent>

  
  </Card>



</Grid>
))}


{/* <Grid item xs={4}>
<Card sx={{ maxWidth: 345 }}>
    

    
    <CardMedia
      component="img"
      height="194"
      image="/assts/image/tamato.webp"
      alt="Paella dish"
      sx={{width:"100%",height:"250px"}}

    />
    <CardContent>
    <Typography variant='h6' sx={{display:"inline"}}>
      Tamato
    </Typography>
    <Typography variant='h6' sx={{display:"inline",float:"right",color:"#616161"}}>
      ₹120 
    </Typography>
      <Typography variant="body2"  sx={{width:"90%"}}color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests.
      </Typography>
      <Button sx={{ width:"100%",marginTop:"5%"}} variant="contained">Add to Card</Button>

    </CardContent>

  
  </Card>

</Grid>
<Grid item xs={4}>
<Card sx={{ maxWidth: 345 }}>
    

    
    <CardMedia
      component="img"
      height="194"
      image="/assts/image/watermallen.webp"
      alt="Paella dish"
      sx={{width:"100%",height:"250px"}}

    />
    <CardContent>
    <Typography variant='h6' sx={{display:"inline"}}>
      watermallen
    </Typography>
    <Typography variant='h6' sx={{display:"inline",float:"right",color:"#616161"}}>
      ₹120 
    </Typography>
      <Typography variant="body2"  sx={{width:"90%"}}color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests.
      </Typography>
      <Button sx={{ width:"100%",marginTop:"5%"}} variant="contained">Add to Card</Button>

    </CardContent>

  
  </Card>

</Grid> */}
    </Grid>

{/*     
    <Grid container >
<Grid item xs={4}>
<Card sx={{ maxWidth: 345 }}>
    

    
    <CardMedia
      component="img"
      height="194"
      image="/assts/image/chilly.webp"
      alt="Paella dish"
      sx={{width:"100%",height:"250px"}}
    />
    <CardContent>
    <Typography variant='h6' sx={{display:"inline"}}>
      Chilly
    </Typography>
    <Typography variant='h6' sx={{display:"inline",float:"right",color:"#616161"}}>
      ₹120 
    </Typography>
      <Typography variant="body2"  sx={{width:"90%"}}color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests.
      </Typography>
      <Button sx={{ width:"100%",marginTop:"5%"}} variant="contained">Add to Card</Button>

    </CardContent>

  
  </Card>

</Grid>

<Grid item xs={4}>
<Card sx={{ maxWidth: 345 }}>
    

    
    <CardMedia
      component="img"
      height="194"
      image="/assts/image/tamato.webp"
      alt="Paella dish"
      sx={{width:"100%",height:"250px"}}

    />
    <CardContent>
    <Typography variant='h6' sx={{display:"inline"}}>
      Tamato
    </Typography>
    <Typography variant='h6' sx={{display:"inline",float:"right",color:"#616161"}}>
      ₹120 
    </Typography>
      <Typography variant="body2"  sx={{width:"90%"}}color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests.
      </Typography>
      <Button sx={{ width:"100%",marginTop:"5%"}} variant="contained">Add to Card</Button>

    </CardContent>

  
  </Card>

</Grid>
<Grid item xs={4}>
<Card sx={{ maxWidth: 345 }}>
    

    
    <CardMedia
      component="img"
      height="194"
      image="/assts/image/watermallen.webp"
      alt="Paella dish"
      sx={{width:"100%",height:"250px"}}

    />
    <CardContent>
    <Typography variant='h6' sx={{display:"inline"}}>
      Watermallen
    </Typography>
    <Typography variant='h6' sx={{display:"inline",float:"right",color:"#616161"}}>
      ₹120 
    </Typography>
      <Typography variant="body2"  sx={{width:"90%"}}color="text.secondary">
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests.
      </Typography>
      <Button sx={{ width:"100%",marginTop:"5%"}} variant="contained">Add to Card</Button>

    </CardContent>

  
  </Card>

</Grid>
    </Grid> */}
     {/* <Box>
     <Typography variant='h6'>products</Typography>
     <Typography variant='p'>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
       tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
       enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
       imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
       Convallis convallis tellus id interdum velit laoreet id donec ultrices.
       Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
       adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
       nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
       leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
       feugiat vivamus at augue. At augue eget arcu dictum varius duis at
       consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
       sapien faucibus et molestie ac.
     </Typography>
     </Box> */}
   
  

   </Main>
</Container>
    </>
  );
}
