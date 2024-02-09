import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';

import Logout from '@mui/icons-material/Logout';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useCardcontext } from '../Component/ContextProvider/Cardcontext';



export default function AccountMenu() {
  const {state}=useCardcontext();
  const [username,setusername]=React.useState(); 

  const navigate=useNavigate();

const carts=localStorage.getItem("cart");

let cartnumber;
if(carts){
cartnumber = JSON.parse(carts).length;

}

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

if(data.status === 401){
  navigate("/")
}else{
  setusername(data.arr[0].name)
  console.log(data.arr[0].name);
}
}





  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  

  React.useEffect(()=>{

    getusersdata();
  
  },[])
  React.useEffect(()=>{


  },[cartnumber])
  
  return (
    <React.Fragment>

<IconButton
          size="large"
         
          color="inherit"
          sx={{color:"black",borderRadius:"50%"}}
        >
    
          <BookmarkBorderIcon></BookmarkBorderIcon>
          
        </IconButton>

        {/* {cartnumber ? ( */}
          <IconButton
          size="large"
          color="inherit"
          sx={{color:"black",borderRadius:"50%"}}
          onClick={()=>{navigate("/card")}}
        >
        
   
  <Badge badgeContent={cartnumber} color="error">
            <AddShoppingCartIcon/>
          </Badge>

        
          
        </IconButton>
{/*         
      ) : (
        <IconButton
          size="large"
          color="inherit"
          sx={{color:"black",borderRadius:"50%"}}
          onClick={()=>{navigate("/card")}}
        >
        
   
  <Badge badgeContent={"0"} color="error">
            <AddShoppingCartIcon/>
          </Badge>

        
          
        </IconButton>
        
      )} */}
       
   


      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center',  }}>
      
        {/* <Tooltip title="Account settings"> */}
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2,  }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
    {
username ? <Avatar style={{backgroundColor:"#197690",textTransform:"capitalize",fontWeight:"bold"}}>{username[0].toUpperCase()}</Avatar>:

<Avatar style={{backgroundColor:"#197690",textTransform:"capitalize",fontWeight:"bold"}}></Avatar>

          }             </IconButton>
        {/* </Tooltip> */}
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
      <Box onClick={()=>{navigate("/profile")}}>

      <MenuItem onClick={handleClose}>
          <Avatar/>
      Profile
           
        </MenuItem>

      </Box>
      
        <MenuItem onClick={handleClose}>
          <Avatar /> Inbox
        </MenuItem>
        <Divider />
   <Box onClick={()=>{navigate("/logout")}}>
        <MenuItem onClick={handleClose} >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
        </Box>
      
      </Menu>
     
      
    </React.Fragment>
  );
}