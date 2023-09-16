import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getAllroducts = createAsyncThunk(
    "products/allprd",
    async () => {
      try {
        const response = await axios.get("http://10.171.241.48:3500/Product/allprd");
        return response.data.data;
      } catch (error) {
        if (error.response) {
          // Request was made but server responded with status other than 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          // Request was made but no response received
          console.log(error.request);
        } else {
          // Something else happened while making request
          console.log("Error", error.message);
        }
        throw error; // re-throw the error so that it can be caught by the caller
      }
    }
  );


const savecart = async (state) => {
  try {
    await AsyncStorage.setItem(
      'mycart',
      JSON.stringify(state.cart)
    );
  } catch (error) {
    console.log(error);
    // Error saving data
  }
};

const getcart = async (state) => {
  try {
    const value = await AsyncStorage.getItem('mycart');
    if (value !== null) {
      console.log("cartstorag",value);
      mycart=value;
      state.cart = JSON.parse(value);
    }
  } catch (error) {
    // Error retrieving
  }
};
export const addRate= createAsyncThunk("rates/addrate/", async({rates,prodId}) =>{
  console.log(rates);
  // console.log(prodId);

  axios.put('http://10.171.241.48:3500/user/addrate',{rate:rates,prodId}).then(res=>{

  localStorage.setItem('rates', JSON.stringify(rates));


  return res.data.data;
   

  }).catch(err=>{
      console.log(err);
} )
});


const ProductSlice = createSlice({

    name:'products',
    initialState:{
        products:[],
        cart:[],
        Favorite:[]
    },
    reducers:{
        addToCart: (state, action) => {
            console.log("first")
            // state.cart.push(action.payload);
            const product = action.payload;
            const index = state.cart.findIndex((item) => item._id === product._id);
            
            if (index !== -1) {
                state.cart[index].qt += 1;
                state.cart[index].total = state.cart[index].price * state.cart[index].qt;
            } else {
                state.cart.push({
                    ...product,
                    qt: 1,
                    total: product.price
                    
                });
            
            }
            savecart(state);
            getcart(state);
            // localStorage.setItem('cart', JSON.stringify(state.cart));

            //  
        },
        removeCart:(state, action) => {
            state.cart = state.cart.filter((item) => item._id !=   action.payload)
            // saveCart(state.cart); 
        },
        incrementProduct:(state, action) => {
            let index = state.cart.findIndex((item)=> item._id == action.payload)
            state.cart[index].qt = state.cart[index].qt+1;
            state.cart[index].total = state.cart[index].price * state.cart[index].qt;
            // saveCart(state.cart); 
        },
        dicrementProduct:(state, action) => {
            let index = state.cart.findIndex((item)=> item._id == action.payload)
            if(state.cart[index].qt > 0)
            {
            state.cart[index].qt = state.cart[index].qt-1;
            state.cart[index].total = state.cart[index].price * state.cart[index].qt;          
            }
            else if(state.cart[index].qt <= 0){
            state.cart = state.cart.filter((item) => item._id !=   action.payload)
            }
            // saveCart(state.cart); 
        },
        addToFavorite:(state,action)=>{
          const favourite =action.payload
          state.Favorite.push({...favourite});
        },
        removeFavorite:(state,action)=>{
          state.Favorite=state.Favorite.filter((item)=>
            item._id != action.payload);
        }
    },
    extraReducers:{
        [getAllroducts.pending]:(state, action)=>{
            console.log('pending')
        },

        [getAllroducts.fulfilled]:(state, action)=>{
            // console.log(action.payload)
            state.products = action.payload
        },
        [getAllroducts.rejected]:(state, action)=>{
            // console.log(action.payload)
            console.log('rejected')
        },
        [addRate.pending]:(state)=>{
          console.log("pending");
      },
      [addRate.fulfilled]:(state,action)=>{
          console.log("uhuhguhuhu8ijh")
          state.rates=action.payload
      },
      [addRate.rejected]:(state,action)=>{
          console.log("aaaa");
      },
    },
    // extraReducers: (builder) => {
    //   builder.addCase(getAllroducts.fulfilled, (state, action) => {
    //     state.products = action.payload;
    //     loadCart().then((loadedState) => {
    //       Object.assign(state, loadedState);  
    //     });
    //   });
    // },
})


export const { addToCart , removeCart, incrementProduct, dicrementProduct,addToFavorite,removeFavorite } = ProductSlice.actions
export default ProductSlice.reducer;