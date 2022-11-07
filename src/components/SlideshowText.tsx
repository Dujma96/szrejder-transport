import { css } from "@emotion/css";
import React from "react";

const backgroundStyle = css`
  background-color: #000;
  transform: skewX(-20deg);
  opacity: 80%;
`;
interface ISlideshowText {
  text: string;
}

export const SlideshowText: React.FC<ISlideshowText> = ({ text }) => {
  return (
    <div className={backgroundStyle}>
      <h1
        style={{
          fontSize: "3rem",
          width: "fit-content",
          padding: 10,
        }}
      >
        {text}
      </h1>
    </div>
  );
};
