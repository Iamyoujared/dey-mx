import React from "react";
import styled from "styled-components";
import { fadeInLeftAnimation } from "../utils/animations";
import CircleWhiteLeft from "../assets/images/text-dey.svg";
import Banner1 from "../assets/images/banner2.png";
import Logo from "../assets/images/Logo.svg";
import { Link } from "react-scroll";

const Wrapper = styled.div`
  position: relative;
  height: 80vh;
  padding: 40px 80px;
  background: #f8d05d;
  @media screen and (max-width: 1023px) {
    height: auto;
    padding: 40px 40px 0;
  }
  @media screen and (min-width: 1023px) {
    height: 100vh;
  }
`;

const Content = styled.div`
  height: 70vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  @media screen and (max-width: 1024px) {
    grid-template-columns: 100%;
    height: auto;
  }
`;

const InfoLeft = styled.div`
  display: flex;
  align-items: flex-end;
  animation: 0.5s ease-out ${fadeInLeftAnimation};
  & button {
    padding: 12px 40px;
    font-size: 18px;
    font-family: "KanitMedium";
    background: #f4882f;
    color: #fff;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    &:first-child {
      margin-right: 10px;
    }
    &:hover {
      background: #fd7d14;
    }
  }
  & h1 {
    color: #fff;
    line-height: 50px;
    font-size: 4.8em;
    text-align: left;
    font-family: KanitSemiBold;
    line-height: 72px;
    & span {
      font-weight: 100;
      font-family: KanitRegular !important;
    }
  }
  & p {
    color: #fff;
    font-size: 32px;
    text-align: left;
    font-family: KanitRegular;
    line-height: 35px;
    & b {
      font-family: KanitMedium;
    }
  }
  @media screen and (max-width: 420px) {
    & h1 {
      font-size: 3em;
      line-height: 50px;
    }
    & p {
      font-size: 23px;
    }
  }
  @media screen (min-width: 428px) and (max-width: 1024px) {
    & h1 {
      font-size: 4em;
      line-height: 60px;
    }
  }
  @media screen and (min-width: 1025px) and (max-width: 1366px) {
    align-items: center;
  }
`;

const ImageCirlce = styled.img`
  position: absolute;
  width: 100px;
  right: 4em;
  bottom: 6em;
  transform: rotate(20deg) scale(8);
  @media screen and (max-width: 1024px) {
    display: none;
  }
  @media screen and (min-width: 1445px) {
    transform: rotate(20deg) scale(11);
    bottom: 10em;
  }
`;

const Banner = styled.img`
  position: absolute;
  width: 800px;
  bottom: 0;
  @media screen and (max-width: 420px) {
    position: relative;
    width: 300px;
    bottom: -4px;
    margin-top: 2em;
  }
  @media screen and (min-width: 428px) and (max-width: 768px) {
    position: relative;
    width: 500px;
    bottom: 0;
    margin: auto;
    display: block;
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    position: relative;
    width: 600px;
    bottom: 0;
    margin: auto;
    display: block;
  }
  @media screen and (min-width: 1025px) and (max-width: 1366px) {
    position: absolute;
    width: 679px;
    bottom: 0;
  }
  @media screen and (min-width: 1445px) {
    position: absolute;
    width: 900px;
    bottom: 0;
  }
`;

const LogoTipo = styled.img`
  width: 180px;
  margin-bottom: 3em;
  @media screen and (max-width: 768px) {
    width: 150px;
  }
`;

export const Home = () => {
  return (
    <>
      <Wrapper>
        <ImageCirlce src={CircleWhiteLeft} alt="CircleWhiteLeft" />
        <Content>
          <InfoLeft>
            <div>
              <LogoTipo src={Logo} alt="" />
              <h1>
                <span>Tu dinero</span>
                <br />
                Tan libre como tú
              </h1>
              <p>
                Para tu <b>empresa</b>, un <b>aliado.</b> <br /> Y para ti, una
                <b> nueva forma de cobrar.</b>
              </p>
              <Link to="form" spy={true} smooth={true}>
                <button>¡Lo quiero!</button>
              </Link>
              <a href="https://app.dey.mx">
                <button>¡Acceder!</button>
              </a>
            </div>
          </InfoLeft>
          <div>
            <Banner src={Banner1} alt="" />
          </div>
        </Content>
      </Wrapper>
    </>
  );
};
