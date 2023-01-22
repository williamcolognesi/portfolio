import { Container, Grid } from "@mui/material";
import useWindowSize from "../../lib/useWindowSize";
import containerWidth from "../../lib/containerWidth";
import * as S from "./styles";
import Logo from "../../assets/image/logo-xl.png";

function Phrase() {
  const size = useWindowSize();
  return (
    <S.ContainerPhrase>
      <Container maxWidth={containerWidth(size.width)}>
        <Grid container>
          <Grid item xs={12}>
            <S.Phrase>
              <img src={Logo} />
              “O espaço entre a teoria e a prática não é tão grande como é, a
              teoria na prática.”
            </S.Phrase>
          </Grid>
        </Grid>
      </Container>
    </S.ContainerPhrase>
  );
}
export default Phrase;
