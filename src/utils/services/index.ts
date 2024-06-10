import { HOST, ROUTES_PRODUCT } from "../../constants/services"

const getHeaders = () => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return headers;
}

export const getAllProducts = async () => {
    const response = await fetch(HOST + ROUTES_PRODUCT, { mode: "cors", headers: getHeaders()});
    return response.json();
}