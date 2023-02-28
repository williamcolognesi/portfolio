import { Container, Grid } from "@mui/material";
import useWindowSize from "../../lib/useWindowSize";
import containerWidth from "../../lib/containerWidth";
import * as S from "./styles";

function Portfolio() {
  const size = useWindowSize();
  const w = size.width < 900 ? 12 : 4;
  const backFilmaria = `url('https://live.staticflickr.com/65535/52716170141_9cc4fdf133_w.jpg')`;
  const backPass = `url('https://live.staticflickr.com/65535/52716429764_6d2174c58a_w.jpg')`;
  const backFidelity = `url('https://live.staticflickr.com/65535/52716429789_61b807c2e3_w.jpg')`;

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
          <S.CardJobs back={backFilmaria}>
            <div>
              <a href="https://filmaria-six.vercel.app/">
                <h1>Filmaria</h1>
                <p>Pagina que lista e armazena seus filmes favoritos</p>
              </a>
            </div>
          </S.CardJobs>
          <S.CardJobs back={backPass}>
            <div>
              <a href="https://password-generator-xi-six.vercel.app/">
                <h1>Gerador de senha</h1>
                <p>Gerador automatico de senha</p>
              </a>
            </div>
          </S.CardJobs>
          <S.CardJobs back={backFidelity}>
            <div>
              <a href="https://barbeariaalabama.com/">
                <h1>Cartão fidelidade</h1>
                <p>
                  Aplicativo que scaneia QRCode e armazena pontos para troca em
                  produtos
                </p>
              </a>
            </div>
          </S.CardJobs>
        </Grid>
      </Container>
    </S.ContainerPortfolio>
  );
}
export default Portfolio;
