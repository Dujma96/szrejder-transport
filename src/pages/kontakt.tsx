/* eslint-disable jsx-a11y/iframe-has-title */
import { css } from "@emotion/css";
import React from "react";
import { KontaktItem } from "../components/KontaktItem";
import { PageContainer } from "../components/PageContainer";

const containerStyle = css`
  display: flex;
  align-content: space-evenly;
  font-family: initial;
  @media (min-width: 1057px) {
    padding: 60px;
  }
  @media (max-width: 1056px) {
    flex-direction: column-reverse;
  }
`;
const mapCointainerStyle = css`
  text-align-last: center;
  @media (max-width: 1056px) {
    width: 100%;
  }
  @media (min-width: 1057px) {
    padding: 30px;
    width: 50%;
  }
`;
const textContainerStyle = css`
  @media (max-width: 1056px) {
    width: 100%;
    text-align: center;
  }
  @media (min-width: 1057px) {
    padding: 30px;
    width: 50%;
  }
`;
const addressStyle = css`
  font-size: 1.3rem;
`;

const mapStyle = css`
  @media (max-width: 590px) {
    width: 90%;
  }
`;

const kontakt = () => {
  return (
    <PageContainer text="Kontakt">
      <div className={containerStyle}>
        <div className={mapCointainerStyle}>
          <iframe
            className={mapStyle}
            height={500}
            width={500}
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Sucharzewo%201B%2063-112%20Sucharzewo&t=&z=11&ie=UTF8&iwloc=&output=embed"
          />
        </div>
        <div className={textContainerStyle}>
          <h1>Baza transportowa</h1>
          <p className={addressStyle}>Sucharzewo 1B 63-112 Sucharzewo</p>

          <KontaktItem
            label="Phone"
            value="+48606924391, +48664417855, +48536123411"
          />
          <KontaktItem label="Email" value="biuro@szrejder.pl" />
          <KontaktItem label="NIP" value="7773380511" />
          <KontaktItem label="REGON" value="520280184" />
        </div>
      </div>
    </PageContainer>
  );
};

export default kontakt;
