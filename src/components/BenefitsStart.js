import React from "react";
import styled from "styled-components";
import { fadeInLeftAnimation } from "../utils/animations";
import ScrollAnimation from "react-animate-on-scroll";
import Image3 from "../assets/images/image3.png";
import Icono11 from "../assets/images/icono11.png";
import Icono22 from "../assets/images/icono22.png";
import Icono33 from "../assets/images/icono33.png";

const Wrapper = styled.div`
  padding: 50px 150px 100px;
  align-items: center;
  background-color: #f8d05d;
  & h1 {
    position: relative;
    z-index: 1;
    color: #fff;
    font-size: 55px;
    padding-left: 2em;
    animation: 0.5s ease-out ${fadeInLeftAnimation};
    font-family: KanitRegular;
    line-height: 50px;
    font-weight: 100;
    & span {
      font-size: 45px;
      font-family: KanitSemiBold;
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

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  margin-top: 80px;
  align-content: center;
  & div {
    padding: 0 20px;
    & h2 {
      color: #fff;
      font-family: KanitRegular;
      font-weight: 100;
      & span {
        font-family: KanitSemiBold;
      }
    }
    &:not(:last-child) {
      border-right: 3px solid #fff;
    }
  }
  @media screen and (max-width: 1024px) {
    grid-template-columns: 100%;
    & div {
      padding: 20px 0;
      border-right: 0 !important;
      &:not(:last-child) {
        border-bottom: 3px solid #fff;
      }
    }
  }
`;

const Icono = styled.img`
  width: 130px;
  vertical-align: middle;
`;

const ContentTable = styled.div`
  margin-top: 100px;
  & div {
    overflow-x: auto;
  }
  & h2 {
    text-align: center;
    font-size: 33px;
    color: #fff;
    font-family: "KanitRegular";
    font-weight: 100;
  }
`;

export const BenefitsStart = () => {
  return (
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
      <Wrapper>
        <div>
          <h1>
            Sin <span>trucos,</span> pero con muchos
            <br />
            beneficios.
          </h1>
        </div>
        <Content>
          <div>
            <div>
              <h2>
                Adiós al <span>estrés financiero</span>
              </h2>
              <Icono src={Icono11} alt="" />
            </div>
          </div>
          <div>
            <div>
              <Icono src={Image3} alt="" />
              <h2>
                Dispón de tu salario <span>cómo y cúando quieras</span>
              </h2>
            </div>
          </div>
          <div>
            <div>
              <h2>
                Genera historial <span>crediticio</span>
              </h2>
              <Icono src={Icono22} alt="" />
            </div>
          </div>
          <div>
            <div>
              <Icono src={Icono33} alt="" />
              <h2>
                Obtén liquidez inmediata disponible <span>24/7</span>
              </h2>
            </div>
          </div>
        </Content>
        <ContentTable>
          <h2>Tabla de costos y comisiones:</h2>
          <div>
            <table class="tg" align="center">
              <thead>
                <tr>
                  <th class="tg-0lax">Producto</th>
                  <th class="tg-0lax">Frecuencia de pago</th>
                  <th class="tg-0lax">No. de Períodos</th>
                  <th class="tg-0lax">Taza anual fija</th>
                  <th class="tg-0lax">Cat</th>
                  <th class="tg-0lax">Comisiones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="tg-0lax" rowspan="2">
                    Salario bajo demanda
                  </td>
                  <td class="tg-0lax">quincenal</td>
                  <td class="tg-0lax">1</td>
                  <td class="tg-0lax">0%</td>
                  <td class="tg-0lax">0%</td>
                  <td class="tg-0lax">$59.00 por evento</td>
                </tr>
                <tr>
                  <td class="tg-0lax">quincenal</td>
                  <td class="tg-0lax">1</td>
                  <td class="tg-0lax">0%</td>
                  <td class="tg-0lax">0%</td>
                  <td class="tg-0lax">$59.00 por evento</td>
                </tr>
                <tr>
                  <td class="tg-0lax">Préstamo</td>
                  <td
                    class="tg-0lax"
                    rowspan="2"
                    colspan="5"
                    style={{ fontSize: "45px" }}
                  >
                    ¡Espéralo!
                  </td>
                </tr>
                <tr>
                  <td class="tg-0lax">Tarjeta de Crédito</td>
                </tr>
              </tbody>
            </table>
          </div>
        </ContentTable>
      </Wrapper>
    </ScrollAnimation>
  );
};
