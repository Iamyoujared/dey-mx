import React from "react";
import styled from "styled-components";
import BolsaLogo from "../assets/images/logo-bolsa1.svg";
import BuroLogo from "../assets/images/cdc.png";
import CondusefLogo from "../assets/images/logo-condusef.png";
import PrivatePdf from "../assets/images/privacidad.pdf";
import HubspotForm from "react-hubspot-form";

import Youtube from "../assets/images/youtube.svg";
import LinkedIn from "../assets/images/linkedin.svg";
import Facebook from "../assets/images/facebook.svg";
import Instagram from "../assets/images/instagram.svg";
import Twitter from "../assets/images/twitter.svg";

const Content = styled.div`
  text-align: center;
  & h1 {
    font-family: KanitRegular;
  }
  & h1 span {
    font-family: KanitMedium;
    color: #f8d05d;
  }
  @media screen and (max-width: 1024px) {
    height: auto;
    grid-template-columns: 100%;
    padding: 40px 0;
  }
`;

const FooterBottom = styled.div`
  padding: 20px 200px;
  background-color: #eeeeee;
  text-align: center;
  & p {
    font-family: KanitMedium;
  }
  & img {
    &:not(:last-child) {
      margin-right: 25px;
    }
    height: 60px;
    object-fit: cover;
  }
  @media screen and (max-width: 720px) {
    padding: 40px;
    & img {
      &:not(:last-child) {
        margin-right: 10px;
      }
      height: 40px;
    }
  }
`;

const FormHP = styled.div`
  margin: 70px 250px 30px;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 6px 24px rgb(0 0 0 / 10%);
  @media screen and (max-width: 768px) {
    margin: 0 20px 30px;
  }
`;

const LinkPrivate = styled.a`
  margin: 20px auto;
  text-align: center;
  display: block;
  color: #6fafd6;
  font-family: KanitRegular;
`;

const ListSocialMedia = styled.ul`
  padding: 0;
  list-style: none;
  text-align: center;
  & li {
    margin-right: 10px;
    cursor: pointer;
    background: #f7f7f7;
    padding: 10px;
    display: inline-flex;
    border-radius: 50px;
    & img {
      width: 20px;
      height: 20px;
    }
  }
`;

export const Footer = () => {
  return (
    <Content>
      <FormHP id="form">
        <HubspotForm
          portalId="21041249"
          formId="049673d1-2a26-4385-8550-66f8493b7e12"
          onSubmit={() => console.log("Submit!")}
          onReady={(form) => console.log("Form ready!")}
          loading={<div>Loading...</div>}
        />
      </FormHP>
      <LinkPrivate href={PrivatePdf} target="_blank">
        Aviso de privacidad
      </LinkPrivate>
      <ListSocialMedia>
        <li>
          <a
            href="https://www.youtube.com/channel/UCXi-RrdRK4lVsuYR2cQraGQ"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Youtube} alt="Youtube" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/company/dey-mexico"
            target="_blank"
            rel="noreferrer"
          >
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/Dey-101262525723222"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Facebook} alt="Facebook" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/deypago/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Instagram} alt="Instagram" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/DeyPago"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Twitter} alt="Twitter" />
          </a>
        </li>
      </ListSocialMedia>
      <FooterBottom>
        <img src={BolsaLogo} alt="BolsaLogo" />
        <img src={BuroLogo} alt="BuroLogo" />
        <img src={CondusefLogo} alt="CondusefLogo" />
      </FooterBottom>
    </Content>
  );
};
