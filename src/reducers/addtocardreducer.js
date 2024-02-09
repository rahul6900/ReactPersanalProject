import React, { useEffect } from 'react'


 const addtocardreducer = (state,action) => {
  
  if(action.type === 'add_to_card'){

    
  let {id,data} = action.payload
let existingcart = state.cart.find((curele)=>{
  return curele.id == data.id + data.name
});

if(existingcart){
  let updatedcart =state.cart.map((curele)=>{

    if(curele.id == data.id + data.name){
      
      return {...curele}
    }else{
      return curele
    }
  })
  return({...state,cart:updatedcart})


}
else{
  let cardproduct;
  cardproduct={
    id:data.id + data.name,
    name:data.name,
    price:data.price,
    image:data.image,
    qty:data.qty
  }
  console.log(cardproduct);
  return({...state,cart:[...state.cart,cardproduct]})
  

    
  }
    
 


}


if(action.type === 'remove_to_card'){
let updatedcart = state.cart.filter((item)=> item.id !== action.payload )
  return({...state,cart:updatedcart})

}

if(action.type === 'addqty_to_card'){

let {changedprice,id}=action.payload;
let selectprice = state.cart.find((curele)=>{
  return curele.id == id 

});


if(selectprice){
  let updatedcart =state.cart.map((curele)=>{


    
    if(curele.id == action.payload.id){
      
      let newqty=changedprice;
      
      return {...curele,qty:newqty}
    }else{
      return curele
    }
  })
  return({...state,cart:updatedcart})


}



  // return({...state,qty:[updatetotalitem]});


  
} 


if(action.type === 'card_total_price'){
  
  let updatetotalitem = state.cart.reduce((initialval,curele)=>{

  let {qty,price}=curele;

  if(qty === 250){
    initialval = initialval + price / 4;
    return initialval

  }else if( qty === 500){
    initialval = initialval + price / 2;
    return initialval

  }
  
  else{

initialval = initialval + price * qty;


return initialval
  }
},0);
return({...state,totalprice:updatetotalitem});





}



  return state;
}
export default addtocardreducer;