import { useContext } from "react";
import {
  HOST,
  ROUTES_CATEGORY,
  ROUTES_LOGIN,
  ROUTES_PRODUCT,
} from "../constants/services";
import TokenContext from "../contexts/TokenContext";
import { getAuthCookie, updateAuthCookie } from "../utils/cookie";

const useService = () => {
  const { setToken, token } = useContext(TokenContext);
  const cookie = getAuthCookie();
  !token && setToken && setToken(cookie);

  const getHeaders = () => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("ngrok-skip-browser-warning", "skip-browser-warning");
    headers.append("Accept", "application/json");
    headers.append("Authorization", `Bearer ${token}`);

    return headers;
  };

  const getAllProducts = async () => {
    const response = await fetch(HOST + ROUTES_PRODUCT, {
      mode: "cors",
      headers: getHeaders(),
    });
    return response.json();
  };

  const getAllCategories = async () => {
    const response = await fetch(HOST + ROUTES_CATEGORY, {
      mode: "cors",
      headers: getHeaders(),
    });
    return response.json();
  };

  interface ICreateCategory {
    ({ name }: { name: string }): void;
  }

  interface ICreateProduct {
    ({
      name,
      category_id,
      price,
      image,
      description,
      rank,
    }: {
      name: string;
      category_id: string;
      price: string;
      image: string;
      description: string;
      rank: string;
    }): Promise<Response>;
  }

  interface IEditCategory {
    (id: string, { name }: { name: string }): void;
  }

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
    createProduct,
    getAllProducts,
    getAllCategories,
    createCategory,
    editCategory,
    deleteCategory,
    login,
  };
};

export default useService;
