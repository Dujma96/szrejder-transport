import { css } from "@emotion/css";
import React from "react";

const backgroundStyle = css`
  background-color: #000;
  transform: skewX(-20deg);
  opacity: 80%;
`;

const textStyle = css`
  font-size: 3rem;
  width: fit-content;
  padding: 10px;
`;

interface ISlideshowText {
  text: string;
}

export const SlideshowText: React.FC<ISlideshowText> = ({ text }) => {
  return (
    <div className={backgroundStyle}>
      <h1 className={textStyle}>{text}</h1>
    </div>
  );
};
