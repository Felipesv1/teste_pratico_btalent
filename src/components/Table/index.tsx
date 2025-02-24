import { formatarData, formatarTelefone } from "../../functions/Functions.ts";
import { EmployeesProps } from "../../types.ts";
import * as S from "./Style.ts";

type TableProps = {
  employees: EmployeesProps[];
  search: string;
  employeeFiltered: EmployeesProps[];
};

export default function Table({
  employees,
  search,
  employeeFiltered,
}: TableProps) {
  return (
    <S.Layout_table>
      <S.Table>
        <thead>
          <tr>
            <th>foto</th>
            <th>nome</th>
            <th>Cargo</th>
            <th>Data de admissão</th>
            <th>Telefone</th>
          </tr>
        </thead>
        <tbody>
          {search.length > 0
            ? employeeFiltered.map((employee) => (
                <S.t_row key={employee.name}>
                  <td>
                    <img src={employee.image} alt="foto do funcionário" />
                  </td>
                  <td>{employee.name}</td>
                  <td>{employee.job}</td>
                  <td>{formatarData(employee.admission_date)}</td>
                  <td>{formatarTelefone(employee.phone)}</td>
                </S.t_row>
              ))
            : employees.map((employee) => (
                <S.t_row key={employee.name}>
                  <td>
                    <img src={employee.image} alt="foto do funcionário" />
                  </td>
                  <td>{employee.name}</td>
                  <td>{employee.job}</td>
                  <td>{formatarData(employee.admission_date)}</td>
                  <td>{formatarTelefone(employee.phone)}</td>
                </S.t_row>
              ))}
        </tbody>
      </S.Table>
    </S.Layout_table>
  );
}
