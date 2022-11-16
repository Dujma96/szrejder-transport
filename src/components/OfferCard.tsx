import { css } from "@emotion/css";
import React from "react";
import { IconType } from "react-icons";
import Tilt from "react-parallax-tilt";

interface IOfferCard {
  text: string;
  Icon: IconType;
}
const cardStyle = css`
  background-color: #000;
  color: #2584dc;
  height: 100%;
  width: 100%;
  justify-content: center;
  border: 1px solid;
  border-radius: 20px;
`;
const CardTiltStyle = css`
  height: 200px;

  max-width: 300px;
  margin: 3%;
  @media (max-width: 699px) {
    width: 80%;
  }
  @media (min-width: 700px) {
    width: 25%;
  }
`;

const iconStyle = css`
  width: 100px;
  height: 100px;
  color: #2584dc;
`;

export const OfferCard: React.FC<IOfferCard> = ({ Icon, text }) => {
  return (
    <Tilt className={CardTiltStyle} glareEnable>
      <div className={cardStyle}>
        <Icon className={iconStyle} />
        <p>{text}</p>
      </div>
    </Tilt>
  );
};
