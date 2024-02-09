import {React, useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";


const Logout=()=>{
  


const navigate=useNavigate();

const userlogout= async()=>{

  let token=localStorage.getItem("token");

  const res= await fetch('/logout',{

    method :"GET",
    headers:{
      Accept: 'application/json',
      'Content-Type': 'application/json',
      "Authorization":token
    },
    credentials:"include"
  
  });

  const data= await res.json();
  console.log(data);
  
  if(data.status===200){
    let token = localStorage.removeItem("token");
    navigate('/signin');

  }



}
useEffect(()=>{

    userlogout();
    
})
    return(
        <p>Logout</p>
    )

}

export default Logout;