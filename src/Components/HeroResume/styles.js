import styled from "styled-components";

export const ContainerHeroResume = styled.section`
  padding: 48px 0 48px;
`;

export const Title = styled.div`
  h1 {
    background: -webkit-linear-gradient(315deg, #1e30f3 0%, #e21e80 75%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-size-adjust: 100%;
    font-weight: 700;
    font-size: 44px;
    margin-bottom: 48px;
    text-align: center;
  }
`;

export const Subtitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    color: rgb(30, 48, 243);
    font-size: 32px;
    font-weight: 700;
    line-height: 38px;
  }
`;
