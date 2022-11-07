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
  width: 25%;
  max-width: 300px;
  margin: 3%;
`;

export const OfferCard: React.FC<IOfferCard> = ({ Icon, text }) => {
  return (
    <Tilt className={CardTiltStyle} glareEnable>
      <div className={cardStyle}>
        <Icon style={{ width: "100px", height: "100px", color: "#2584dc" }} />
        <p>{text}</p>
      </div>
    </Tilt>
  );
};
