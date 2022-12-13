import { css } from "@emotion/css";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FooterItem } from "./FooterItem";
const footerContainer = css`
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  min-height: 200px;
  background-color: #000;
  flex-direction: row;
  display: flex;
  place-content: space-evenly;
  @media (max-width: 615px) {
    flex-direction: column;
  }
  @media (min-width: 616px) {
    flex-direction: row;
  }
`;
const sectionContainer = css`
  max-height: 100%;
  flex-grow: 1;
  text-align-last: center;
`;

const textStyle = css`
  color: #fff;
  font-family: initial;
`;
const innerSectionContainer = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const iconContainer = css`
  text-align-last: right;
  padding-right: 30px;
  align-self: center;
`;

const infoStyle = css`
  text-align-last: left;
`;

const iconStyle = css`
  color: #fff;
`;

const Footer = () => {
  return (
    <div className={footerContainer}>
      <div className={sectionContainer}>
        <div>
          <h1 className={textStyle}>Lokalizacja</h1>
        </div>
        <div className={innerSectionContainer}>
          <div className={iconContainer}>
            <IoLocationOutline className={iconStyle} size="30px" />
          </div>
          <div className={infoStyle}>
            <p className={textStyle}>
              Sucharzewo 1B <br />
              63-112 Sucharzewo
            </p>
          </div>
        </div>
      </div>
      <div className={sectionContainer}>
        <h1 className={textStyle}>Kontakt</h1>

        <FooterItem
          Icon={AiOutlinePhone}
          text="+48 606924391"
          clickAction={() => window.open("tel:+48 606924391")}
        />
        <FooterItem
          Icon={AiOutlinePhone}
          text="+48 664417855"
          clickAction={() => window.open("tel:+48 664417855")}
        />
        <FooterItem
          Icon={AiOutlinePhone}
          text="+48 536123411"
          clickAction={() => window.open("tel:+48 536123411")}
        />
      </div>
      <div className={sectionContainer}>
        <h1 className={textStyle}>E-mail</h1>
        <FooterItem
          Icon={AiOutlineMail}
          text="biuro@szrejder.pl"
          clickAction={() => {
            window.location.href = "mailto:biuro@szrejder.pl";
          }}
        />
      </div>
    </div>
  );
};

export default Footer;
