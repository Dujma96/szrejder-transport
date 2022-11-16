import { css } from "@emotion/css";
import React from "react";

interface INavigationButton {
  text: string;
  action?: () => void;
  options?: string[];
  hasMultipleOptions?: boolean;
}

const buttonStyle = css`
  min-width: 130px;
  justify-content: center;
  align-self: center;
  text-align: center;
  color: #fff;
  margin: 5px;
  :hover {
    background-color: #2584dc;
    cursor: pointer;
  }
  padding: 10px;
  font-family: initial;
`;

const NavigationButton = (props: INavigationButton) => {
  return (
    <div className={buttonStyle} onClick={props.action}>
      {props.text}
    </div>
  );
};

export default NavigationButton;
