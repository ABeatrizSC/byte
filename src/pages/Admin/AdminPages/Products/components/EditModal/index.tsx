import React, { useEffect, useState } from "react";
import { CustomModal } from "../../../../../../components/CustomModal";
import useService from "../../../../../../hooks/useService";
import { Product } from "../../../../../../types/models";
import { Toaster, toast } from "sonner";

interface EditModalProps {
  isOpen: boolean;
  setOpen: (state: boolean) => void;
  item: Product;
  id: string;
}

const EditModal: React.FC<EditModalProps> = (props) => {
  const { editProduct } = useService();
  const { isOpen, setOpen, item, id } = props;

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
      !isEmpty(detailed_image) &&
      !isEmpty(rank)
    );
  };

  const loadFields = () => {
    if (!item) return;
    const { name, price, description, image, detailed_image, category_id, rank } = item;

    setName(name);
    setPrice(price);
    setDescription(description);
    setImage(image);
    setDetailedImage(detailed_image);
    setCategory(category_id);
    setRank(rank);
  };

  const handleSubmitProduct = async (e) => {
    e.preventDefault();

    if (areFieldsValid()) {
      const response = await editProduct(id, {
        name,
        price,
        description,
        image,
        detailed_image,
        category_id,
        rank,
      });

      if (response.ok) {
        setOpen(false);
        toast.success('Produto alterado. Por favor, recarregue a página.')
      } else {
        setWrong(true);
        toast.error('Falha ao alterar produto. Tente novamente.')
      }
    }
  };

  useEffect(() => {
    loadFields();
  }, [isOpen]);

  return (
    <>
      <Toaster richColors={true} />
      <CustomModal open={isOpen} onCloseModal={setOpen}>
        <div className="modal-content-container">
          <h3>Alterar produto</h3>
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
              <button>Alterar</button>
            </form>
          </div>
          {wrong && <p>Houve um problema coma a alteração, veifique os campos</p>}
        </div>
      </CustomModal>
    </>
  );
};

export default EditModal;
