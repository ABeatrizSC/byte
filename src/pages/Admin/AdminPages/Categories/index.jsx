import { useCallback, useEffect, useState } from "react";
import "./style.css";
import { ManagementSection } from "../../Components/ManagementSection";
import useService from "../../../../hooks/useService";
import { CreateModal, DeleteModal, EditModal } from "./components";
import { useDebounce } from "use-debounce";

export function Categories() {
  const { getAllCategories } = useService();
  const [isCreateOpen, setCreateOpen] = useState(false);
  const [isDeleteOpen, setDeleteOpen] = useState(false);
  const [isEditOpen, setEditOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const [id, setId] = useState("");
  const [category, setCategory] = useState("");
  const [filter, setFilter] = useState("");
  const [debouncedFilter] = useDebounce(filter, 1500);

  const getData = useCallback(async () => {
    const params = new URLSearchParams({ search: debouncedFilter });

    const response = await getAllCategories(params);
    setCategories(response);
  }, [debouncedFilter]);

  useEffect(() => {
    getData();
  }, [debouncedFilter]);

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
    <>
      <ManagementSection
        title="Categorias"
        subtitle="Categorias cadastradas"
        filterPlaceholder="Nome da categoria"
        filter={filter}
        setFilter={setFilter}
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
  );
}
