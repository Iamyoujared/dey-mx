import React from "react";
import styled from "styled-components";
import { fadeInLeftAnimation } from "../utils/animations";
import ScrollAnimation from "react-animate-on-scroll";
import CircleYellowRight from "../assets/images/circle-yellow-right.svg";

const Content = styled.div`
  height: 400px;
  padding: 10px 150px 100px;
  display: grid;
  grid-template-columns: 65% 35%;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-items: center;
  & h1 {
    position: relative;
    z-index: 1;
    text-align: left;
    color: #f8d05d;
    font-size: 55px;
    padding-left: 2em;
    animation: 0.5s ease-out ${fadeInLeftAnimation};
    font-family: KanitSemiBold;
    line-height: 50px;
    font-weight: 100;
    & span {
      font-size: 45px;
      color: #657482;
      font-family: "KanitRegular";
    }
    & small {
      margin-top: 1em;
      display: block;
    }
  }
  & div {
    text-align: center;
  }
  @media screen and (max-width: 1024px) {
    height: auto;
    grid-template-columns: 100%;
    padding: 40px;
    & h1 {
      text-align: center;
      font-size: 38px;
      padding-left: 0;
    }
  }
`;

const ImageCirlce = styled.img`
  transform: rotate(178deg) scale(4);
  width: 100px;
  left: -7px;
  position: absolute;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const BenefitsStart = () => {
  return (
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
      <Content>
        <div>
          <h1>
            Sin trucos, <br />
            <span>
              pero con muchos beneficios. <br /> <small>Descúbrelos.</small>
            </span>
          </h1>
        </div>
        <ImageCirlce src={CircleYellowRight} alt="CircleYellowRight" />
      </Content>
    </ScrollAnimation>
  );
};
