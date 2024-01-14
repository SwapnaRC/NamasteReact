import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slice/cartSlice";

const appStore = configureStore({
    // this reducer responsible to modify the app store
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
