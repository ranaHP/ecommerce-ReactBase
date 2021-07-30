import { IOrderItem } from "../../Types";
import { deleteOrderItem } from "../actions/CheckoutActions";
import { ADD_ORDER_ITEM, DELETE_ORDER_ITEM, DELETE_USER_LOGIN, SET_USER_LOGIN } from "../constants/CheckoutConstants";

export interface AddOrderItemType {
    type: typeof ADD_ORDER_ITEM
    payload: IOrderItem 
}
export interface DeleyeOrderItemType {
    type: typeof DELETE_ORDER_ITEM
    payload: number 
}
export type CheckoutType = AddOrderItemType | DeleyeOrderItemType;

export interface SetLoginUseType {
    type: typeof SET_USER_LOGIN 
    payload: IloginDetails 
}
export interface RemoveLoginUSerType {
    type: typeof DELETE_USER_LOGIN
    payload: number 
}
export type loginDetailsType = SetLoginUseType | RemoveLoginUSerType;

export interface IloginDetails 
{email: string, password: string, contact: string}