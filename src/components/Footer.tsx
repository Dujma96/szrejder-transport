import { css } from "@emotion/css";
import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { FooterItem } from "./FooterItem";
const footerContainer = css`
  width: 100%;
  min-height: 200px;
  background-color: #000;
  flex-direction: row;
  display: flex;
  place-content: space-evenly;
`;
const sectionContainer = css`
  max-height: 100%;
  flex-grow: 1;
  text-align-last: center;
`;

const textStyle = css`
  color: #fff;
`;
const innerSectionContainer = css`
  display: flex;
  flex-direction: row;
`;

const iconContainer = css`
  flex-basis: 40%;
  text-align-last: right;
  padding-right: 30px;
  align-self: center;
`;

const infoStyle = css`
  flex-basis: 60%;
  text-align-last: left;
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
            <IoLocationOutline style={{ color: "#fff" }} size="30px" />
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

        <FooterItem Icon={AiOutlinePhone} text="+48 606924391" />
        <FooterItem Icon={AiOutlinePhone} text="+48 606924391" />
        <FooterItem Icon={AiOutlinePhone} text="+48 606924391" />
      </div>
      <div className={sectionContainer}>
        <h1 className={textStyle}>E-mail</h1>
        <FooterItem Icon={AiOutlineMail} text="biuro@szrejder.pl" />
      </div>
    </div>
  );
};

export default Footer;