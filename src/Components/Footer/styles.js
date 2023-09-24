import styled from "styled-components";

export const ContainerFooter = styled.footer`
  padding: 20px 0 20px;
  p {
    text-align: center;
    padding: 20px;
  }

  ul {
    display: flex;
    justify-content: space-around;
    padding: 20px;
  }
  li {
    color: rgba(0, 0, 0, 0.55);
    font-size: 14px;
    font-weight: 700;
    line-height: 21px;
    cursor: pointer;
  }
  li:hover {
    color: #000;
  }

  @media (min-width: 900px) {
    p {
      text-align: left;
    }
  }
`;
