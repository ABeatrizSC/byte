import "./style.css";
import { useCart } from "react-use-cart";
import { Toaster, toast } from "sonner";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function AddCartButton({ props, text }) {
  const { addItem } = useCart();

  const product = { ...props, id: props.id_product };

  return (
    <>
      <Toaster richColors={true} />
      <button
        className={["add-cart-button", text ? "details" : ""].join(" ")}
        onClick={() => {
          addItem(product);
          toast.success("Produto adicionado ao carrinho");
        }}
      >
        <FontAwesomeIcon icon={faCartPlus} />
        {text ? "Adicionar ao carrinho" : ""}
      </button>
    </>
  );
}
