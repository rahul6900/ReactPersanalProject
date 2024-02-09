import React, { useState } from 'react';
import '../style/Singnup.css'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, Grid, Link, Stack, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useForm} from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { useNavigate } from 'react-router-dom';


import validationSchemaLogin from './Loginvalidation';



export default function Login() {

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchemaLogin)
  });


  const  submit = async (data) => {

    console.log(data);
  
  
    const{email,password}=data;
  
  
    const res= await fetch('http://localhost:3001/login',{
  
      method :"post",
    headers:{
      'Content-Type': 'application/json'
    },
    body :JSON.stringify({
      email,password
    
    })
    
    });
  
    const data1=await res.json();
    // console.log(data1);
    // navigate("/signin")

    if(data.status==401){
      console.log("user Not Found Plese Signup!");
    }else if(data1.status==422){
      navigate("/signin")
      console.log("Password are not match");
    }else{
      localStorage.setItem('token',data1.result.token);
      navigate("/")
      console.log(data1);
    }
  

  }

  

  const getusersdata= async()=>{

    let token=localStorage.getItem("token");

if(token){
navigate("/")
}else{
  navigate("/signin")
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

/>
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
<Button sx={{width:"100%",marginTop:"3%"}} onClick={handleSubmit(submit)} variant="contained">Create your free account</Button>
    
    
    </form> 

</Box>

</Grid>

<Grid item xs={7} sx={{background:"#1e293b"}}>
<Box sx={{marginTop:"8%"}}>
<img src="/assts/image/loginbg.svg" style={{marginLeft:"5%",width:"90%"}} className='img-fluid' alt="Signup-image" />

</Box>

</Grid>
   </Grid>
      

     </Box>
      </Container>
     
     
     
      
   
  </>
     
  )
}
  