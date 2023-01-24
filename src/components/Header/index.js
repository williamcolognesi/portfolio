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
            <a href="https://wa.me/5519994337803">
              <button>Contate-me</button>
            </a>
          </S.Header>
        </Container>
      </S.ContainerHeader>
    </div>
  );
}
export default Header;
