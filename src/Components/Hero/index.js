import { Button, Container, Grid, styled } from "@mui/material";
import * as S from "./styles";
import ImageHero from "../../public/assets/images/hero.png";

export default function Hero() {
  const ButtonBlack = styled(Button)({
    color: "#000",
    fontWeight: "bolder",
    fontSize: 14,
    borderColor: "#000",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  });

  const ButtonBlue = styled(Button)({
    fontWeight: "bolder",
    fontSize: 14,
    backgroundColor: "#1e30f3",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  });
  return (
    <S.ContainerHero>
      <Container>
        <Grid container>
          <Grid item xs={12} xl={7}>
            <S.TextHero>
              <p>DESIGN · DESENVOLVIMENTO · MARKETING</p>
              <h3>Posso ajudar sua empresa a</h3>
              <h1>Ficar online e crescer </h1>
              <S.Buttons>
                <ButtonBlue variant="contained">Resumo</ButtonBlue>
                <ButtonBlack variant="outlined">Projetos</ButtonBlack>
              </S.Buttons>
            </S.TextHero>
          </Grid>
          <Grid item xs={12} xl={5}>
            <S.ImageBlock>
              <img src={ImageHero} />
            </S.ImageBlock>
          </Grid>
        </Grid>
      </Container>
    </S.ContainerHero>
  );
}
