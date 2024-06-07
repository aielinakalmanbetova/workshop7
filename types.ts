export interface Product {
  id: string;
  title: string;
  price: number;
  icon: string;
}

export interface CartItem {
  id: string;
  qty: number;
}