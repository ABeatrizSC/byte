import { useContext } from "react";
import {
  HOST,
  ROUTES_CATEGORY,
  ROUTES_CLIENT,
  ROUTES_GRAPH,
  ROUTES_LOGIN,
  ROUTES_ORDER,
  ROUTES_PAYMENT_METHOD,
  ROUTES_PRODUCT,
  ROUTES_TOP_SELLING,
} from "../constants/services";
import TokenContext from "../contexts/TokenContext";
import { getAuthCookie, updateAuthCookie } from "../utils/cookie";
import {
  IAllOrders,
  IAllPaymentMethods,
  ICreateCategory,
  ICreateOrder,
  ICreateProduct,
  ICreateUser,
  IEditCategory,
  IEditProduct,
  IGetProductById,
  IOrderById,
} from "../types/requests";
import { Client } from "../types/models";

const useService = () => {
  const { setToken, token } = useContext(TokenContext);
  const cookie = getAuthCookie();
  !token && setToken && setToken(cookie);

  const getHeaders = () => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("ngrok-skip-browser-warning", "true");
    headers.append("Accept", "application/json");
    headers.append("Authorization", `Bearer ${token}`);

    return headers;
  };

  const checkUnathorized = (response) => {};

  const getAllProducts = async (params?: URLSearchParams) => {
    const url = HOST + ROUTES_PRODUCT;
    const urlParams = params?.toString() ?? "";

    const response = await fetch(`${url}?${urlParams}`, {
      mode: "cors",
      headers: getHeaders(),
    });
    return response.json();
  };

  const getProductById: IGetProductById = async (id) => {
    const response = await fetch(`${HOST}${ROUTES_PRODUCT}/${id}`, {
      mode: "cors",
      headers: getHeaders(),
    });
    return response.json();
  };

  const getAllCategories = async (params?: URLSearchParams) => {
    const url = HOST + ROUTES_CATEGORY;
    const urlParams = params?.toString() ?? "";

    const response = await fetch(`${url}?${urlParams}`, {
      mode: "cors",
      headers: getHeaders(),
    });
    return response.json();
  };

  const createCategory: ICreateCategory = async (props) => {
    const response = await fetch(HOST + ROUTES_CATEGORY, {
      mode: "cors",
      headers: getHeaders(),
      method: "POST",
      body: JSON.stringify(props),
    });
    return response;
  };

  const editCategory: IEditCategory = async (id, props) => {
    const response = await fetch(`${HOST}${ROUTES_CATEGORY}/${id}`, {
      mode: "cors",
      headers: getHeaders(),
      method: "PUT",
      body: JSON.stringify(props),
    });
    return response;
  };

  const deleteCategory = async (id: string) => {
    const response = await fetch(`${HOST}${ROUTES_CATEGORY}/${id}`, {
      mode: "cors",
      headers: getHeaders(),
      method: "DELETE",
    });
    return response;
  };

  const createProduct: ICreateProduct = async (props) => {
    const response = await fetch(HOST + ROUTES_PRODUCT, {
      mode: "cors",
      headers: getHeaders(),
      method: "POST",
      body: JSON.stringify(props),
    });
    return response;
  };

  const editProduct: IEditProduct = async (id, props) => {
    const response = await fetch(`${HOST}${ROUTES_PRODUCT}/${id}`, {
      mode: "cors",
      headers: getHeaders(),
      method: "PUT",
      body: JSON.stringify(props),
    });
    return response;
  };

  const deleteProduct = async (id: string) => {
    const response = await fetch(`${HOST}${ROUTES_PRODUCT}/${id}`, {
      mode: "cors",
      headers: getHeaders(),
      method: "DELETE",
    });
    return response;
  };

  const getAllOrders: IAllOrders = async (params?: URLSearchParams) => {
    const url = HOST + ROUTES_ORDER;
    const urlParams = params?.toString() ?? "";

    const response = await fetch(`${url}?${urlParams}`, {
      mode: "cors",
      headers: getHeaders(),
    });
    return response.json();
  };

  const getOrderById: IOrderById = async (id) => {
    const response = await fetch(`${HOST}${ROUTES_ORDER}/${id}`, {
      mode: "cors",
      headers: getHeaders(),
    });
    return response;
  };

  const createUser = async (props): Promise<Client> => {
    const response = await fetch(HOST + ROUTES_CLIENT, {
      mode: "cors",
      headers: getHeaders(),
      method: "POST",
      body: JSON.stringify(props),
    });
    return response.json();
  };

  const createOrder: ICreateOrder = async (props) => {
    const clientResponse = createUser(props.client);
    const { id_client } = await clientResponse;

    const body = {
      ...props,
      id_client,
    };

    //console.log("createOrder body: ", body);

    const response = await fetch(HOST + ROUTES_ORDER, {
      mode: "cors",
      headers: getHeaders(),
      method: "POST",
      body: JSON.stringify(body),
    });
    return response;
  };

  const getAllPaymentMethods: IAllPaymentMethods = async () => {
    const response = await fetch(HOST + ROUTES_PAYMENT_METHOD, {
      mode: "cors",
      headers: getHeaders(),
    });
    return response.json();
  };

  const getGraphTopSellingProducts = async () => {
    const response = await fetch(
      `${HOST}${ROUTES_GRAPH}${ROUTES_TOP_SELLING}${ROUTES_PRODUCT}`,
      {
        mode: "cors",
        headers: getHeaders(),
      }
    );
    return response;
  };

  const getGraphTopSellingPaymentMethods = async () => {
    const response = await fetch(
      `${HOST}${ROUTES_GRAPH}${ROUTES_TOP_SELLING}${ROUTES_PAYMENT_METHOD}`,
      {
        mode: "cors",
        headers: getHeaders(),
      }
    );
    return response;
  };

  const login = async (props) => {
    const response = await fetch(`${HOST}${ROUTES_LOGIN}`, {
      mode: "cors",
      headers: getHeaders(),
      method: "POST",
      body: JSON.stringify(props),
    });
    if (response.ok) {
      const result = await response.json();
      setToken && setToken(result.token);
      updateAuthCookie(result.token);
    }
    return response;
  };

  return {
    getAllProducts,
    getAllCategories,
    createCategory,
    editCategory,
    deleteCategory,
    createProduct,
    editProduct,
    deleteProduct,
    getAllOrders,
    getOrderById,
    getProductById,
    getAllPaymentMethods,
    createUser,
    createOrder,
    getGraphTopSellingProducts,
    getGraphTopSellingPaymentMethods,
    login,
  };
};

export default useService;
