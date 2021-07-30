export interface ICategoryItem {
    name : string
    image: string

}
export interface IProductItem{
    _id: number
    name: string
    image: string
    price: number
    offrePrice: number
    qty: number
}

export interface IProductList {
    Grocery: IProductItem[]
    Pharmacy: IProductItem[]
    Interial: IProductItem[]
    Electronic: IProductItem[]
}

export interface IOrderItem {
    _id: number
    name: string
    qty: number
    unite_price: number
    offer_price: number
    image: string,
    amount: number
}
export interface IFormGroup {
    name: string
    label: string
    type: string
    error: string | null
    value: string
}

export  interface  IOption {
    label: string
    value: string
}

export interface INavItem {
    title : string,
    route : string,
    icon: string,
    subNav: INavItem [] | null
}