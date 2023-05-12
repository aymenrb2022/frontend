import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import contactService from "./contactService";
import { toast } from "react-toastify";

export const createrequets = createAsyncThunk(
  'requet/register-requet',
  async(contactData,thunkAPI)=> {
    try {
      return await contactService.createrequet(contactData);
    } catch(error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
);

const contactState = {
    contacts: "",
    isError: false,
    isLoading: false,
    isSuccess: false,
    message: "",
  };

  export const contactSlice = createSlice ({
    name:'contact',
    initialState:contactState,
    reducers:{},
    extraReducers:(builder) => {
      builder
        .addCase(createrequets.pending, (state) => {
          state.isLoading=true;
        })
        .addCase(createrequets.fulfilled, (state, action) => {
          state.isLoading=false;
          state.isSuccess=true ;
          state.contacts=action.payload;
          if(state.isSuccess === true)
            toast.info("Requete ecrire avec success"); 
        })
        .addCase(createrequets.rejected, (state, action) => {
          state.isLoading=false;
          state.isError=true ;
          state.isSuccess=false;
          state.message=action.error;
          if(state.isError === true)
            toast.info(action.error);
        });
    },
  });
  
  export default contactSlice.reducer;