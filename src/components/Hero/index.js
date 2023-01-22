import { Container, Grid } from "@mui/material";
import useWindowSize from "../../lib/useWindowSize";
import containerWidth from "../../lib/containerWidth";
import * as S from "./styles";
import ImageHero from "../../assets/image/image-hero.png";

function Hero() {
  const size = useWindowSize();
  return (
    <S.ContainerHero>
      <Container maxWidth={containerWidth(size.width)}>
        <Grid container>
          <Grid item xs={12}>
            <h1>Desenvolvedor WEB</h1>
            <img src={ImageHero} />
          </Grid>
        </Grid>
      </Container>
    </S.ContainerHero>
  );
}
export default Hero;
