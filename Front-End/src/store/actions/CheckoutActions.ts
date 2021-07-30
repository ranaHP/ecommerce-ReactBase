import { IOrderItem } from "../../Types";
import {ADD_ORDER_ITEM, DELETE_ORDER_ITEM} from "../constants/CheckoutConstants";
import { AddOrderItemType, DeleyeOrderItemType  } from "../Interfaces/inteface";

export const addOrderItem = (orderItem: IOrderItem): AddOrderItemType => {
    return {
        type: ADD_ORDER_ITEM,
        payload: orderItem
    }
}

export const deleteOrderItem = (index: number): DeleyeOrderItemType => {
    return {
        type: DELETE_ORDER_ITEM,
        payload: index
    }
}


