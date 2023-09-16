import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const registerFarmer = createAsyncThunk("farmer/registerFarmer", async(form)=>{

    axios.post('http://localhost:3500/Farmer/register',form).then(res=>{
        if(res && res.data){
            return res.data
        }   
      // headers:{'Content-Type': 'application/json'};    
    })
} )

export const loginFarmer = createAsyncThunk("farmer/loginFarmer", async(values)=>{

    axios.post('http://localhost:3500/Farmer/login',values).then(res=>{
    localStorage.setItem('farmerloggedinData', JSON.stringify(values));
    localStorage.setItem('token', res.data.token)      
    console.log(values)
      // headers:{'Content-Type': 'application/json'};
    })
} )



export const getFarmerOne = createAsyncThunk('Farmer/getFarme',async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get(`http://localhost:3500/Farmer/getonefarmer/${token}`);
      console.log(res.data.data); ////////
      const data = res.data.data;

      return data;
  } catch (err) {
      console.error(err);
      throw err;
  }
}
);

const FarmerSlice = createSlice({
    name:"farmer",
    initialState:{
        isAuthenticated: false,
        Farmers: {}
    },

    reducers:{

    },
    extraReducers: {
        [registerFarmer.pending]: (state,action)=>{
            // state.products = action.payload
            console.log("pending")
        },
        [registerFarmer.fulfilled]: (state,action)=>{
            state.products = action.payload
            console.log("fulfilled")
        },
        [registerFarmer.rejected]: (state,action)=>{
            // state.products = action.payload
            console.log(state)
            console.log(action)
            console.log(action.payload)
            console.log("rejected")
        },
        [loginFarmer.pending]: (state,action)=>{
            // state.products = action.payload
            console.log("pending")
        },
        [loginFarmer.fulfilled]: (state,action)=>{
            state.products = action.payload
            console.log("fulfilled")
        },
        [loginFarmer.rejected]: (state,action)=>{
            // state.products = action.payload
            console.log(state)
            console.log(action)
            console.log(action.payload)
            console.log("rejected")
        },


        [getFarmerOne.pending]:(state)=>{
            console.log("pending");
        },
        [getFarmerOne.fulfilled]:(state,action)=>{
            state.farmer = action.payload
        },
        [getFarmerOne.rejected]:(state,action)=>{
            console.log("rejected");
        }
    }
})

export default FarmerSlice.reducer