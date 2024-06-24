export interface Product {
  name: string;
  price: string;
  description: string;
  image: string;
  category_id: string;
  rank: string;
  detailed_image: string;
  id_product: string;
}

export type ProductRequest = Omit<Product, "id_product">;

export interface CardProduct extends Product {
  quantity: number;
  itemTotal: number;
}

export interface DetailedProduct extends Product {
  quantity: number;
}

export interface Category {
  name: string;
  category_id: string;
}

export type RequestCategory = Omit<Category, "category_id">;

export interface OrderPaymentMethod {
  name: string;
}

export interface Order {
  id: number;
  address: string;
  status: string;
}

export interface OrdersProduct extends Product {
  quantity: number;
}

export interface DetailedOrder extends Order {
  products: OrdersProduct[];
  client: Client;
}

export type RequestOrder = Omit<DetailedOrder, "id">;

export type RequestClient = Omit<Client, "id_client">;

export interface RequestProduct {
  id_product: string;
  quantity: number;
}

export interface Client {
  id_client: number;
  name: string;
  contact: string;
  cpf: string;
  email: string;
}

export interface PaymentMethod {
  id_payment_method: string;
  name: string;
}

export interface DetailedOrder extends Order {
  total: number;
  client: Client;
  payment_method: OrderPaymentMethod;
  products: DetailedProduct[];
}
