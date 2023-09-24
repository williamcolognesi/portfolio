import { Container, Grid } from "@mui/material";
import * as S from "./styles";

export default function HeroResume() {
  return (
    <S.ContainerHeroResume>
      <Container>
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <S.Title>
              <h1>Resumo</h1>
            </S.Title>
          </Grid>
        </Grid>
      </Container>
    </S.ContainerHeroResume>
  );
}
