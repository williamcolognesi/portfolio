import { Container } from "@mui/material";
import Logo from "../../assets/image/logo.png";
import * as S from "./styles";

function Header() {
  return (
    <div>
      <S.ContainerHeader>
        <Container maxWidth="xl">
          <S.Header>
            <img src={Logo} />
            <button>Contate-me</button>
          </S.Header>
        </Container>
      </S.ContainerHeader>
    </div>
  );
}
export default Header;
