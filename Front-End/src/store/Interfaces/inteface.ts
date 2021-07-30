import { IOrderItem } from "../../Types";
import { deleteOrderItem } from "../actions/CheckoutActions";
import { ADD_ORDER_ITEM, DELETE_ORDER_ITEM } from "../constants/CheckoutConstants";

export interface AddOrderItemType {
    type: typeof ADD_ORDER_ITEM
    payload: IOrderItem 
}
export interface DeleyeOrderItemType {
    type: typeof DELETE_ORDER_ITEM
    payload: number 
}
export type CheckoutType = AddOrderItemType | DeleyeOrderItemType;