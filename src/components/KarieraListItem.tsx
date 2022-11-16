import { css } from "@emotion/css";
import React from "react";
import { MdOutlineCheckCircleOutline } from "react-icons/md";

interface IKarieraListItem {
  text: string;
}

const containerStyle = css`
  display: flex;
  align-items: center;
`;

const textStyle = css`
  margin-left: 10px;
  font-family: initial;
  font-size: 1.3rem;
`;
const iconStyle = css`
  @media (max-width: 935px) {
    width: 15px;
    height: 15px;
  }
  @media (min-width: 936px) {
    width: 30px;
    height: 30px;
  }
  @media (max-width: 537px) {
    width: 3px;
    height: 3px;
  }
`;

export const KarieraListItem: React.FC<IKarieraListItem> = ({ text }) => {
  return (
    <div className={containerStyle}>
      <MdOutlineCheckCircleOutline color="#235A91" className={iconStyle} />
      <span className={textStyle}>{text}</span>
    </div>
  );
};
