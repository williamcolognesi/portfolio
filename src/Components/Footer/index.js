import { Container, Grid } from "@mui/material";
import * as S from "./styles";

export default function Footer() {
  return (
    <S.ContainerFooter>
      <Container>
        <Grid container>
          <Grid item xs={12} md={9}>
            <p>Copyright © Todos os direitos reservados 2023</p>
          </Grid>
          <Grid item xs={12} md={3}>
            <ul>
              <li>Privacidade</li>
              <li>Termos</li>
              <li>Contato</li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </S.ContainerFooter>
  );
}
