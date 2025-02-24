import styled from "styled-components";

export const Main = styled.main`
  height: 75vh;

  margin: 0 auto;
  margin-top: 40px;
  max-width: 1024px;
`;

export const Box_title_and_search = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  h2 {
    font-weight: 500;
  }

  @media screen and (min-width: 300px) and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;
  }
`;
export const Box_search = styled.div`
  width: 287px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(223, 223, 223, 1);
  border-radius: 8px;
  input {
    width: 100%;
    outline: none;
    height: 40px;
    border-radius: 8px;
    border: none;
  }
  img {
    margin-right: 10px;
  }
  input::placeholder {
    padding: 5px;
    color: rgba(158, 158, 158, 1);
  }
`;

export const Layout_main = styled.section`
  height: 100%;
`;
