import styled from "styled-components";

export const ContainerPresentation = styled.section``;

export const TextSection = styled.div`
  padding: 100px;
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  text-align: center;
  color: #000000;
  @media (max-width: 600px) {
    padding: 30px;
    font-size: 26px;
  }
  p {
    margin-top: 50px;
    font-weight: 400;
    color: #4f4d4d;
  }
`;

export const Section = styled.div`
  @media (max-width: 900px) {
    height: 700px;
  }
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  background: #ffffff;
  border: 1px solid #b2b2b2;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  text-align: center;
  font-size: 32px;
  line-height: 39px;
  text-align: center;
  color: #000000;
  img {
    width: 166px;
  }
  h3 {
    margin-top: 20px;
    font-size: 24px;
    line-height: 29px;
    color: #00a6ed;
  }

  p {
    font-size: 24px;
    margin-top: 20px;
  }
`;
