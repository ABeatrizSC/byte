import * as COLORS from "../../../../../../constants/colors";
import "./style.css";

export function TableRow({ item, onOpenOrderModal }) {
  const { id, address, contact, status, paymentMethod, total } = item;

  return (
    <>
      <td>#{id}</td>
      <td className="address">{address}</td>
      <td>
        <button onClick={() => onOpenOrderModal(item)}>Exibir</button>
      </td>
      <td className="status">
        <span style={{ backgroundColor: COLORS.STATUS[status] }}>{status}</span>
      </td>
    </>
  );
}
