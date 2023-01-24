import { Container, Grid } from "@mui/material";
import useWindowSize from "../../lib/useWindowSize";
import containerWidth from "../../lib/containerWidth";
import * as S from "./styles";

function Portfolio() {
  const size = useWindowSize();
  const w = size.width < 900 ? 12 : 4;
  return (
    <S.ContainerPortfolio>
      <Container maxWidth={containerWidth(size.width)}>
        <Grid container columnSpacing={2} rowSpacing={2}>
          <Grid item xs={12}>
            <S.Text>
              <h1>Meu portfólio</h1>
              <p>Aqui estão alguns trabalhos que realizei</p>
            </S.Text>
          </Grid>

          <S.CardJobs>
            <div>
              <h1>Filmaria</h1>
              <p>Pagina que lista e armazena seus filmes favoritos</p>
            </div>
          </S.CardJobs>
          <S.CardJobs>
            <div>
              <h1>Gerador de senha</h1>
              <p>Gerador automatico de senha</p>
            </div>
          </S.CardJobs>
          <S.CardJobs>
            <div>
              <h1>Cartão fidelidade</h1>
              <p>
                Aplicativo que scaneia QRCode e armazena pontos para troca em
                produtos
              </p>
            </div>
          </S.CardJobs>
        </Grid>
      </Container>
    </S.ContainerPortfolio>
  );
}
export default Portfolio;
