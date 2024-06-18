import { HOST, ROUTES_CATEGORY, ROUTES_LOGIN, ROUTES_PRODUCT, ROUTES_ORDER } from "../../constants/services"

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

export const login = async (props) => {
    const response = await fetch(`${HOST}${ROUTES_LOGIN}`, { mode: "cors", headers: getHeaders(), method: "POST", body: JSON.stringify(props) });
    if (response.ok) {
        const result = await response.json();
        result.ok = true; 
        return result;
    }
    return response;
}