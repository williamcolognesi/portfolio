import { Container, Grid } from "@mui/material";
import * as S from "./styles";
import Logo from "../../public/assets/images/Logo.png";

export default function Header() {
  return (
    <S.ContainerHeader>
      <Container>
        <Grid container>
          <Grid item md={8} xs={12}>
            <S.Logo>
              <img src={Logo} />
            </S.Logo>
          </Grid>
          <Grid item md={4} xs={12}>
            <ul>
              <li>Home</li>
              <li>Resumo</li>
              <li>Projetos</li>
              <li>Contato</li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </S.ContainerHeader>
  );
}
