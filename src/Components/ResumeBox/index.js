import { Container, Grid, Button, styled } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import * as S from "./styles";

export default function ResumeBox() {
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
    <S.ContainerResumeBox>
      <Container>
        <Grid container justifyContent="center" rowSpacing={2}>
          <Grid item xs={8}>
            <S.Subtitle color={"#1e30f3"}>
              <h2>Experiência</h2>
              <ButtonBlue variant="contained" startIcon={<DownloadIcon />}>
                Download Curriculo
              </ButtonBlue>
            </S.Subtitle>
          </Grid>
          <Grid item xs={8}>
            <S.Info color={"#1e30f3"}>
              <Grid container columnSpacing={4}>
                <Grid item xs={0}></Grid>
                <Grid item xs={4}>
                  <div className="info">
                    <p className="year">Jun/2022 - Presente</p>
                    <p className="function">Desenvolvedor Front-End</p>
                    <p className="local">Grupo IOB</p>
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
                <Grid item xs={0}></Grid>
              </Grid>
            </S.Info>
            <S.Info color={"#1e30f3"}>
              <Grid container columnSpacing={4}>
                <Grid item xs={0}></Grid>
                <Grid item xs={4}>
                  <div className="info">
                    <p className="year">Jan/2021 - Jun/2022</p>
                    <p className="function">Services Consultant</p>
                    <p className="local">Grupo IOB</p>
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
                <Grid item xs={0}></Grid>
              </Grid>
            </S.Info>
            <S.Info color={"#1e30f3"}>
              <Grid container columnSpacing={4}>
                <Grid item xs={0}></Grid>
                <Grid item xs={4}>
                  <div className="info">
                    <p className="year">Fev/2020 - Jan/2021</p>
                    <p className="function">Customer Care Assistant</p>
                    <p className="local">Grupo IOB</p>
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
                <Grid item xs={0}></Grid>
              </Grid>
            </S.Info>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item xs={8}>
            <S.Subtitle color={"#e21e80"}>
              <h2>Formação</h2>
            </S.Subtitle>
          </Grid>
          <Grid item xs={8}>
            <S.Info color={"#e21e80"}>
              <Grid container columnSpacing={4}>
                <Grid item xs={0}></Grid>
                <Grid item xs={4}>
                  <div className="info">
                    <p className="year">2019 - 2022</p>
                    <p className="function">Ciência da computação</p>
                    <p className="local">Universidade Paulista (UNIP)</p>
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
                <Grid item xs={0}></Grid>
              </Grid>
            </S.Info>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item xs={8}>
            <S.Info color={"#e21e80"}>
              <Grid container rowSpacing={2}>
                <Grid item xs={12}>
                  <S.Subtitle>
                    <h3>Skills Profissionais</h3>
                  </S.Subtitle>
                </Grid>
                <Grid item xs={6}>
                  <div className="teste">SEO/SEM Marketing</div>
                </Grid>
                <Grid item xs={6}>
                  <div className="teste">Web Development</div>
                </Grid>
                <Grid item xs={6}>
                  <div className="teste">Network Security</div>
                </Grid>
                <Grid item xs={6}>
                  <div className="teste">User Interface Design</div>
                </Grid>
              </Grid>
              <Grid container rowSpacing={2}>
                <Grid item xs={12}>
                  <S.Subtitle className="linguagens">
                    <h3>Linguagens</h3>
                  </S.Subtitle>
                </Grid>
                <Grid item xs={4}>
                  <div className="teste">HTML</div>
                </Grid>
                <Grid item xs={4}>
                  <div className="teste">CSS</div>
                </Grid>
                <Grid item xs={4}>
                  <div className="teste">Javascript</div>
                </Grid>
                <Grid item xs={4}>
                  <div className="teste">React</div>
                </Grid>
                <Grid item xs={4}>
                  <div className="teste">Next.js</div>
                </Grid>
                <Grid item xs={4}>
                  <div className="teste">Node.js</div>
                </Grid>
              </Grid>
            </S.Info>
          </Grid>
        </Grid>
      </Container>
    </S.ContainerResumeBox>
  );
}
