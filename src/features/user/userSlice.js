import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import userService from "./userService";
import { toast } from "react-toastify";

export const registerusers = createAsyncThunk(
  'user/register-users',
  async(userData,thunkAPI)=> {
    try {
      return await userService.register(userData);
    } catch(error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
);
export const loginuser = createAsyncThunk(
  'user/login',
  async(userData,thunkAPI)=> {
    try {
      return await userService.login(userData);
    } catch(error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
);
export const getuserProductwishlist = createAsyncThunk(
  'user/getwishlist',
  async(thunkAPI)=> {
    try {
      return await userService.getUserWishlist();
    } catch(error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
);
export const getProdTocart = createAsyncThunk(
  'user/addcart',
  async(thunkAPI)=> {
    try {
      return await userService.getcart();
    } catch(error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
);
export const addProdTocart = createAsyncThunk(
  'user/getcart',
  async(cartData,thunkAPI)=> {
    try {
      return await userService.addtocart(cartData);
    } catch(error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
);

const getUserFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;
  
const initialState = {
  user: getUserFromLocalStorage,
  isError: localStorage.getItem('user') ? false : true,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const userSlice = createSlice ({
  name:'auth',
  initialState,
  reducers:{},
  extraReducers:(builder) => {
    builder
      .addCase(registerusers.pending, (state) => {
        state.isLoading=true;
      })
      .addCase(registerusers.fulfilled, (state, action) => {
        state.isLoading=false;
        state.isSuccess=true ;
        state.user=action.payload;
        if(state.isSuccess === true)
        toast.info("User Created Successfully ");
      })
      .addCase(registerusers.rejected, (state, action) => {
        state.isLoading=false;
        state.isError=true ;
        state.isSuccess=false;
        state.message=action.error;
        if(state.isError === true)
        toast.info(action.error);
      })
      .addCase(loginuser.pending, (state) => {
        state.isLoading=true;
      })
      .addCase(loginuser.fulfilled, (state, action) => {
        state.isLoading=false;
        state.isSuccess=true ;
        state.user=action.payload;
        if (state.isSuccess === true)
        localStorage.setItem('token', JSON.stringify(action.payload.token));
        toast.success("User login is Success");
      })
      .addCase(loginuser.rejected, (state, action) => {
        state.isLoading=false;
        state.isError=true ;
        state.isSuccess=false;
        state.message=action.error;
        if(state.isError === true)
        toast.success(action.error);
       })
        .addCase(getuserProductwishlist.pending, (state) => {
          state.isLoading=true;
        })
        .addCase(getuserProductwishlist.fulfilled, (state, action) => {
          state.isLoading=false;
          state.isSuccess=true ;
          state.isError=false ;
          state.wishlist=action.payload;
          if(state.isSuccess === true)
            toast.error("User wishlist fetched successfully");
        })
        .addCase(getuserProductwishlist.rejected, (state, action) => {
          state.isLoading=false;
          state.isError=true ;
          state.isSuccess=false;
          state.message=action.error;
          if(state.isError === true)
            toast.info(action.error);
        }) .addCase(addProdTocart.pending, (state) => {
          state.isLoading=true;
        })
        .addCase(addProdTocart.fulfilled, (state, action) => {
          state.isLoading=false;
          state.isSuccess=true ;
          state.isError=false ;
          state.cartProduct=action.payload;
        })
        .addCase(addProdTocart.rejected, (state, action) => {
          state.isLoading=false;
          state.isError=true ;
          state.isSuccess=false;
          state.message=action.error;
          if(state.isError === true)
            toast.error(action.error);
        }) .addCase(getProdTocart.pending, (state) => {
          state.isLoading=true;
        })
        .addCase(getProdTocart.fulfilled, (state, action) => {
          state.isLoading=false;
          state.isSuccess=true ;
          state.getcart=action.payload;
          if(state.isSuccess === true)
            toast.success("product add to cart successfully");
        })
        .addCase(getProdTocart.rejected, (state, action) => {
          state.isLoading=false;
          state.isError=true ;
          state.isSuccess=false;
          state.message=action.error;
          if(state.isError === true)
            toast.info(action.error);
        });
  },
});

export default userSlice.reducer;
