import "./style.css";
import { TableHeader } from "./Components/TableHeader";
import { TableBody } from "./Components/TableBody";
import Title from "./Components/Title";
import Filter from "./Components/Filter";
import { useDebounce } from "use-debounce";
import { useState } from "react";

export function Order() {
  const [filter, setFilter] = useState("");
  const [status, setStatus] = useState("");
  const [debouncedFilter] = useDebounce(filter, 1500);

  return (
    <section className="management-section">
      <Title />
      <Filter
        filter={filter}
        setFilter={setFilter}
        status={status}
        setStatus={setStatus}
      />
      <div className="table-container">
        <table>
          <TableHeader />
          <TableBody debouncedFilter={debouncedFilter} status={status} />
        </table>
      </div>
    </section>
  );
}
