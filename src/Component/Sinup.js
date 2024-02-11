import React, { Fragment, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Avatar, Button, Checkbox, FormControl, Grid, Paper, TextField, Typography } from '@mui/material';
import AvatarGroup from '@mui/material/AvatarGroup';
import { useForm, SubmitHandler, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate } from 'react-router-dom';
import validationSchema from './Validation';
import signup from "../image/loginbg.svg"



  

export default function Sinup() {

  const navigate=useNavigate();
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


    
      const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(validationSchema)
      });

    
    
      const  onSubmit = async(data) => {
        console.log(data);
        const{name,email,password}=data

        const res= await fetch('http://localhost:3001/signup',{

      method :"post",
    headers:{
      'Content-Type': 'application/json'
    },
    body :JSON.stringify({
      name,email,password
    
    })
    
    });
 
  

    const data1=await res.json();

    if(data1.status===401){


      console.log(data1);
      let x=document.getElementById("display-error").innerHTML="email is already taken";
      
      console.log(x);


    }else{
      let x=document.getElementById("display-error").innerHTML="";
      
      console.log(x);
      console.log('registerd');
      console.log(data1);
    }
    
        
      }
  
const [check,setcheck]=useState(false);
 
const checkdata=(e)=>{
  const name=e.target.name;
const value=e.target.value;
setcheck(value);
}


 



const getusersdata= async()=>{

  let token=localStorage.getItem("token");

if(token){
navigate("/")
}else{
navigate("/signup")
}
}


React.useEffect(()=>{

  getusersdata();

},[])


  return (
  <>
 

 <Container maxWidth="false" disableGutters>
     <Box>
   <Grid container   >
<Grid item xs={5} sx={{background:"white"}}>

<Box 
sx={{width:"24rem",margin:"20% 0% 0% 20%",}}

>
<Typography variant='h4' sx={{fontWeight:"bold"}}>Sign in</Typography>
<Typography variant='p' sx={{display:"block"}}>Already have an account?Sign in</Typography>
 <form>


 <TextField 
 name='name'

id="outlined-basic"
 label="Name" 
variant="outlined" 
required
fullWidth

sx={{marginTop:"8%"}}


{...register('name')}
  error={errors.name ? true : false}

/> 


<TextField 
id="outlined-basic"
 label="Email" 
variant="outlined" 
name='email'
type='email'


required
fullWidth
sx={{marginTop:"8%"}}
{...register("email")}

error={!!errors?.email}
helperText={errors?.email?.message}

// {errors.message && errors.message.message}
// helperText='hkh'

/>
<Typography id="display-error" sx={{fontSize:"12px",color:"red"}}></Typography>

<TextField 
id="outlined-basic"
 label="Paasword" 
variant="outlined" 
name='password'
required


fullWidth
sx={{marginTop:"8%"}}
{...register("password")}

error={!!errors?.password}
helperText={errors?.password?.message}

/>
<TextField 
id="outlined-basic"
 label="Password(Confirm)" 
variant="outlined" 
name='confirmpass'
required


{...register("confirmpass")}

error={!!errors?.confirmpass}
helperText={errors?.confirmpass?.message}
fullWidth
sx={{marginTop:"8%"}}

/>

<Box>
<Checkbox {...label} 
  sx={{marginTop:"8%"}}
onChange={checkdata}

/>
<Typography variant='p' sx={{fontSize:'20px',fontWeight:"4"}}>I agree to the Terms of Service and <span style={{margin:'0% 0% 0% 13%',position:"relative",bottom:"20px"}}>Privacy Policy</span></Typography>

              
</Box> 
<Button 
sx={{width:"100%", 
marginTop:"3%"
// color:"rgba(0, 0, 0, 0.26)",
//     boxShadow:"none",
//     background:'rgba(0, 0, 0, 0.12)'
    }} 
    onClick={handleSubmit(onSubmit)}
    
  
    variant="contained">Create your free account</Button>
    
    
    </form> 

</Box>

</Grid>

<Grid item xs={7} sx={{background:"#1e293b"}}>
<Box sx={{marginTop:"8%"}}>
<img src={signup} style={{marginLeft:"5%",width:"90%"}} className='img-fluid' alt="Signup-image" />

</Box>

</Grid>
   </Grid>
      

     </Box>
      </Container>
     
     
      
   
  </>
     
  )
}
  

