import { css, cx } from "@emotion/css";
import React, { useState } from "react";

const dropbtn = css`
  color: #fff;
  min-width: 130px;
  justify-content: center;
  align-self: center;
  text-align: center;

  :hover {
    background-color: #2584dc;
    color: #000;
    cursor: pointer;
  }
  padding: 10px;
`;

const dropdown = css`
  position: relative;
  display: inline-block;
  place-self: center;
`;

const dorpdownHovered = css`
  display: block;
`;

const dropdownContent = css`
  position: absolute;
  background-color: #2584dc;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: none;
`;

const hoveredButton = css`
  background-color: #2584dc;
  color: #000;
`;

const dropdownLink = css`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: #1d37a2;
  }
`;
interface IDropdownButton {
  buttonText: string;
  links: ISubcategory[];
}

interface ISubcategory {
  text: string;
  destination: string;
}

const NavigationDropdownButton = (props: IDropdownButton) => {
  const { buttonText, links } = props;
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className={dropdown} onMouseLeave={() => setIsHovered(false)}>
      <div
        className={cx([dropbtn, isHovered && hoveredButton])}
        onMouseEnter={() => setIsHovered(true)}
      >
        {buttonText}
        {isHovered ? (
          <img
            src={require("../pictures/arrow_down.png")}
            alt=""
            style={{
              width: "20px",
              marginTop: "10px",
              color: "#fff",
              position: "absolute",
              top: "0px",
            }}
          />
        ) : (
          <img
            src={require("../pictures/arrow-down-white.png")}
            alt=""
            style={{
              width: "20px",
              marginTop: "10px",
              color: "#fff",
              position: "absolute",
              top: "0px",
            }}
          />
        )}
      </div>
      <div className={cx([dropdownContent, isHovered && dorpdownHovered])}>
        {links.map((subcategory) => {
          return (
            <a href={subcategory.destination} className={dropdownLink}>
              {subcategory.text}
            </a>
          );
        })}

        {/* <a href="link23" className={dropdownLink}>
          Link 2
        </a>
        <a href="link4" className={dropdownLink}>
          Link 3
        </a> */}
      </div>
    </div>
  );
};

export default NavigationDropdownButton;
