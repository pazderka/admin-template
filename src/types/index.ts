export interface ProductItemInterface {
  id: number;
  title: string;
  category: string;
  brand: string;
  price: number;
  stock: number;
  rating: number;
}

export interface ProductResponseInterface {
  products: ProductItemInterface[];
}
