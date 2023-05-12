import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "./productService";
import { toast } from "react-toastify";

export const getAllProducts = createAsyncThunk(
  'product/getProducts',
  async (thunkAPI) => {
    try {
      return await productService.getProducts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const Addwishlist = createAsyncThunk(
  'product/addwishlist',
  async(prodId,thunkAPI)=> {
    try {
      return await productService.Addwishlist(prodId);
    } catch(error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
);
const initialState = {
  product: "",
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.product = action.payload;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      })
      .addCase(Addwishlist.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(Addwishlist.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.isSuccess = true;
        state.Addwishlist= action.payload;
        if (state.isSuccess === true) {
          toast.success("Product added to wishlist");
        }
      })
      .addCase(Addwishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload.data;
        if (state.isError === true) {
          toast.error(action.error);
        }
      });
  },
});

export default productSlice.reducer;
