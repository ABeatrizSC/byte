import { HOST, ROUTES_CATEGORY, ROUTES_PRODUCT } from "../../constants/services"

const getHeaders = () => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("ngrok-skip-browser-warning", "skip-browser-warning")
    return headers;
}

export const getAllProducts = async () => {
    const response = await fetch(HOST + ROUTES_PRODUCT, { mode: "cors", headers: getHeaders()});
    return response.json();
}

export const getAllCategories = async () => {
    const response = await fetch(HOST + ROUTES_CATEGORY, { mode: "cors", headers: getHeaders()});
    return response.json();
}

interface ICreateCategory {
    ({name, internal, active}: {name: string, internal?: boolean, active?: boolean}): void;
}
interface IEditCategory {
    (id: string, {name, internal, active}: {name: string, internal?: boolean, active?: boolean}): void;
}

export const createCategory: ICreateCategory = async (props) => {
    const response = await fetch(HOST + ROUTES_CATEGORY, { mode: "cors", headers: getHeaders(), method: "POST", body: JSON.stringify(props)});
    return response;
}

export const editCategory: IEditCategory = async (id, props) => {
    const response = await fetch(`${HOST}${ROUTES_CATEGORY}/${id}`, { mode: "cors", headers: getHeaders(), method: "PUT", body: JSON.stringify(props)});
    return response;
}

export const deleteCategory = async (id: string) => {
    const response = await fetch(`${HOST}${ROUTES_CATEGORY}/${id}`, { mode: "cors", headers: getHeaders(), method: "DELETE" });
    return response;
}