import { ManagementSection } from "../../Components/ManagementSection";
import { useCallback, useEffect, useState } from "react";
import useService from "../../../../hooks/useService";
import { CreateModal, DeleteModal, EditModal } from "./components";
import { useDebounce } from "use-debounce";

export function Products() {
  const { getAllProducts } = useService();
  const [openProductModal, setOpenProductModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openChangeProductModal, setOpenChangeProductModal] = useState(false);
  const [products, setProducts] = useState([]);

  const [productId, setProductId] = useState("");
  const [currentProduct, setCurrentProduct] = useState();

  const [filter, setFilter] = useState("");
  const [debouncedFilter] = useDebounce(filter, 1500);

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
    const params = new URLSearchParams({ search: debouncedFilter });

    const response = await getAllProducts(params);
    setProducts(response);
  }, [debouncedFilter]);

  useEffect(() => {
    getData();
  }, [debouncedFilter]);

  return (
    <>
      <ManagementSection
        title="Produtos"
        subtitle="Produtos cadastrados"
        filterPlaceholder="Nome do produto"
        filter={filter}
        setFilter={setFilter}
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
  );
}
