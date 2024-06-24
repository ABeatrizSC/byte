import React, { useState } from "react";
import { CustomModal } from "../../../../../../components/CustomModal";
import useService from "../../../../../../hooks/useService";
import { Toaster, toast } from "sonner";

interface CreateModalProps {
  openProductModal: boolean;
  setOpenProductModal: (active: boolean) => void;
  onCloseProductModal: () => void;
}

const CreateModal: React.FC<CreateModalProps> = (props) => {
  const { createProduct } = useService();
  const { openProductModal, onCloseProductModal, setOpenProductModal } = props;

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [detailed_image, setDetailedImage] = useState("");
  const [category_id, setCategory] = useState("");
  const [rank, setRank] = useState("");

  const [wrong, setWrong] = useState(false);

  const isEmpty = (str: string) => {
    if (!str) return true;

    return str == "";
  };

  const areFieldsValid = () => {
    return (
      !isEmpty(price) &&
      !isEmpty(category_id) &&
      !isEmpty(name) &&
      !isEmpty(description) &&
      !isEmpty(image) &&
      !isEmpty(rank)
    );
  };

  const handleSubmitProduct = async (e) => {
    e.preventDefault();

    if (areFieldsValid()) {
      const response = await createProduct({
        name,
        price,
        description,
        image,
        category_id,
        detailed_image,
        rank,
      });

      if (response.ok) {
        setOpenProductModal(false);
        toast.success("Produto adicionado. Por favor, recarregue a página.");
      } else {
        setWrong(true);
        toast.error(
          "Não foi possível adicionar o produto. Por favor, tente novamente."
        );
      }
    }
  };

  return (
    <>
      <Toaster richColors={true} />
      <CustomModal open={openProductModal} onCloseModal={onCloseProductModal}>
        <div className="modal-content-container">
          <h3>Criar novo produto</h3>
          <div className="form-container">
            <form action="" className="form" onSubmit={handleSubmitProduct}>
              <div className="form__input-container">
                <label htmlFor="new-product-name">Nome do produto:</label>
                <input
                  type="text"
                  id="new-product-name"
                  name="new-product-name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form__input-container">
                <label htmlFor="new-product-category">Categoria:</label>
                <input
                  type="text"
                  id="new-product-category"
                  name="new-product-category"
                  required
                  value={category_id}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </div>
              <div className="form__input-container">
                <label htmlFor="new-product-price">Preço:</label>
                <input
                  type="number"
                  id="new-product-price"
                  name="new-product-price"
                  required
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="form__input-container">
                <label htmlFor="new-product-image">URL da imagem:</label>
                <input
                  type="text"
                  id="new-product-image"
                  name="new-product-image"
                  required
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
              <div className="form__input-container">
                <label htmlFor="new-product-image">
                  URL da imagem na tela de detalhes:
                </label>
                <input
                  type="text"
                  id="new-detailed-product-image"
                  name="new-detailed-product-image"
                  required
                  value={detailed_image}
                  onChange={(e) => setDetailedImage(e.target.value)}
                />
              </div>
              <div className="form__input-container">
                <label htmlFor="new-product-description">Descrição:</label>
                <input
                  type="text"
                  id="new-product-description"
                  name="new-product-description"
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="form__input-container">
                <label htmlFor="new-product-rank">Rank:</label>
                <input
                  type="number"
                  id="new-product-rank"
                  name="new-product-rank"
                  required
                  value={rank}
                  onChange={(e) => setRank(e.target.value)}
                />
              </div>
              <button>Adicionar</button>
            </form>
            {wrong && (
              <p>Houve um problema coma a criação, veifique os campos</p>
            )}
          </div>
        </div>
      </CustomModal>
    </>
  );
};

export default CreateModal;
