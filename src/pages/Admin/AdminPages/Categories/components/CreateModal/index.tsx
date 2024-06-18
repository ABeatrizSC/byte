import React, { useState } from "react";
import { CustomModal } from "../../../../../../components/CustomModal";
import useService from "../../../../../../hooks/useService";

interface CreateModalProps {
  isOpen: boolean;
  setOpen: (active: boolean) => void;
}

const CreateModal: React.FC<CreateModalProps> = (props) => {
  const { createCategory } = useService();
  const { isOpen, setOpen } = props;

  const [name, setName] = useState("");

  const [wrong, setWrong] = useState(false);

  const isEmpty = (str: string) => {
    if (!str) return true;

    return str == "";
  };

  const areFieldsValid = () => {
    return !isEmpty(name);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (areFieldsValid()) {
      const response = await createCategory({ name });

      if (response.ok) {
        setOpen(false);
      } else {
        setWrong(true);
      }
    }
  };

  return (
    <CustomModal open={isOpen} onCloseModal={() => setOpen(false)}>
      <div className="modal-content-container">
        <h3>Criar nova categoria</h3>
        <div className="form-container">
          <form action="" className="form">
            <div className="form__input-container">
              <label htmlFor="new-product-name">Nome da categoria</label>
              <input
                type="text"
                id="new-product-name"
                name="new-product-name"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <button onClick={handleSubmit}>Adicionar</button>
          </form>
        </div>
        {wrong && <p>Houve um problema coma a criação, veifique os campos</p>}
      </div>
    </CustomModal>
  );
};

export default CreateModal;
