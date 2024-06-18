import { useCallback, useEffect, useState } from "react";
import "./style.css";
import { ManagementSection } from "../../Components/ManagementSection";
import useService from "../../../../hooks/useService";
import { CreateModal, DeleteModal, EditModal } from "./components";

export function Categories() {
  const { getAllCategories } = useService();
  const [isCreateOpen, setCreateOpen] = useState(false);
  const [isDeleteOpen, setDeleteOpen] = useState(false);
  const [isEditOpen, setEditOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [id, setId] = useState("");
  const [category, setCategory] = useState("");

  const getData = useCallback(async () => {
    const response = await getAllCategories();
    setCategories(response);
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const handleCreateCategory = () => {
    setCreateOpen(true);
  };

  const handleDeleteCategory = (id) => {
    setDeleteOpen(true);
    setId(id);
  };

  const handleEditCategory = (id, category) => {
    setCategory(category);
    setEditOpen(true);
    setId(id);
  };

  return (
    categories.length && (
      <>
        <ManagementSection
          title="Categorias"
          subtitle="Categorias cadastradas"
          filterPlaceholder="Nome da categoria"
          itemList={categories}
          onOpenProductModal={handleCreateCategory}
          onOpenDeleteModal={handleDeleteCategory}
          onOpenChangeProductModal={handleEditCategory}
        />
        <CreateModal isOpen={isCreateOpen} setOpen={setCreateOpen} />
        <DeleteModal isOpen={isDeleteOpen} setOpen={setDeleteOpen} id={id} />
        <EditModal
          isOpen={isEditOpen}
          setOpen={setEditOpen}
          id={id}
          item={category}
        />
      </>
    )
  );
}
