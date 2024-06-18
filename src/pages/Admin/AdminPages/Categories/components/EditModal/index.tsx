import React, { useEffect, useState } from "react";
import { CustomModal } from "../../../../../../components/CustomModal";
import useService from "../../../../../../hooks/useService";
import { Category } from "../../../../../../types/models";

interface EditModalProps {
  isOpen: boolean;
  setOpen: (state: boolean) => void;
  item: Category;
  id: string;
}

const EditModal: React.FC<EditModalProps> = (props) => {
  const { editCategory } = useService();
  const { isOpen, setOpen, item, id } = props;

  console.log("id:", id);

  const [name, setName] = useState("");

  const [wrong, setWrong] = useState(false);

  const isEmpty = (str: string) => {
    if (!str) return true;

    return str == "";
  };

  const areFieldsValid = () => {
    return !isEmpty(name);
  };

  const loadFields = () => {
    if (!item) return;
    const { name } = item;

    setName(name);
  };

  const handleEdit = async (e) => {
    e.preventDefault();

    if (areFieldsValid()) {
      const response = await editCategory(id, { name });

      if (response.ok) {
        setOpen(false);
      } else {
        setWrong(true);
      }
    }
  };

  useEffect(() => {
    loadFields();
  }, [isOpen]);

  return (
    <CustomModal open={isOpen} onCloseModal={() => setOpen(false)}>
      <div className="modal-content-container">
        <h3>Alterar categoria</h3>
        <div className="form-container">
          <form action="" className="form">
            <div className="form__input-container">
              <label htmlFor="new-category-name">Nome da categoria:</label>
              <input
                type="text"
                id="new-category-name"
                name="new-category-name"
                required
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </div>
            <button onClick={handleEdit}>Alterar</button>
          </form>
        </div>
        {wrong && <p>Houve um problema coma a alteração, veifique os campos</p>}
      </div>
    </CustomModal>
  );
};

export default EditModal;
