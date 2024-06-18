import { Category, Product } from "../models";

export interface ICreateCategory {
  (category: Category): Promise<Response>;
}

export interface IEditCategory {
  (id: string, category: Category): Promise<Response>;
}

export interface ICreateProduct {
  (product: Product): Promise<Response>;
}
export interface IEditProduct {
  (id: string, product: Product): Promise<Response>;
}

export interface IAllOrders {
  (): Promise<Response>;
}

export interface IOrderById {
  (id: string): Promise<Response>;
}

export interface IGetProductById {
  (id: string): Promise<Response>;
}
