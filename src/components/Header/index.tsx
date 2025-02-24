import logo from "../../assets/logo_betalent.png";
import * as S from "./Style.ts";

export default function Header() {
  return (
    <S.Header>
      <img src={logo} alt="logo" />
    </S.Header>
  );
}
