import { css } from "@emotion/css";
import React from "react";
import { AiOutlineSafety } from "react-icons/ai";
import { BsTruck } from "react-icons/bs";
import { TbGps } from "react-icons/tb";
import { FlotaCard } from "../components/FlotaCard";
import { PageContainer } from "../components/PageContainer";

const flotaContainerStyle = css`
  background-color: #e7e7e7;
`;
const headerAndTextContainerStyle = css`
  font-family: initial;
  padding: 20px;
  padding-bottom: 0px;
  background-color: #142d68;
  color: #fff;
`;
const textContainerStyle = css`
  display: flex;
  place-content: space-evenly;
  font-size: 1.3rem;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
const textHalfPageStyle = css`
  @media (max-width: 900px) {
    width: 100%;
  }
  @media (min-width: 901px) {
    flex-basis: 50%;
  }
`;
const imageContainerStyle = css`
  width: 100%;
  position: relative;
  height: 50vw;
`;
const imageTopContainerStyle = css`
  height: 20vw;
  background-color: #142d68;
  width: 100%;
  @media (max-width: 900px) {
    display: none;
  }
`;

const imageBottomsContainerStyle = css`
  height: 30vw;
  background-color: #e7e7e7;
  width: 100%;
  @media (max-width: 900px) {
    display: none;
  }
`;

const imageStyle = css`
  @media (min-width: 901px) {
    height: 40vw;
    position: absolute;
    top: 0%;
    left: 5%;
  }
  @media (max-width: 900px) {
    width: 100%;
    height: 100%;
  }
`;

const imageTextContainerStyle = css`
  display: flex;
  width: 22vw;
  height: 12vw;
  background-color: #142d68;
  color: #fff;
  justify-content: center;
  align-self: center;
  text-align: center;
  z-index: 10;
  bottom: 5vw;
  left: 10%;
  position: absolute;
  min-height: fit-content;
  min-width: fit-content;
  @media (max-width: 900px) {
    display: none;
  }
`;

const imageTextStyle = css`
  align-self: center;
  font-family: initial;
`;

const videoStyle = css`
  @media (min-width: 901px) {
    flex-basis: 40%;
    padding-left: 20px;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    width: 90%;
  }
`;

const cardContainerStyle = css`
  display: flex;
  place-content: space-around;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const videoContainerStyle = css`
  display: flex;
  justify-content: center;
  padding: 30px;
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 0px;
  }
`;

const videoHeaderStyle = css`
  font-family: initial;
`;

const videoTextStyle = css`
  font-family: initial;
  font-size: 1.3rem;
`;

const flota = () => {
  return (
    <PageContainer text="flota">
      <div className={flotaContainerStyle}>
        <div className={headerAndTextContainerStyle}>
          <h1>Nasza flota</h1>
          <div className={textContainerStyle}>
            <div className={textHalfPageStyle}>
              <p>
                Dysponujemy flotą 25 ciągników siodłowych, 35 naczep oraz dwóch
                busów. Obecnie dostawami pojazdów ciężarowych są firmy takie
                jak: Mercedes, IVECO oraz DAF.
              </p>
            </div>
            <div className={textHalfPageStyle}>
              <p>
                Usługi transportowe realizujemy ze względu na przewożony rodzaj
                ładunków z wykorzystaniem naczep specjalistycznych typu: Roller
                Bed Mega firana oraz Roller Bed sztywna zabudowa, oprócz tego
                posiadamy naczepy typu doppelstock oraz zwykłe sztywne zabudowy.
                Ładowność naczep to 22t oraz 33 palety.
              </p>
            </div>
          </div>
        </div>
        <div className={imageContainerStyle}>
          <div className={imageTopContainerStyle}></div>
          <div className={imageBottomsContainerStyle}></div>

          <img
            src={require("../pictures/flota.png")}
            alt=""
            className={imageStyle}
          />
          <div className={imageTextContainerStyle}>
            <h1 className={imageTextStyle}>
              Nasza nowoczesna <br />
              flota
            </h1>
          </div>
        </div>
        <div className={cardContainerStyle}>
          <FlotaCard
            Icon={TbGps}
            text="Zestawy transportowe wyposażone są w systemy oparte na komunikacji GPS, które pozwalają na monitorowanie zarówno pojazdu, jak i ładunku oraz sprawdzanie i analizę ich czasu pracy kierowców. Na prośbę klientów, udostępniamy tranzyt danej trasy."
          />
          <FlotaCard
            Icon={BsTruck}
            text="Nasza flota spełnia europejskie normy bezpieczeństwa i ochrony środowiska EURO 5, EEV i EURO 6. Inwestujemy co roku w wymianę najstarszych ciągników siodłowych na nowe oraz dbamy o regularne przeglądy techniczne."
          />
          <FlotaCard
            Icon={AiOutlineSafety}
            text="Na bieżąco śledzimy najnowocześniejsze rozwiązania antykradzieżowe i wybrane wprowadzamy w naszym taborze, aby zwiększyć bezpieczeństwo przewożonych ładunków."
          />
        </div>
        <div className={videoContainerStyle}>
          <div style={{ flexBasis: "40%" }}>
            <h1 className={videoHeaderStyle}>Naczepa typu Roller Bed</h1>
            <p className={videoTextStyle}>
              Naczepa specjalistyczna, która posiada zainstalowany system
              „Roller Bed” w podłodze przyczepy. Jej przeznaczeniem jest głównie
              przewóz poczty lotniczej. Ten system zapewnia skrócenie czasu
              załadunku i rozładunku oraz wymaga znacznie mniej obsługi ręcznej.
            </p>
          </div>
          <div className={videoStyle}>
            <video controls muted className={videoStyle}>
              <source
                src={require("../videos/RollerBed.mp4")}
                type="video/mp4"
              />
              Sorry, your browser doesn't support videos.
            </video>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default flota;
