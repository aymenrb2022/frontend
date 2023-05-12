import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice'
import contactReducer from '../features/contact/contactSlice'
import productReducer from '../features/product/productSlice'

export const store = configureStore({
  reducer: {auth:userReducer,product:productReducer,
  contact:contactReducer},
});
