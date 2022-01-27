import React from "react";
import styled from "styled-components";
import Image3 from "../assets/images/image33.png";
import Icon1 from "../assets/images/icon1.png";
import Icon2 from "../assets/images/icono2.png";
import Icon3 from "../assets/images/icono3.png";
import Icon4 from "../assets/images/icono4.png";

const Wrapper = styled.div`
  padding: 50px 100px;
  @media screen and (max-width: 1024px) {
    padding: 40px;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  align-items: center;
  justify-items: center;
  & ul {
    padding: 0;
    list-style: none;
    & li {
      margin-bottom: 50px;
      color: #ecbe35;
      font-family: KanitRegular;
      font-size: 23px;
      line-height: 0;
      & span {
        font-family: KanitSemiBold;
      }
    }
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: 100%;
    justify-items: left;
    & ul {
      & li {
        line-height: 1;
      }
    }
  }
`;

const Title = styled.h1`
  margin-bottom: 0;
  text-align: left;
  font-family: KanitRegular;
  color: #ecbe35;
  font-size: 43px;
  @media screen and (max-width: 1024px) {
    font-size: 29px;
    margin-bottom: 20px;
  }
  & span {
    font-family: KanitSemiBold;
  }
`;

const ImagePhone = styled.img`
  width: 500px;
  @media screen and (max-width: 1024px) {
    width: 300px;
  }
`;

const Icon = styled.img`
  width: 130px;
  vertical-align: middle;
  @media screen and (max-width: 1024px) {
    display: block;
  }
`;

export const HowToDo = () => {
  return (
    <Wrapper>
      <Title>
        A un <span>clic</span> de tu salario
      </Title>
      <Content>
        <div>
          <ul>
            <li>
              1. Verifica el{" "}
              <span>
                saldo <br /> disponible
              </span>{" "}
              en tu <span>cuenta</span>
              <Icon src={Icon1} style={{ width: "70px" }} alt="" />
            </li>
            <li>
              2. Elige el <span>monto</span> <br /> que deseas{" "}
              <span>retirar</span>
              <Icon src={Icon2} alt="" />
            </li>
          </ul>
        </div>
        <div>
          <ImagePhone src={Image3} alt="" />
        </div>
        <div>
          <ul>
            <li>
              3. Oprime el botón
              <Icon src={Icon3} alt="" />
            </li>
            <li>
              4. Disfruta tu <span>sueldo</span>
              <Icon src={Icon4} alt="" />
            </li>
          </ul>
        </div>
      </Content>
    </Wrapper>
  );
};
