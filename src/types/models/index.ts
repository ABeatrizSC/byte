export interface Product {
  name: string;
  price: string;
  description: string;
  image: string;
  category_id: string;
  rank: string;
}

export interface DetailedProduct extends Product {
  quantity: number;
}

export interface Category {
  name: string;
}

export interface PaymentMethod {
  name: string;
}

export interface Order {
  id: number;
  address: string;
  status: string;
}

export interface Client {
  id_client: number;
  name: string;
  contact: string;
  cpf: string;
  email: string;
}

export interface PaymentMethod {
  id_payment_method: number;
  name: string;
}

export interface DetailedOrder extends Order {
  total: number;
  client: Client;
  payment_method: PaymentMethod;
  products: DetailedProduct[];
}
