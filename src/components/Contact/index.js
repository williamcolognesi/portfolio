import { Button, Container, Grid } from "@mui/material";
import useWindowSize from "../../lib/useWindowSize";
import containerWidth from "../../lib/containerWidth";
import * as S from "./styles";

function Contact() {
  const size = useWindowSize();
  return (
    <S.ContainerContact>
      <Container maxWidth={containerWidth(size.width)}>
        <Grid container>
          <Grid item xs={12}>
            <h1>Interessado em realizar um projeto?</h1>
            <p>
              Estou a disposição para atende-lo(a) da melhor maneira possível.
            </p>
            <a href="https://wa.me/5519994337803">
              <Button>Conversar agora</Button>
            </a>
          </Grid>
        </Grid>
      </Container>
    </S.ContainerContact>
  );
}
export default Contact;
