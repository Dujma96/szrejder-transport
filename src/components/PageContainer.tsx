import { css } from "@emotion/css";
import React, { ReactNode } from "react";

const containerStyle = css`
  height: 400px;
  overflow: hidden;
  position: relative;
  background-color: #000;
`;

const backgroundImageStyle = css`
  width: 100%;
  filter: blur(10px);
  height: 400px;
  opacity: 50%;
`;

const textStyle = css`
  position: absolute;
  color: #fff;
  bottom: 30px;
  left: 20px;
  text-transform: uppercase;
  border-bottom: 4px #2584dc solid;
  font-family: initial;
`;

interface IPageContainer {
  text: string;
  children: ReactNode;
}

export const PageContainer: React.FC<IPageContainer> = ({ children, text }) => {
  return (
    <div>
      <div className={containerStyle}>
        <img
          src={require("../pictures/slide1.jpeg")}
          alt="background"
          className={backgroundImageStyle}
        />
        <h1 className={textStyle}>{text}</h1>
      </div>
      {children}
    </div>
  );
};
