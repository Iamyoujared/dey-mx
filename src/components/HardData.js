import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import Image2 from "../assets/images/image2.png";
// import Parentesis1 from "../assets/images/parentesis1.png";
// import Parentesis2 from "../assets/images/parentesis2.png";

const Content = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 750px;
  & h1 {
    margin-top: 10px;
    text-align: center;
    font-size: 45px;
    color: #fff;
    & p {
      font-size: 30px;
      color: #c7a369;
    }
  }
  @media screen and (max-width: 1024px) {
    height: auto;
    padding: 0px;
    grid-template-columns: auto;
    & h1 {
      font-size: 25px;
      & p {
        font-size: 18px;
      }
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 750px;
  object-fit: cover;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const InfoCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 750px;
  background: #ecbe35;
  & div {
    padding: 40px 100px;
    & h3 {
      position: relative;
      margin-bottom: 0;
      text-align: center;
      font-size: 40px;
      font-family: KanitRegular;
      font-weight: 100;
      color: #fff;
      z-index: 1;
      & span {
        font-family: KanitSemiBold;
      }
    }
    & h1 {
      font-size: 60px;
      & small {
        font-size: 32px;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    height: auto;
    & div {
      padding: 40px;
      & h3 {
        font-size: 29px;
      }
    }
  }
`;

const Sentence = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & h2 {
    line-height: 27px;
    color: #fff;
  }
`;

// const ParenthesisOne = styled.img`
//   width: 110px;
//   position: absolute;
//   top: 7em;
//   left: 11em;
//   z-index: 0;
// `;

// const ParenthesisTwo = styled.img`
//   width: 110px;
//   position: absolute;
//   bottom: 23em;
//   left: 40em;
//   z-index: 0;
// `;

export const HardData = () => {
  return (
    <ScrollAnimation animateIn="fadeIn">
      <Content>
        {/* <ParenthesisOne src={Parentesis1} alt="" /> */}
        <InfoCard>
          <div>
            <h3>
              Las compañías que tienen <br />{" "}
              <span>colaboradores comprometidos</span> <br /> y{" "}
              <span>felices </span>
              tienen un{" "}
              <span>
                desempeño <br /> superior
              </span>{" "}
              a sus competidores
            </h3>
            <h1>
              <small>en</small> 20%
            </h1>
            <Sentence>
              <h2>
                Harvard <br /> Business <br /> Review
              </h2>
            </Sentence>
          </div>
        </InfoCard>
        {/* <ParenthesisTwo src={Parentesis2} alt="" /> */}
        <div>
          <Image src={Image2} alt="" />
        </div>
      </Content>
    </ScrollAnimation>
  );
};
