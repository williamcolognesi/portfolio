import styled from "styled-components";

export const ContainerAboutMe = styled.section`
  padding: 48px 0 48px;
  background-color: rgb(248, 249, 250);
`;

export const TextAbout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-top: 48px;
  p {
    color: rgb(108, 117, 125);
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    margin-bottom: 14px;
  }

  h3 {
    color: rgb(33, 37, 41);
    font-weight: 200;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 24px;
  }

  h2 {
    background: -webkit-linear-gradient(315deg, #1e30f3 0%, #e21e80 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-size-adjust: 100%;
    font-weight: 700;
    font-size: 48px;
    line-height: 57.6px;
    margin-bottom: 10px;
    text-align: center;
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 48px;
  a {
    padding: 10px;
    cursor: pointer;
    text-decoration: none;
  }
`;
