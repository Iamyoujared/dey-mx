import React from "react";
import styled from "styled-components";
import { fadeInLeftAnimation } from "../utils/animations";
import Image1 from "../assets/images/image1.png";
import Logo from "../assets/images/Logo.svg";
import { Link } from "react-scroll";

const Wrapper = styled.div`
  position: relative;
  height: 80vh;
  padding: 80px 140px 40px;
  background-image: url(${Image1});
  background-size: cover;
  background-position: bottom;
  @media screen and (max-width: 1023px) {
    height: auto;
    padding: 40px 40px;
  }
  @media screen and (min-width: 1023px) {
    height: 85vh;
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
  text-align: right;
  animation: 0.5s ease-out ${fadeInLeftAnimation};
  & button {
    padding: 12px 40px;
    font-size: 18px;
    font-family: "KanitMedium";
    background: #fff;
    color: #ecbe35;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    &:first-child {
      margin-right: 10px;
    }
    // &:hover {
    //   background: #fd7d14;
    // }
  }
  & h1 {
    margin: 0;
    color: #fff;
    // line-height: 50px;
    font-size: 4.8em;
    text-align: right;
    font-family: KanitSemiBold;
    line-height: 72px;
    & span {
      background: #ecbe35;
      font-weight: 100;
      font-family: KanitRegular !important;
    }
  }
  & p {
    color: #fff;
    font-size: 32px;
    text-align: right;
    font-family: KanitRegular;
    line-height: 35px;
    & b {
      font-family: KanitMedium;
    }
  }
  @media screen and (max-width: 420px) {
    text-align: left;
    & button {
      font-size: 15px;
      &:first-child {
        margin-bottom: 10px;
      }
    }
    & h1 {
      font-size: 2em;
      line-height: 44px;
      text-align: left;
    }
    & p {
      text-align: left;
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

const Badge = styled.h1`
  background: #ecbe35;
  display: inline-block;
  border-radius: 50px;
  padding: 5px 20px;
  margin-top: 5px !important;
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
        {/* <ImageCirlce src={CircleWhiteLeft} alt="CircleWhiteLeft" /> */}
        <Content>
          <div>
            <div>
              <LogoTipo src={Logo} alt="" />
              {/* <h1>
                <span>Tu dinero</span>
                <br />
                Tan libre como tú
              </h1> */}
              {/* <p>
                Para tu <b>empresa</b>, un <b>aliado.</b> <br /> Y para ti, una
                <b> nueva forma de cobrar.</b>
              </p>
              <Link to="form" spy={true} smooth={true}>
                <button>¡Lo quiero!</button>
              </Link>
              <a href="https://app.dey.mx">
                <button>¡Acceder!</button>
              </a> */}
            </div>
          </div>
          <InfoLeft>
            <h1>
              Tu dinero tan
              <br />
            </h1>
            <Badge>libre como tú</Badge>
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
            {/* <Banner src={Banner1} alt="" /> */}
          </InfoLeft>
        </Content>
      </Wrapper>
    </>
  );
};
