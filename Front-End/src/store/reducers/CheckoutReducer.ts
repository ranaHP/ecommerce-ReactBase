import { IOrderItem } from "../../Types";
import { CheckoutType } from "../Interfaces/inteface";
import { ADD_ORDER_ITEM, DELETE_ORDER_ITEM } from "../constants/CheckoutConstants";

const initialState: StoreType = {
    checkoutList:[
      
]
}

interface  StoreType {
    checkoutList: IOrderItem []
}

const updateLocalStorage = (checkout_list: IOrderItem[]) => {
    localStorage.setItem('checkout-list', JSON.stringify({checkoutList:checkout_list}));    
}


const getLocalStorage = ():StoreType => {
    const localHostData = localStorage.getItem("checkout-list");
    if(localHostData){
        const data = JSON.parse(localHostData);
        return data;
    }else {
        return initialState
    }

}

export const CheckoutReducer = (state:StoreType = getLocalStorage(), action: CheckoutType) => {
    switch (action.type) {
        case ADD_ORDER_ITEM:{
            const index = state.checkoutList.findIndex((orderItem: IOrderItem) => orderItem.item_no == action.payload.item_no);
            if(index == -1){
                updateLocalStorage([...state.checkoutList, action.payload]);
                return{
                    ...state,
                    checkoutList:[...state.checkoutList, action.payload]
                }
            }else {
                const updated: IOrderItem[] = state.checkoutList.slice();
                updated[index] = action.payload; 
                updateLocalStorage(updated);
                return{
                    ...state,
                    checkoutList:updated
                }   
            }
            
        }
        case DELETE_ORDER_ITEM:{
            const orderList  =  state.checkoutList.filter((orderItem: IOrderItem, index: number) => orderItem.item_no != action.payload);
            updateLocalStorage(orderList);
            
            return{
                ...state,
                checkoutList: orderList
            }
        }
        default:{
            return state;
        }

    }
}