import React,{createContext,useContext,useReducer,useState,useEffect} from 'react';
import { product } from '../../product11';
import reducer from '../../reducers/addtocardreducer';

export const CarddataContext=createContext();

const getLocalcartdata=()=>{

  let newcartdata = localStorage.getItem("cart");

  if( newcartdata === 'undefined' || newcartdata === null){
    return [];
  }
  else{
return JSON.parse(newcartdata);
  }
  
  
  } 

  const initialState={
cart:getLocalcartdata(),
// cart:[],
totalItem:"",
totalprice:'',
shippingfee:50,



  }

const Cardcontext =({children})=>{

  const [state,dispatch]=useReducer(reducer,initialState);

    const addtocard=(id,data)=>{
      

  
      
        dispatch({type:"add_to_card",payload:{id,data}})
       

          }

          const removetocard=(id)=>{
         
            dispatch({type:"remove_to_card",payload:id})
           
     
              }
              // const pricechanges = (id,e,cart)=>{
              //   var changedprice=e.target.value;
              //     dispatch({type:"addqty_to_card",payload:{id,cart,changedprice}})

              //      }
                  
               
              

              useEffect(()=>{

                dispatch({type:"card_total_price"},);



                localStorage.setItem("cart",JSON.stringify(state.cart))
                
                },[state.cart]);
    
    return(
 <>

<CarddataContext.Provider value={{...state,addtocard,removetocard,dispatch}}>

{children}



</CarddataContext.Provider>

 </>
    )


}


export const useCardcontext=()=>{
  return useContext(CarddataContext)
}

export default Cardcontext;
