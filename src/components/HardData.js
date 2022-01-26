import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

const Content = styled.div`
  padding: 120px 140px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  & h1 {
    text-align: center;
    font-size: 40px;
    color: #f3c951;
    & p {
      font-size: 30px;
      color: #c7a369;
    }
  }
  @media screen and (max-width: 1024px) {
    height: auto;
    padding: 40px;
    & h1 {
      font-size: 25px;
      & p {
        font-size: 18px;
      }
    }
  }
`;

export const HardData = () => {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <Content>
        <h1>
          "Las compañías que tienen colaboradores <br /> comprometidos y felices{" "}
          <br />
          tienen un desempeño superior a sus competidores en 20%" <br />
          <p>- Harvard Business Review</p>
        </h1>
      </Content>
    </ScrollAnimation>
  );
};
