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