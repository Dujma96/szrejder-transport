import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { IoAirplaneOutline } from "react-icons/io5";
import { RiAlertLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { BsTruck, BsTruckFlatbed } from "react-icons/bs";
import { OfferCard } from "../components/OfferCard";
import { css } from "@emotion/css";
const slideContainer = css`
  position: absolute;
  z-index: 100;
  color: #fff;
  left: 10%;
  top: 70%;
`;

const slideHeadline = css`
  color: #cdc8c8;
  font-size: 3rem;
  text-transform: uppercase;
  margin-bottom: 0;
`;

const imageBackgroundStyle = css`
  width: 100%;
  opacity: 40%;
  position: relative;
`;

const szrejderTextStyle = css`
  margin-top: 0;
  font-size: 1.5rem;
  color: #2584dc;
  font-weight: bold;
`;
const HomePage = () => {
  return (
    <div style={{ backgroundColor: "#cdc8c8" }}>
      <Fade autoplay={false}>
        <div
          className="each-fade"
          key={0}
          style={{
            backgroundColor: "#000",
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

        <div className="each-fade" key={1} style={{ backgroundColor: "#000" }}>
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
      <div
        style={{
          textAlign: "center",
          marginLeft: "10%",
          marginRight: "10%",
          backgroundColor: "#cdc8c8",
        }}
      >
        <h1
          style={{
            textTransform: "uppercase",
            borderBottom: "2px solid",
            paddingBottom: "10px",
          }}
        >
          Co możemy zaoferować?
        </h1>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <OfferCard Icon={BsTruckFlatbed} text="Nowocesna flota" />
          <OfferCard
            Icon={RiAlertLine}
            text="Transport ladunkow niebezpiecznych ADR"
          />
          <OfferCard
            Icon={TbTruckDelivery}
            text="Transport expresowy towarow"
          />
          <OfferCard
            Icon={IoAirplaneOutline}
            text="Transport drogowy przesylek lotniczych"
          />
          <OfferCard Icon={BsTruck} text="Transport ladunkow FTL i LTL" />
          <OfferCard Icon={BsTruckFlatbed} text="Nowocesna flota" />
          <OfferCard Icon={BsTruckFlatbed} text="Nowocesna flota" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
