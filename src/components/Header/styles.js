import styled from "styled-components";

export const ContainerHeader = styled.header`
  background: #ffffff;
  padding: 30px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  button {
    @media (max-width: 900px) {
      display: none;
    }
    background: #ffffff;
    border: 5px solid #00a6ed;
    border-radius: 30px;
    width: 222px;
    padding: 5px;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
    color: #00a6ed;
  }
`;
