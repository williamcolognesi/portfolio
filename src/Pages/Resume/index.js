import { Grid } from "@mui/material";
import * as S from "./styles";
import HeroResume from "../../Components/HeroResume";
import ResumeBox from "../../Components/ResumeBox";

export default function Resume() {
  return (
    <S.ContainerResume>
      <Grid container>
        <Grid item xs={12}>
          <HeroResume />
          <ResumeBox />
        </Grid>
      </Grid>
    </S.ContainerResume>
  );
}
