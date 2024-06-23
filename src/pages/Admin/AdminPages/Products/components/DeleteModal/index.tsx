import React from "react";
import { CustomModal } from "../../../../../../components/CustomModal";
import useService from "../../../../../../hooks/useService";
import { Toaster, toast } from "sonner";

interface DeleteModalProps {
  isOpen: boolean;
  setOpen: (state: boolean) => void;
  id: string;
}

const DeleteModal: React.FC<DeleteModalProps> = (props) => {
  const { isOpen, setOpen, id } = props;

  const { deleteProduct } = useService();

  const handleDeleteProduct = async () => {
    const response = await deleteProduct(id);

    if (response.ok) {
      setOpen(false);
      toast.success("Produto removido. Por favor, recarregue a página.");
    } else {
      toast.error("Não foi possivel remover o produto. Por favor, tente novamente.");
    }
  };

  return (
    <>
      <Toaster richColors={true} />
      <CustomModal open={isOpen} onCloseModal={setOpen}>
        <div className="modal-content-container">
          <h3>Tem certeza que deseja excluir este produto?</h3>
          <div className="delete-modal-container">
            <p className="delete-modal-container__message">
              Esta ação não poderá ser desfeita.
            </p>
            <button
              className="delete-modal-container__button"
              onClick={handleDeleteProduct}
            >
              Excluir permanentemente
            </button>
          </div>
        </div>
      </CustomModal>
    </>
  );
};

export default DeleteModal;
