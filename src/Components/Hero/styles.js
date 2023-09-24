import styled from "styled-components";

export const ContainerHero = styled.section`
  padding: 48px 0 48px;
`;

export const TextHero = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  p {
    font-size: 12px;
    font-weight: 700;
    line-height: 12px;
    white-space: nowrap;
    background: linear-gradient(135deg, #1e30f3 0%, #e21e80 100%);
    color: #fff;
    margin-bottom: 1.5rem;
    border-radius: 0.675rem;
    padding: 0.35rem;
  }

  h3 {
    color: #6c757d;
    font-weight: 200;
    font-size: 20px;
    line-height: 42px;
    text-align: center;
    margin-bottom: 1rem;
  }

  h1 {
    background: -webkit-linear-gradient(315deg, #1e30f3 0%, #e21e80 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-size-adjust: 100%;
    font-weight: 700;
    font-size: 44px;
    margin-bottom: 48px;
    text-align: center;
  }

  @media (min-width: 900px) {
    h1 {
      font-size: 3.5rem;
    }
    h3 {
      font-size: 28px;
    }
  }

  @media (min-width: 1536px) {
    
    align-items: start;
    height: 100%;
    justify-content: center;
  }
`;

export const Buttons = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 32px;
  button {
    padding: 15px 30px;
  }

  @media (min-width: 1536px) {
    justify-content: start;
  }
`;

export const ImageBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 90%;
  }
`;
