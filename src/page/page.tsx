import { useState, useEffect } from "react";
import { api } from "../api/index.ts";
import Header from "../components/Header/index.tsx";
import { EmployeesPropsArray } from "../types.ts";
import Main from "../components/Main/index.tsx";

export default function Page() {
  const [employees, setEmployees] = useState<EmployeesPropsArray>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data: EmployeesPropsArray) =>
        setEmployees(
          data.map((employee) => ({
            image: employee.image,
            name: employee.name,
            job: employee.job,
            admission_date: employee.admission_date,
            phone: employee.phone,
          }))
        )
      )
      .catch((error) => console.error("Erro ao buscar dados:", error));
  }, []);

  const employeeFiltered =
    search.length > 0
      ? employees.filter(
          (employee) =>
            employee.name.toLowerCase().includes(search.toLowerCase()) ||
            employee.job.toLowerCase().includes(search.toLowerCase()) ||
            employee.phone.includes(search)
        )
      : [];

  return (
    <div>
      <Header />
      <Main
        employees={employees}
        employeeFiltered={employeeFiltered}
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
}
