import { DELETE_USER_LOGIN, SET_USER_LOGIN} from "../constants/CheckoutConstants";
import {  IloginDetails, RemoveLoginUSerType, SetLoginUseType  } from "../Interfaces/inteface";

export const setLoginDetails = (loginItem: IloginDetails): SetLoginUseType => {
    return {
        type: SET_USER_LOGIN,
        payload: loginItem
    }
}

export const deleteLoginDetails = (index: number): RemoveLoginUSerType => {
    return {
        type: DELETE_USER_LOGIN,
        payload: index
    }
}


