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
    cursor: pointer;
  }
  padding: 10px;
  font-family: initial;
`;

const dropdown = css`
  position: relative;
  display: inline-block;
  place-self: center;
  color: "#fff";
  font-family: initial;
`;

const dorpdownHovered = css`
  display: block;
`;

const dropdownContent = css`
  width: 400px;
  position: absolute;
  background-color: #2584dc;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: none;
  color: "#fff";
`;

const hoveredButton = css`
  background-color: #2584dc;
`;

const dropdownLink = css`
  padding: 12px 16px;
  text-decoration: none;
  color: #fff;
  display: block;
  &:hover {
    background-color: #338de2;
    color: #fff;
  }
`;
const imageStyle = css`
  width: 20px;
  margin-top: 10px;
  color: #fff;
  position: absolute;
  top: 0px;
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

        <img
          src={require("../pictures/arrow-down-white.png")}
          alt=""
          className={imageStyle}
        />
      </div>
      <div className={cx([dropdownContent, isHovered && dorpdownHovered])}>
        {links.map((subcategory) => {
          return (
            //change span or a when it will be functionall
            // <a href={subcategory.destination} className={dropdownLink}>
            <span className={dropdownLink}>{subcategory.text}</span>

            // </a>
          );
        })}
      </div>
    </div>
  );
};

export default NavigationDropdownButton;
