import { Container, Grid } from "@mui/material";
import * as S from "./styles";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function AboutMe() {
  return (
    <S.ContainerAboutMe>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <S.TextAbout>
              <h2>Sobre mim</h2>
              <h3>Vamos criar algo incrível juntos!</h3>
              <p>
                Olá! Sou um entusiasta da tecnologia com 22 anos de idade,
                apaixonado pelo mundo do desenvolvimento de software. Possuo uma
                formação sólida em Ciência da Computação pela Universidade
                Paulista e, nos últimos 1 ano e 4 meses, venho me dedicando ao
                aprimoramento das habilidades de front-end.
              </p>
              <p>
                Minha jornada como desenvolvedor me permitiu criar experiências
                digitais incríveis, combinando criatividade e código para tornar
                a web mais atraente e funcional. Estou constantemente explorando
                as últimas tendências e melhores práticas para criar interfaces
                intuitivas e responsivas que cativam os usuários.
              </p>
            </S.TextAbout>
            <S.Icons>
              <a href="https://www.linkedin.com/in/william-colognesi">
                <LinkedInIcon />
              </a>
              <a href="https://www.instagram.com/williamcolognesi/">
                <InstagramIcon />
              </a>
              <a href="https://github.com/williamcolognesi">
                <GitHubIcon />
              </a>
            </S.Icons>
          </Grid>
        </Grid>
      </Container>
    </S.ContainerAboutMe>
  );
}
