import * as S from "./styles";
import Hero from "../../Components/Hero";
import AboutMe from "../../Components/AboutMe";

export default function Home() {
  return (
    <S.ContainerHome>
      <Hero />
      <AboutMe />
    </S.ContainerHome>
  );
}
