import { Container, Grid } from "@mui/material";
import * as S from "./styles";
import Hero from "../../Components/Hero";
import AboutMe from "../../Components/AboutMe";

export default function Home() {
  return (
    <S.ContainerHome>
      <Grid container>
        <Grid item xs={12}>
          <Hero />
          <AboutMe />
        </Grid>
      </Grid>
    </S.ContainerHome>
  );
}
