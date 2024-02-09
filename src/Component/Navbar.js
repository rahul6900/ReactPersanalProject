import React from 'react'
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar';


 const Navbar = () => {
  return (
   <>
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* <Link className="navbar-brand navimg" to="/"> <img src={logo} alt="err"/> Rahul</Link> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          
          <li className="nav-item" style={{marginRight:"2%"}}>
              {/* <Link className="nav-link active" aria-current="page" to="/">
              {
    logindata ? <Avatar style={{backgroundColor:"salmon",textTransform:"capitalize",fontWeight:"bold"}}>{logindata.name[0].toUpperCase()}</Avatar>:
    
    <Avatar style={{backgroundColor:"salmon",textTransform:"capitalize",fontWeight:"bold"}}></Avatar>
    
              }
              
              </Link> */}
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Sinup</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Signin</Link>
            </li>
         
            <li className="nav-item">
              <Link className="nav-link" to="/logout">Logout</Link>
            </li>
          </ul>
         
        </div>
      </div>
    </nav>
   </>
  )
}

export default Navbar;