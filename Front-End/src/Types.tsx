export interface ICategoryItem {
    name : string
    image: string

}
export interface IProductItem{
    name: string
    image: string
    price: number
    offrePrice: number
    item_no: number
    qty: number
}

export interface IProductList {
    Grocery: IProductItem[]
    Pharmacy: IProductItem[]
    Food: IProductItem[]
    Electronic: IProductItem[]
}

export interface IOrderItem {
    item_no: number
    name: string
    qty: number
    unite_price: number
    offer_price: number
    image: string,
    amount: number
}