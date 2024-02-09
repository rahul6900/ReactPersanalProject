import React from 'react'
import '../../style/Home.css'
import { styled, useTheme } from '@mui/material/styles';

import MuiAppBar from '@mui/material/AppBar';
import { Box, Typography } from '@mui/material';




 const Myorder = () => {
  
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


  return (

    <>
  
    <Main sx={{marginTop:"5%"}}>
     <Box>
     <Typography variant='h6'> My order</Typography>
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
     </Box>
   
  

   </Main>
    
    </>

  )
}
export default Myorder;




