import { configureStore} from "@reduxjs/toolkit";
import productReducer from "../reducer/productReducer";
import cartReducer from "../reducer/cartReducer";



const store = configureStore({
    reducer: {
        product: productReducer,
        cart: cartReducer,
    },
})

export default store;