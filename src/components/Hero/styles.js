import styled from "styled-components";

export const ContainerHero = styled.section`
  background-color: #ffffff;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    height: 100vh;
    margin-top: -50px;
  }

  h1 {
    margin: 100px;
    font-weight: 700;
    font-size: 64px;
    text-align: center;
    color: #000000;
    @media (max-width: 600px) {
      margin: 50px;
      font-size: 36px;
    }
  }

  img {
    max-width: 600px;
    margin: auto;
    display: block;

    @media (max-width: 600px) {
      max-width: 400px;
    }
  }
`;
