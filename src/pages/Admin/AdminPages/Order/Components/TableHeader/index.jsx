import "./style.css";

export function TableHeader() {
  return (
    <thead>
      <tr>
        <th>Id</th>
        <th className="address">Endereço</th>
        <th>Detalhes</th>
        <th>Status</th>
      </tr>
    </thead>
  );
}
