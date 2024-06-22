import { useCallback, useEffect, useState } from "react";
import "./style.css";
import { TableRow } from "../TableRow";
import useService from "../../../../../../hooks/useService";
import { DetailsModal } from "./components";

export function TableBody({ debouncedFilter, status }) {
  const [openOrderModal, setOpenOrderModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orders, setOrders] = useState(null);

  const { getAllOrders, getOrderById } = useService();

  const getData = useCallback(async () => {
    const formatedStatus = status === "none" ? null : status;
    const statusParam = formatedStatus ? { status: formatedStatus } : {};
    const searchParam = { search: debouncedFilter };
    const params = new URLSearchParams({ ...searchParam, ...statusParam });

    const response = await getAllOrders(params);
    setOrders(response);
  }, [debouncedFilter, status]);

  useEffect(() => {
    getData();
  }, [debouncedFilter, status]);

  const handleSelectOrder = async (id) => {
    const response = await getOrderById(id);

    if (response.ok) {
      const result = await response.json();
      setSelectedOrder(result);
      setOpenOrderModal(true);
    }
  };

  return (
    <tbody>
      {orders?.map((item, index) => (
        <tr key={index}>
          <TableRow
            item={item}
            onOpenOrderModal={() => handleSelectOrder(item.id)}
          />
        </tr>
      ))}
      <DetailsModal
        isOpen={openOrderModal}
        setOpen={setOpenOrderModal}
        order={selectedOrder}
      />
    </tbody>
  );
}
