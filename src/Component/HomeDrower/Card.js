import React, { useContext, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import DeleteIcon from '@mui/icons-material/Delete';
import { Badge, Container, Grid, MenuItem, TextField } from '@mui/material';
import { product } from '../../product11';
import Carditem from '../../sharedComponet/Carditem';
// import { CarddataContext } from '../ContextProvider/Cardcontext';
import { useCardcontext } from '../ContextProvider/Cardcontext';


export default function MediaControlCard() {
  const {cart,totalprice,shippingfee}=useCardcontext();
  const theme = useTheme();
  
  

  return (
   
    <Container maxWidth="false" disableGutters>
  <Grid container sx={{marginTop:"7%"}}>



 
 {cart.map(data=>{
     
     
        return <Carditem key={data.id} {...data} />
   
})}
     
     
  

    </Grid>
    
    <Box>

<Typography variant='h5'> product price : {totalprice}</Typography>
<Typography variant='h5'> shippingfee : {shippingfee}</Typography>
<Typography variant='h5'> total-price : {shippingfee + totalprice}</Typography>




    </Box>
    
    </Container>

  
  )
}

