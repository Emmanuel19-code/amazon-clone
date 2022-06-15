import { createSlice } from "@reduxjs/toolkit";


export const basketSlice=createSlice({
    name:'basket',
    initialState:{
        value:[],
        quantity:0,
        totalquanity:0
    },
    reducers:{
           addtobasket:(state,action)=>{
               const newItem=action.payload
              
                   state.value.push({
                      id:newItem.id,
                      title:newItem.title,
                      price:newItem.price,
                      image:newItem.image,
                      rating:newItem.rating
                   })
               
                state.totalquanity+=1;
           },
           removefrombasket:(state,action)=>{
                      const index=state.value.findIndex((valueItem)=>valueItem.id==action.id);
                      console.log(index)
                      let newvalue=[...state.value];
                      if(index>=0){
                           newvalue.splice(index,1);
                           
                           return {...state,
                            value:newvalue,
                            totalquanity:newvalue.length
                        }
                         
                      }else{
                          console.warn(`can't remove prooduct because not found`)
                      }
           }
    },
    emptybasket:(state)=>{
                state.value=[]
    }
})







export const {addtobasket,removefrombasket,emptybasket}=basketSlice.actions;
export const selectvalue=(state)=>state.basket.value;
export const selectnewvalue=(state)=>state.basket.newvalue
export const selecttotalQuantity=(state)=>state.basket.totalquanity;
export default basketSlice.reducer;