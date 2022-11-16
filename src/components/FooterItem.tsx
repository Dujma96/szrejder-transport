import { css } from "@emotion/css";
import React from "react";
import { IconType } from "react-icons";

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

interface IFooterItem {
  text: string;
  Icon: IconType;
}

export const FooterItem: React.FC<IFooterItem> = ({ text, Icon }) => {
  return (
    <div className={innerSectionContainer}>
      <div className={iconContainer}>
        <Icon className={iconStyle} size="30px" />
      </div>
      <div className={infoStyle}>
        <p className={textStyle}> {text}</p>
      </div>
    </div>
  );
};
