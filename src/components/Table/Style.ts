import styled from "styled-components";

export const Layout_table = styled.div`
  width: 100%;
  height: 75vh;
  border-radius: 8px 8px 0 0; /* Arredonda as bordas superiores */
  background-color: aliceblue;
  overflow: hidden; /* Garante que as bordas arredondadas do Layout_table sejam visíveis */
`;

export const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  height: 100%;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.2);

  thead {
    width: 100%;
    background: rgba(5, 0, 255, 1);
    text-transform: uppercase;
    color: white;
    height: 50px;
  }

  tbody tr {
    text-align: center;
    padding: 10px;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  tbody tr:last-child {
    border-bottom: none;
  }
`;

export const t_row = styled.tr`
  text-align: center;
  padding: 10px;
  width: 100%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
