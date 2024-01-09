export interface Product {
    id: string
    imgSrc: string;
    name: string;
    description: string;
    price: number;
}

export type ProductList = Product[]


export interface SearchProduct {
    data: {
        _productList: ProductList
    }
    message: string,
    error: string
}
