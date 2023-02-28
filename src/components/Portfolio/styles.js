import styled from "styled-components";

export const ContainerPortfolio = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
  background: #fafafa;
  margin-top: 30px;

  @media (max-width: 600px) {
    padding-left: 20px;
  }
`;

export const Text = styled.div`
  h1 {
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    text-align: center;
    color: #000000;
  }
  p {
    margin-top: 20px;
    font-weight: 400;
    font-size: 36px;
    line-height: 44px;
    text-align: center;
    color: #4f4d4d;
  }
`;

export const teste = styled.div`
  border: 1px solid;
`;

export const CardJobs = styled.div`
  background: ${(props) => props.back};
  background-position: 50%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 50px;
  width: 350px;
  height: 350px;
  border-radius: 30px;
  a{
    text-decoration: none;
  }
  filter: drop-shadow(-4px 8px 16px rgba(0, 0, 0, 0.16));
  h1 {
    font-weight: 700;
    font-size: 34px;
    line-height: 44px;
    text-align: center;
    color: #4f4d4d;
  }
  p {
    margin-top: 20px;
    font-weight: 500;
    font-size: 30px;
    line-height: 44px;
    text-align: center;
    color: #4f4d4d;
  }
  div {
    padding: 30px;
    transition: all 0.5s ease;
  }
  div:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;
