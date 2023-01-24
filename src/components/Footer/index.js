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
          <a href="https://www.linkedin.com/in/william-colognesi-a1638a189/">
            <img src={Linkedin} />
          </a>

          <a href="https://github.com/williamcolognesi">
            <img src={GitHub} />
          </a>

          <a href="https://wa.me/5519994337803">
            <img src={Wpp} />
          </a>

          <a href="mailto:williamcolognesi.developer@gmail.com?subject=&body=Estava%20olhando%20seu%20portfolio%20e%20gostaria%20de%20saber%20mais!">
            <img src={Mail} />
          </a>

          <a href="https://www.instagram.com/williamcolognesi/">
            <img src={Insta} />
          </a>
        </S.Icons>
        Todos os direitos reservados
      </Container>
    </S.ContainerFooter>
  );
}
export default Footer;
