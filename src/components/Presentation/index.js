import { Container, Grid } from "@mui/material";
import useWindowSize from "../../lib/useWindowSize";
import containerWidth from "../../lib/containerWidth";
import * as S from "./styles";
import IconDev from "../../assets/image/icon-dev.png";
import IconSeo from "../../assets/image/icon-seo.png";

function Presentation() {
  const size = useWindowSize();
  const w = size.width > 900 ? 6 : 12;
  return (
    <S.ContainerPresentation>
      <Container maxWidth={containerWidth(size.width)}>
        <Grid container columnSpacing={2} rowSpacing={2}>
          <Grid item xs={12}>
            <S.TextSection>
              <h1>Olá, prazer em conhecê-lo(a)</h1>
              <p>
                Meu nome é William Colognesi, sou formado em Ciência da
                Computação. Trabalho como desenvolvedor em uma empresa de
                tecnologia e realizo trabalhos autônomos como criação de paginas
                e softwares.
              </p>
            </S.TextSection>
          </Grid>
          <Grid item xs={w} >
            <S.Section>
              <img src={IconDev} />
              <h1>Desenvolvedor Frontend</h1>
              <p>
                Criação de paginas de captura, softwares web e qualquer tipo de
                produto relacionado a web que atenda suas expectativas.
              </p>
              <h3>Linguagens utilizadas:</h3>
              <p>HTML, CSS, JavaScript, Git, ReactJS</p>
            </S.Section>
          </Grid>
          <Grid item xs={w} rowSpacing={2}>
            <S.Section>
              <img src={IconSeo} />
              <h1>Design e SEO</h1>
              <p>
                Auxilio nas tomadas de decisão com design e melhorias para SEO
                (Search Engine Optimization)
              </p>
              <h3>Ferramentas utilizadas:</h3>
              <p>Figma, Google Search</p>
            </S.Section>
          </Grid>
        </Grid>
      </Container>
    </S.ContainerPresentation>
  );
}
export default Presentation;
