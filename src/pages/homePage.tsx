import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { IoAirplaneOutline, IoPeopleOutline } from "react-icons/io5";
import { RiAlertLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { BsTruck, BsTruckFlatbed } from "react-icons/bs";
import { OfferCard } from "../components/OfferCard";
import { TbGps } from "react-icons/tb";
import { css } from "@emotion/css";

const slideContainer = css`
  position: absolute;
  /* z-index: 100; */
  color: #fff;
  left: 10%;
  top: 70%;
`;

const slideHeadline = css`
  color: #fff;
  @media (min-width: 616px) {
    font-size: 3rem;
  }
  text-transform: uppercase;
  margin-bottom: 0;
  font-family: initial;
  @media (max-width: 615px) {
    font-size: 1rem;
  }
`;

const imageBackgroundStyle = css`
  width: 100%;
  opacity: 40%;
  position: relative;
`;

const szrejderTextStyle = css`
  margin-top: 0;

  color: #2584dc;
  font-weight: bold;
  font-family: initial;
  @media (min-width: 616px) {
    font-size: 1.5rem;
  }
  @media (max-width: 615px) {
    font-size: 1rem;
  }
`;

const contentContainer = css`
  text-align: center;
  margin-left: 10%;
  margin-right: 10%;
`;
const headerStyle = css`
  text-transform: uppercase;
  border-bottom: 2px solid;
  padding-bottom: 10px;
  font-family: initial;
`;

const slideStyle = css`
  z-index: 0;
`;

const cardContainerStyle = css`
  display: flex;
  @media (min-width: 616px) {
    flex-wrap: wrap;
  }
  justify-content: center;
  @media (max-width: 615px) {
    flex-flow: column;
  }
`;
const homePageContainer = css`
  background-color: "#fff";
`;

const HomePage = () => {
  return (
    <div className={homePageContainer}>
      <Fade canSwipe autoplay={false} cssClass={slideStyle}>
        <div
          className="each-fade"
          key={0}
          style={{
            backgroundColor: "#000",
            zIndex: 0,
          }}
        >
          <div className={slideContainer}>
            <h1 className={slideHeadline}>
              Bezpieczne dostawy <br /> na czas
            </h1>
            <p className={szrejderTextStyle}>Transport Szrejder</p>
          </div>
          <img
            src={require("../pictures/slide12.jpg")}
            alt="Slide 1"
            className={imageBackgroundStyle}
          />
        </div>

        <div
          className="each-fade"
          key={1}
          style={{ backgroundColor: "#000", zIndex: 0 }}
        >
          <div className={slideContainer}>
            <h1 className={slideHeadline}>Air Cargo transport</h1>
            <p className={szrejderTextStyle}>Transport Szrejder</p>
          </div>
          <img
            src={require("../pictures/slide23.jpg")}
            alt="Slide 2 "
            className={imageBackgroundStyle}
          />
        </div>
      </Fade>
      <div className={contentContainer}>
        <h1 className={headerStyle}>Co możemy zaoferować?</h1>
        <div className={cardContainerStyle}>
          <OfferCard Icon={BsTruckFlatbed} text="Nowoczesna flota" />
          <OfferCard
            Icon={RiAlertLine}
            text="Transport ładunków niebezpiecznych ADR"
          />
          <OfferCard
            Icon={TbTruckDelivery}
            text="Transport ekspresowy towarów"
          />
          <OfferCard Icon={IoAirplaneOutline} text="Air Cargo Transport" />
          <OfferCard Icon={BsTruck} text="Transport ładunków FTL i LTL" />
          <OfferCard
            Icon={TbGps}
            text="Śledzenie i kontrola przewożonych ładunków"
          />
          <OfferCard
            Icon={IoPeopleOutline}
            text="Doradztwo wykwalifikowanych pracowników biurowych"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
