import {
  CardProduct,
  RequestClient,
  RequestProduct,
} from "../../../../types/models";

interface FormData {
  name: string;
  tel: string;
  cpf: string;
  email: string;
  paymentMethod: string;
  street: string;
  neighborhood: string;
  houseNumber: string;
  cep: string;
  complemento: string;
  items: CardProduct[];
}

export interface FormatedFormData {
  address: string;
  client: RequestClient;
  id_payment_method: string;
  status: string;
  products: RequestProduct[];
}

const normalizeClient = (props: FormData): RequestClient => {
  const { name, tel, cpf, email } = props;

  return {
    name,
    contact: tel,
    cpf,
    email,
  };
};

const normalizeProduct = (props: CardProduct[]): RequestProduct[] =>
  props.map(({ id_product, quantity }) => ({
    id_product,
    quantity,
  }));

const buildAdress = (props: FormData): string => {
  const { street, neighborhood, houseNumber, complemento, cep } = props;

  return `${street}, ${neighborhood}, ${houseNumber}, ${complemento}. CEP: ${cep}`;
};

export const formatFormData = (props: FormData): FormatedFormData => {
  const { paymentMethod, items } = props;

  return {
    address: buildAdress(props),
    client: normalizeClient(props),
    id_payment_method: paymentMethod,
    status: "Em preparação",
    products: normalizeProduct(items),
  };
};
