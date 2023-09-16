import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useState } from "react";
import axios from "axios";
// const [token,settoken]= useState("hihi");
let token="";



export const registerUser = createAsyncThunk("user/registerUser", async(values,{rejectWithValue})=>{
    try{
        console.log("valuesin regenpoint",values);
let config={
    headers: {
    'Content-Type': 'multipart/form-data',
  }}

    const form = new FormData(); 
      form.append("email", values?.email);
      form.append("password", values?.password);
      form.append("address", values?.address);
      form.append("fname", values?.fname);
      form.append("img",{uri:values?.img,type:"image/png",name:values?.img});
    var data=await axios.post('http://10.171.241.48:3500/user/register',form,config)
    console.log(data);
    }
    catch(err){
        console.log(err);

    }

} );
 


export const loginUser = createAsyncThunk("user/loginUser", async(values)=>{
    console.log('ggjkhgjhgh')
    axios.post('http://10.171.241.48:3500/user/login',values).then(async(res)=>{
        console.log("hihi")
        try {
            await AsyncStorage.setItem('token',res.data.token );
            const value = await AsyncStorage.getItem('token')
            token=value;
            
            console.log("valin useslice",values)
        } catch (error) {
            console.log(error)
        }

      // headers:{'Content-Type': 'application/json'};
    })
} )



 

export const addorder=createAsyncThunk("user/order",async()=>{
    let mycart=await AsyncStorage.getItem("mycart");
    console.log("inendp", mycart)
    console.log("taddorder",token);

    
    try{
       

        let res=await axios.post(`http://10.171.241.48:3500/user/addorder/${token}`,{item:JSON.parse(mycart)})
        console.log(res.data.data);
        return res.data.data;
    }
    catch(err){
        console.log("error me");
    }
})




export const getUserOne = createAsyncThunk('user/getUser',async () => {
    
    try {
        const res = await axios.get(`http://10.171.241.48:3500/user/getoneuser/${token}`);

        console.log("hi memo");
        // console.log(res.data.data); ////////
        const data = res.data.data;
        console.log(data);

        return data;
    } catch (err) {
        console.error(err);
        throw err;
    }
}
);
export const updateUser=createAsyncThunk('user/updateuser',async(values)=>{

    try{
        let config={
            headers: {
            'Content-Type': 'multipart/form-data',
          }}
        
        console.log("inhihihihfihf")

        const form = new FormData(); 
        form.append("email", values?.email);
        form.append("password", values?.password);
        form.append("address", values?.address);
        form.append("lname", values?.lname);
        form.append("fname", values?.fname);
        form.append("phone", values?.phone);
        form.append("img",{uri:values?.img,type:"image/png",name:values?.img});
        const res = await axios.put(`http://10.171.241.48:3500/user/edituser/${token}`,form,config);
        const data=res.data.data;
        console.log(data);
        return data;
    }catch(err){
        console.error(err);
        throw err;
    }



}
);



const UserSlice = createSlice({
    name:"user",
    initialState:{
        isAuthenticated: false,
        Users: {}
    },

    reducers:{
        

    },
    extraReducers: {
        [registerUser.pending]: (state,action)=>{
            // state.products = action.payload
            console.log("pending")
        },
        [registerUser.fulfilled]: (state,action)=>{
            state.products = action.payload
            console.log("fulfilled")
        },
        [registerUser.rejected]: (state,action)=>{
            // state.products = action.payload
            console.log(state)
            console.log(action)
            console.log(action.payload)
            console.log("rejected")
        },
        [loginUser.pending]: (state,action)=>{
            // state.products = action.payload
            console.log("pending")
        },
        [loginUser.fulfilled]: (state,action)=>{
            state.Users = action.payload
            console.log("this",action.payload);
            console.log("fulfilledd")
        },
        [loginUser.rejected]: (state,action)=>{
            // state.products = action.payload
            console.log(state)
            console.log(action)
            console.log(action.payload)
            console.log("rejected")
        },
        

        [getUserOne.pending]:(state)=>{
            console.log("pending");
        },
        [getUserOne.fulfilled]:(state,action)=>{
            console.log("infulf",action.payload);
            state.Users=action.payload;

        },
        [getUserOne.rejected]:(state,action)=>{

            console.log("rejected");
        },
        [addorder.pending]:(state)=>{
            console.log("pending");
        },
        [addorder.fulfilled]:(state,action)=>{
            console.log("inaddorder",action.payload);
          

        },
        [addorder.rejected]:(state,action)=>{

            console.log("rejected");
        },
       
    }
})

export const {} = UserSlice.actions;
export default UserSlice.reducer