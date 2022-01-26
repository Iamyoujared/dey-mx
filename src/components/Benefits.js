import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fadeInLeftAnimation } from "../utils/animations";
import backgroundBenefits from "../assets/images/background-benefits.svg";
import ScrollAnimation from "react-animate-on-scroll";
import Slider from "react-slick";

const Content = styled.div`
  padding: 100px 200px;
  background-image: url(${backgroundBenefits});
  background-repeat: no-repeat;
  background-size: cover;
  & h2 {
    margin-top: 0;
    text-align: center;
    color: #fff;
    font-size: 40px;
    font-family: "KanitSemiBold";
  }
  & h1 {
    text-align: center;
    color: #fff;
    font-size: 35px;
    animation: 0.5s ease-out ${fadeInLeftAnimation};
    font-family: KanitRegular;
    font-weight: 100;
    margin-bottom: 0;
  }
  & div {
    text-align: center;
    height: 140px;
    &:last-child {
      height: auto;
    }
  }
  @media screen and (max-width: 1024px) {
    height: auto;
    grid-template-columns: 100%;
    padding: 40px 40px 60px;
    & div {
      height: 270px;
    }
  }
`;

export const Benefits = () => {
  const [renderText, setRenderText] = useState(1);

  useEffect(() => {
    if (renderText === 5) {
      setRenderText(1);
    }
  }, [renderText]);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
      <div id="benefits">
        <Content>
          <div>
            <h2>Beneficios</h2>
            <Slider {...settings}>
              <div>
                <h1>Adiós al estrés financiero</h1>
              </div>
              <div>
                <h1>Retira de tu salario cómo y cuándo quieras</h1>
              </div>
              <div>
                <h1>Genera historial crediticio</h1>
              </div>
              <div>
                <h1>Obten liquidez inmediata disponible 24/7</h1>
              </div>
            </Slider>
          </div>
        </Content>
      </div>
    </ScrollAnimation>
  );
};
