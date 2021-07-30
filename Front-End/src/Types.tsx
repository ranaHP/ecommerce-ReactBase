export interface ICategoryItem {
    name : string
    image: string

}
export interface IProductItem{
    title: string
    image: string
    price: string
    offrePrice: string
}

export interface IProductList {
    Grocery: IProductItem[]
    Pharmacy: IProductItem[]
    Food: IProductItem[]
    Electronic: IProductItem[]
}
export interface ICartItem {
    item_no: number
    item: string
    name: string
    qty: number
    unite_price: number
    amount: number
}