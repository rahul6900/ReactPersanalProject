
import * as React from 'react';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import { useNavigate } from 'react-router-dom';
import  Myorder from './HomeDrower/Myorder';
import  Card from './HomeDrower/Card'
import Profile from './HomeDrower/Profile'
import SetingMenu from '../sharedComponet/AccountMenu';
import ProductsPage from './HomeDrower/Product';
import Collapse from '@mui/material/Collapse';
import StarBorder from '@mui/icons-material/StarBorder';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';




const drawerWidth = 240;

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

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {



  const getusersdata= async()=>{

    let token=localStorage.getItem("token")

 
  const res= await fetch('/profile',{
    method :"GET",
    headers:{
      Accept: 'application/json',
      'Content-Type': 'application/json',
      "Authorization":token
  
    },
    credentials:"include"
  
  });

  
  const data=await res.json();
  }


  
  const navigate=useNavigate();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const [open1, setOpen1] = React.useState(false);

  const handleClick = () => {
    setOpen1(!open1);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  React.useEffect(()=>{

    getusersdata();
  
  },[])

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }),color:"black", }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
          
        </Toolbar>
     
      </AppBar>

      <AppBar sx={{width:"50%",boxShadow:"none"}}>
        <Toolbar sx={{justifyContent:"end"}}>
         
            <SetingMenu/>
     
        </Toolbar>
     
      </AppBar>
      
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{background:'#1976d2'}}>
        <Typography variant="h6" noWrap component="div" sx={{color:"white",marginRight:"17%"}}>
            DataBase
          </Typography>

      
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerClose}           
             edge="start"
            sx={{ mr: 2, ...(open && { display: 'block' }),color:"white" }}
          >
            <MenuIcon />
          </IconButton>
     
        </DrawerHeader>
        <Divider />
        <List>
        <ListItem  disablePadding onClick={()=>{navigate('/');setOpen(false)}}>
              <ListItemButton>
                <ListItemIcon>
                <AgricultureIcon></AgricultureIcon>
                </ListItemIcon>
                <ListItemText>Product</ListItemText>
              </ListItemButton> 
            </ListItem>
            <ListItemButton onClick={handleClick}>
        <ListItemIcon>
        <AccountCircleIcon/>
        </ListItemIcon>
        <ListItemText primary="Account Setting" />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open1} timeout="auto" unmountOnExit>
      <ListItem  disablePadding onClick={()=>{navigate('/profile');setOpen(false);setOpen1(false)}}>
              <ListItemButton>
                <ListItemIcon>
                </ListItemIcon>
                <ListItemText>Profile information</ListItemText>
              </ListItemButton> 
            </ListItem>
            <ListItem  disablePadding onClick={()=>{navigate('/');setOpen(false); setOpen1(false)}}>
              <ListItemButton>
                <ListItemIcon>
            </ListItemIcon>
                <ListItemText>Manage Address</ListItemText>
              </ListItemButton> 
            </ListItem>
      </Collapse>


           

         
            
            
            <ListItem  disablePadding onClick={()=>{navigate('/myorder');setOpen(false)}}>
              <ListItemButton>
                <ListItemIcon>
                <InboxIcon></InboxIcon>
                </ListItemIcon>
                <ListItemText>my order</ListItemText>
              </ListItemButton> 
            </ListItem>

         
          
        </List>
        <Divider />
       
      </Drawer>
      <Main open={open}>
     
        <DrawerHeader />
        {/* <Typography paragraph>
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
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography> */}
      </Main>
      
      <Routes>
      {/* priduc route */}
<Route exact path='/' element={<ProductsPage/>} ></Route>

<Route exact path='/myorder' element={<Myorder/>}></Route>

<Route  exact path='/profile' element={<Profile/>}></Route>
<Route  path='/card' element={<Card/>}></Route>



</Routes>
    </Box>
  );
}