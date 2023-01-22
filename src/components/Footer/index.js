import { Container } from "@mui/material";
import * as S from "./styles";
import Insta from "../../assets/image/insta.png";
import Wpp from "../../assets/image/wpp.png";
import GitHub from "../../assets/image/github.png";
import Linkedin from "../../assets/image/linkedin.png";
import Mail from "../../assets/image/email.png";

function Footer() {
  return (
    <S.ContainerFooter>
      <Container>
        <S.Icons>
          <a>
            <img src={Linkedin} />
          </a>

          <a>
            <img src={GitHub} />
          </a>

          <a>
            <img src={Wpp} />
          </a>

          <a>
            <img src={Mail} />
          </a>

          <a>
            <img src={Insta} />
          </a>
        </S.Icons>
        Todos os direitos reservados
      </Container>
    </S.ContainerFooter>
  );
}
export default Footer;
