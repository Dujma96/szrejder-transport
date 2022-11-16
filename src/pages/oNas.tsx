import { css } from "@emotion/css";
import React from "react";
import { PageContainer } from "../components/PageContainer";

const countryNameStyle = css`
  color: #235a91;
  font-weight: bold;
`;

const containerStyle = css`
  display: flex;
  @media (max-width: 900px) {
    flex-direction: column;
  }
  @media (min-width: 901px) {
    padding: 40px;
  }
`;

const textStyle = css`
  padding: 40px;
  font-size: 1.3rem;
  font-family: initial;
`;
const imageStyle = css`
  @media (max-width: 900px) {
    padding: 40px;
  }
  @media (min-width: 901px) {
    width: 30vw;
  }
`;

const oNas = () => {
  return (
    <PageContainer text="O nas">
      <div className={containerStyle}>
        <p className={textStyle}>
          Jesteśmy rodzinną firmą i działamy na rynku transportowym od 10 marca
          1998 roku. Pierwsze kroki w transporcie stawialiśmy w przewozach
          krajowych, ale z biegiem czasu postawiliśmy na dynamiczny rozwój i
          rozpoczęliśmy działalność na arenie międzynarodowej. <br /> <br />
          Obecnie w naszej działalności dominuje tranzyt poczty lotniczej na
          terenie
          <span className={countryNameStyle}>Polski</span> ,
          <span className={countryNameStyle}>Niemiec</span> ,
          <span className={countryNameStyle}>Szwecji</span> ,
          <span className={countryNameStyle}>Danii</span> ,
          <span className={countryNameStyle}>Holandii</span> ,
          <span className={countryNameStyle}>Belgii</span> ,
          <span className={countryNameStyle}>Litwy</span> ,
          <span className={countryNameStyle}>Estonii </span>
          oraz <span className={countryNameStyle}>Czech</span>. Współpracujemy
          też z wieloma innymi organizacjami na terenie tych państw. Wyróżniamy
          się nowoczesną flotą oraz wysoko wykwalifikowaną kadrą pracowników,
          która zawsze służy pomocą 24/7.
        </p>
        <img
          src={require("../pictures/ONasMapa.png")}
          alt=""
          className={imageStyle}
        />
      </div>
      ;
    </PageContainer>
  );
};

export default oNas;
