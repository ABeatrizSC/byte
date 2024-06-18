import { ManagementSection } from "../../Components/ManagementSection";
import { useCallback, useEffect, useState } from "react";
import useService from "../../../../hooks/useService";
import { CreateModal, DeleteModal, EditModal } from "./components";

export function Products() {
  const { getAllProducts } = useService();
  const [openProductModal, setOpenProductModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openChangeProductModal, setOpenChangeProductModal] = useState(false);
  const [products, setProducts] = useState([]);

  const [productId, setProductId] = useState("");
  const [currentProduct, setCurrentProduct] = useState();

  const onOpenProductModal = () => setOpenProductModal(true);
  const onCloseProductModal = () => setOpenProductModal(false);
  const onCloseDeleteModal = () => setOpenDeleteModal(false);

  const handleEditProduct = (id, product) => {
    setOpenChangeProductModal(true);
    setProductId(id);
    setCurrentProduct(product);
  };

  const handleDeleteProduct = (id) => {
    setOpenDeleteModal(true);
    setProductId(id);
  };

  const getData = useCallback(async () => {
    const response = await getAllProducts();
    setProducts(response);
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    products.length && (
      <>
        <ManagementSection
          title="Produtos"
          subtitle="Produtos cadastrados"
          filterPlaceholder="Nome do produto"
          itemList={products}
          onOpenProductModal={onOpenProductModal}
          onOpenDeleteModal={handleDeleteProduct}
          onOpenChangeProductModal={handleEditProduct}
        />
        <CreateModal
          openProductModal={openProductModal}
          setOpenProductModal={setOpenProductModal}
          onCloseProductModal={onCloseProductModal}
        />
        <DeleteModal
          isOpen={openDeleteModal}
          setOpen={onCloseDeleteModal}
          id={productId}
        />
        <EditModal
          isOpen={openChangeProductModal}
          setOpen={setOpenChangeProductModal}
          item={currentProduct}
          id={productId}
        />
      </>
    )
  );
}
