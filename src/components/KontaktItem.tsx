import { css } from "@emotion/css";
import React from "react";

const labelStyle = css`
  font-weight: bold;
`;

const containerStyle = css`
  font-size: 1.3rem;
  margin-top: 10px;
  margin-bottom: 10px;
`;

interface IKontaktItem {
  label: string;
  value: string;
}

export const KontaktItem: React.FC<IKontaktItem> = ({ label, value }) => {
  return (
    <div className={containerStyle}>
      <span className={labelStyle}>{label}: </span>
      <span>{value}</span>
    </div>
  );
};
