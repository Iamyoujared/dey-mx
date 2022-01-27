import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fadeInLeftAnimation } from "../utils/animations";
import Image4 from "../assets/images/image4.jpg";
import AppStoreLogo from "../assets/images/icono-app-store.png";
import GooglePlayLogo from "../assets/images/icono-google-play.png";

const Wrapper = styled.div`
  padding: 100px 200px;
  height: 70vh;
  background-image: url(${Image4});
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
    margin-bottom: 0;
    text-align: left;
    color: #fff;
    font-size: 55px;
    animation: 0.5s ease-out ${fadeInLeftAnimation};
    font-family: KanitRegular;
    font-weight: 100;
    line-height: 55px;
    & span {
      font-family: KanitSemiBold;
    }
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
    & h1 {
      font-size: 39px;
    }
    & div {
      height: 270px;
    }
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

const LogosApps = styled.div`
  margin: 70px auto 0;
  & img {
    display: block;
    &:first-child {
      margin-bottom: 20px;
      @media screen and (max-width: 480px) {
        margin-right: 0;
        margin-bottom: 10px;
      }
    }
    width: 170px;
  }
  @media screen and (max-width: 1024px) {
    margin: 20px auto 0;
  }
`;

export const Benefits = () => {
  const [renderText, setRenderText] = useState(1);

  useEffect(() => {
    if (renderText === 5) {
      setRenderText(1);
    }
  }, [renderText]);

  return (
    <div id="benefits">
      <Wrapper>
        <Content>
          <div>
            <h1>
              Libertad para ti. <br /> <span>Libertad para</span> <br />{" "}
              <span>tu dinero</span>
            </h1>
          </div>
          <LogosApps>
            <img src={AppStoreLogo} alt="AppStoreLogo" />
            <img src={GooglePlayLogo} alt="GooglePlayLogo" />
          </LogosApps>
        </Content>
      </Wrapper>
    </div>
  );
};
