


import React from 'react';
import {  HashRouter ,Route,Routes} from 'react-router-dom'
import Home from './Component/Home';
import Login from './Component/Login';
import Sinup from './Component/Sinup';
import Logout from './Component/Logout';
import Error from './Component/Error';
import Myorder from './Component/HomeDrower/Myorder';
import  Employee from './Component/HomeDrower/Employee';
import Profile from './Component/HomeDrower/Profile';
import ProductsPage from './Component/HomeDrower/Product';
import Card from './Component/HomeDrower/Card'
import '../src/style/Home.css'
import Cardcontext from './Component/ContextProvider/Cardcontext';


function App() {

  return (
 <>

<Cardcontext >

        <HashRouter>
<Routes>

<Route exact path='/' element={<Home/>}>

<Route exact path='/' element={<Employee/>}></Route>

<Route  path='/myorder' element={<Myorder/>}></Route>

<Route  path='/profile' element={<Profile/>}></Route>
<Route path='/product' element={<ProductsPage/>}></Route>
<Route  path='/card' element={<Card/>}></Route>


</Route>

<Route path='/signup' element={<Sinup/>}></Route>

<Route path='/signin' element={<Login/>}></Route>
<Route path='/logout' element={<Logout/>}></Route>

<Route path='*' element={<Error/>}>


</Route>









</Routes>


        </HashRouter>
        </Cardcontext>
 </>
  );
}
export default App;
