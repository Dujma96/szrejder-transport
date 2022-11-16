import { css } from "@emotion/css";
import React from "react";
import { IconType } from "react-icons";

interface IFlotaCard {
  text: string;
  Icon: IconType;
}
const cardStyle = css`
  background-color: #fff;
  justify-content: center;
  border: 1px solid;
  border-radius: 10px;
  margin: 3%;
  text-align: center;
  padding: 20px;
  font-family: initial;
  max-width: 400px;
  font-size: 1.3rem;
  @media (max-width: 900px) {
    width: 80%;
  }
  @media (min-width: 901px) {
    width: 30%;
  }
`;

const iconStyle = css`
  width: 100px;
  height: 100px;
`;

export const FlotaCard: React.FC<IFlotaCard> = ({ Icon, text }) => {
  return (
    <div className={cardStyle}>
      <Icon className={iconStyle} />
      <p>{text}</p>
    </div>
  );
};
