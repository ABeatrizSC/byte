import "./style.css";
import { TableHeader } from "./Components/TableHeader";
import { TableBody } from "./Components/TableBody";
import Title from "./Components/Title";
import Filter from "./Components/Filter";

export function Order() {
  return (
    <section className="management-section">
      <Title />
      <Filter />
      <div className="table-container">
        <table>
          <TableHeader />
          <TableBody />
        </table>
      </div>
    </section>
  );
}
