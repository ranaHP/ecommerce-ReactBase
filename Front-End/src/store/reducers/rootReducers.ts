import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {CheckoutReducer} from "./CheckoutReducer";

const rootReducer = combineReducers( {
    checkoutReducer: CheckoutReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer, composeWithDevTools());