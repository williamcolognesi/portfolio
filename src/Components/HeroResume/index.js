import { Button, Container, Grid, styled } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import * as S from "./styles";

export default function HeroResume() {
  const ButtonBlue = styled(Button)({
    fontWeight: "bolder",
    fontSize: 14,
    backgroundColor: "#1e30f3",
    padding: "20px",
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
    <S.ContainerHeroResume>
      <Container>
        <Grid container justifyContent="center">
          <Grid item xs={12}>
            <S.Title>
              <h1>Resumo</h1>
            </S.Title>
          </Grid>
          <Grid item xs={8}>
            <S.Subtitle>
              <h2>Experiência</h2>
              <ButtonBlue variant="contained" startIcon={<DownloadIcon />}>
                Download Curriculo
              </ButtonBlue>
            </S.Subtitle>
          </Grid>
        </Grid>
      </Container>
    </S.ContainerHeroResume>
  );
}
