import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {CheckoutReducer} from "./CheckoutReducer";
import { LoginReducer } from "./LoginReducer";

const rootReducer = combineReducers( {
    checkoutReducer: CheckoutReducer,
    loginReducer: LoginReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, composeWithDevTools());