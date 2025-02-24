import * as S from "./Style.ts";
import icon_search from "../../assets/icon_search.png";
import Table from "../Table/index.tsx";
import { EmployeesProps } from "../../types.ts";

type MainProps = {
  employees: EmployeesProps[];
  search: string;
  employeeFiltered: EmployeesProps[];
  setSearch: (value: string) => void;
};
export default function Main({
  employees,
  search,
  employeeFiltered,
  setSearch,
}: MainProps) {
  return (
    <S.Main>
      <S.Layout_main>
        <S.Box_title_and_search className="box_title_and_search">
          <h2>Funcionários</h2>
          <S.Box_search>
            <input
              type="search"
              placeholder="Pesquisar"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />

            <img src={icon_search} alt="icone de pesquisa" />
          </S.Box_search>
        </S.Box_title_and_search>
        <Table
          employees={employees}
          employeeFiltered={employeeFiltered}
          search={search}
        />
      </S.Layout_main>
    </S.Main>
  );
}
