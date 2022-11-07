import { css } from "@emotion/css";
import React from "react";
import { IconType } from "react-icons";

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

interface IFooterItem {
  text: string;
  Icon: IconType;
}

export const FooterItem: React.FC<IFooterItem> = ({ text, Icon }) => {
  return (
    <div className={innerSectionContainer}>
      <div className={iconContainer}>
        <Icon style={{ color: "#fff" }} size="30px" />
      </div>
      <div className={infoStyle}>
        <p className={textStyle}> {text}</p>
      </div>
    </div>
  );
};
