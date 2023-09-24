import { Container, Grid } from "@mui/material";
import * as S from "./styles";

export default function ResumeBox() {
  return (
    <S.ContainerResumeBox>
      <Container>
        <Grid container justifyContent="center">
          <Grid item xs={8}>
            <div className="box">
              <Grid container columnSpacing={2}>
                <Grid item xs={1}></Grid>
                <Grid item xs={3}>
                  <div className="info">
                    <p className="year">2019 - Present</p>
                    <p className="function">Web Developer</p>
                    <p className="local">Stark Industries Los Angeles, CA</p>
                  </div>
                </Grid>
                <Grid item xs={7}>
                  <p className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Delectus laudantium, voluptatem quis repellendus eaque sit
                    animi illo ipsam amet officiis corporis sed aliquam non
                    voluptate corrupti excepturi maxime porro fuga.
                  </p>
                </Grid>
                <Grid item xs={1}></Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </S.ContainerResumeBox>
  );
}
