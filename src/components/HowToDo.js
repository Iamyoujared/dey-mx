import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import { pulseAnimation } from "../utils/animations";
import { ReactComponent as MousePointerIcon } from "../assets/images/mouse-pointer.svg";
import { ReactComponent as DollarSignIcon } from "../assets/images/dollar-sign.svg";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  padding: 30px 100px;
  & div {
    // max-height: 350px;
    padding: 60px 40px;
    background: #fff1c8;
    text-align: center;
    h1 {
      margin: 0;
      font-size: 55px;
      color: #edbd31;
      font-family: KanitSemiBold;
    }
    p {
      margin-bottom: 50px;
      font-size: 25px;
      font-family: KanitRegular;
      color: #626262;
      & b {
        color: #f1c33d;
      }
      & span {
        font-family: KanitMedium;
      }
    }
    button {
      padding: 7px 20px;
      width: 170px;
      font-size: 21px;
      border-radius: 5px;
      border: 3px solid #f48f3b;
      background: #f48f3b;
      cursor: pointer;
      color: #ffffff;
    }
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: 100%;
    padding: 40px;
    & div {
      padding: 40px;
    }
  }
`;

const Title = styled.h1`
  text-align: center;
  font-family: KanitSemiBold;
  color: #f48f3b;
`;

const WithdrawButton = styled.button`
  padding: 20px;
  font-family: KanitMedium;
`;

const Numbers = styled.span`
  font-family: KanitMedium;
  font-size: 50px;
  color: #e3b738;
`;

const NumbersLabel = styled.span`
  display: block;
  font-family: KanitRegular;
`;

const IconMouse = styled.span`
  position: absolute;
  margin-left: -16px;
  margin-top: 30px;
  animation: 0.8s ease-out ${pulseAnimation} infinite;
  & svg {
    fill: #fff;
  }
`;

const IconDollar = styled.span`
  & svg {
    stroke: #e3b738;
  }
`;

const Hash = styled.span`
  color: #f1c33d;
`;

export const HowToDo = () => {
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const formatValue = (value) => numberWithCommas(value.toFixed(0));

  return (
    <>
      <Title>A un clic de tu salario</Title>
      <Wrapper>
        <ScrollAnimation animateIn="zoomIn">
          <h1>1</h1>
          <p>
            Verifica el <b>saldo</b> <br /> <b>disponible</b> en tu cuenta
          </p>
          <div>
            <Numbers>${formatValue(12000)}</Numbers>
            <NumbersLabel>Saldo en tu cuenta</NumbersLabel>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="zoomIn" delay={200}>
          <h1>2</h1>
          <p>
            Elige el <b>monto</b> <br /> que deseas <b>retirar</b>
          </p>
          <div>
            <Numbers>${formatValue(8000)}</Numbers>
            <NumbersLabel>¿Cuánto deseas retirar?</NumbersLabel>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="zoomIn" delay={400}>
          <h1>3</h1>
          <p>
            Oprime el <b>botón</b>
          </p>
          <div>
            <WithdrawButton>retirar</WithdrawButton>
            <IconMouse>
              <MousePointerIcon />
            </IconMouse>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="zoomIn" delay={600}>
          <h1>4</h1>
          <p>
            Disfruta tu sueldo <br /> <Hash>#DineroLibre</Hash>
          </p>
          <IconDollar>
            <DollarSignIcon />
          </IconDollar>
        </ScrollAnimation>
      </Wrapper>
    </>
  );
};
