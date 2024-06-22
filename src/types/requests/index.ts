import { FormatedFormData } from "../../pages/Store/Checkout/utils";
import { Category, Product, RequestCategory, RequestClient } from "../models";

export interface ICreateCategory {
  (category: RequestCategory): Promise<Response>;
}

export interface ICreateUser {
  (category: RequestClient): Promise<Response>;
}

export interface ICreateOrder {
  (category: FormatedFormData): Promise<Response>;
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

export interface IAllPaymentMethods {
  (): Promise<Response>;
}
