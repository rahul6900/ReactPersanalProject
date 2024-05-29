

import React, { useContext, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import DeleteIcon from '@mui/icons-material/Delete';
import { Badge, Container, Grid, MenuItem, TextField } from '@mui/material';
import { useCardcontext } from '../Component/ContextProvider/Cardcontext';
import { product } from '../product11';





function Carditem({id,name,price,image,qty}) {
    const {removetocard,dispatch}=useCardcontext();

    // const product = [
  
    
      
    //       {
    //         value: {qty},
    //         label: '250',
    //       },
    //       {
    //         value: {qty},
    //         label: '500',
    //       },
    //       {
    //         value: {qty},
    //         label: '1',
    //       },
    //       {
    //           value: {qty},
    //           label: '2',
    //         },
    //         {
    //           value: {qty},
    //           label: '3',
    //         },
    //         {
    //           value: {qty},
    //           label: '4',
    //         },
    //         {
    //           value: {qty},
    //           label: '5',
    //         },
    //   ];

    
        const pricechanges = (e,id)=>{
 var changedprice=e.target.value;
 dispatch({type:"addqty_to_card",payload:{changedprice,id}});


    }
  

    
  
  return (
 <>
 <Grid item lg={10} md={10}>


<Card sx={{ display: 'flex',marginTop:"2%",marginLeft:"15%",marginBottom:"2%"}}>

<Grid container>

<Grid item lg={3} md={3} sx={{display:'flex',justifyContent:"center",alignItems:"center"}}>

<Box sx={{ display: 'flex',flexDirection: 'column' }}>
<CardContent sx={{ flex: '1 0 auto' }}>
  <Typography component="div" variant="h5">
    {name}
    
  </Typography>
  {/* <Typography variant="subtitle1" color="text.secondary" component="div">
    Mac Miller
  </Typography> */}
</CardContent>

</Box>
</Grid>

<Grid item lg={3} md={3}  sx={{display:'flex',justifyContent:"center",alignItems:"center"}}>
{/* <Typography variant='h6'> Quantity</Typography> */}
<TextField
name='qty'
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue={qty}
          helperText="Please select your currency"
          // onChange={(e,id)=>{pricechanges(id,e,cart)}}
          
          onChange={(e)=>{pricechanges(e,id)}}
        >
          {product.map((option) => (
            <MenuItem key={option.qty} value={option.qty}>
              {option.qty}
            </MenuItem>
          ))}
        </TextField>
        {/* <input type='text' name='qty'  value={qty}/> */}
</Grid>

<Grid item lg={2} md={2} sx={{display:'flex',justifyContent:"center",alignItems:"center"}}>
{
  (() => {
    
  if(qty === 250){
    return <Typography variant='p'>{price / 4} </Typography>
  }else if(qty === 500){
    return <Typography variant='p'>{price / 2} </Typography>

  }else{
    return <Typography variant='p'>{price * qty} </Typography>

  }
  return null;
            })()
}
{/* <Typography variant='p'>

 {price} 
 
 
 </Typography> */}


</Grid>
<Grid item xs={3} >
<CardMedia
component="img"
sx={{ float:"right"}}
image={image}
alt="Live from space album cover"
/>
</Grid>
<Grid item xs={1}  sx={{display:'flex',justifyContent:"center",alignItems:"center"}}>
{/* <Typography variant='h6'> Price</Typography> */}

<DeleteIcon    sx={{color:"#d32f2f"}}  onClick={()=>{removetocard(id)}} >

</DeleteIcon>

</Grid>

</Grid>


</Card>


</Grid>


 </>
  );
}
export default Carditem;
