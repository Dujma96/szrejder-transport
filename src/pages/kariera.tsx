import { css } from "@emotion/css";
import React from "react";
import { KarieraListItem } from "../components/KarieraListItem";
import { PageContainer } from "../components/PageContainer";

const driversSectionContainer = css`
  display: flex;
  width: 100%;
  place-content: space-between;
  overflow-x: hidden;
  border-bottom: 1px solid #235a91;
  background-color: #e7e7e7;
  @media (max-width: 935px) {
    flex-direction: column;
    height: fit-content;
  }
  @media (min-width: 936px) {
    height: 300px;
  }
`;
const driversContainerStyle = css`
  padding: 20px;
`;
const headerTextStyle = css`
  font-family: initial;
`;
const driversTextStyle = css`
  font-family: initial;
  font-size: 1.3rem;
  font-weight: bold;
`;

const companyLoactionTextStyle = css`
  font-family: initial;
  font-size: 1.3rem;
  color: #235a91;
`;

const imageContainerStyle = css`
  @media (max-width: 935px) {
    width: 100%;
  }
  @media (min-width: 936px) {
    overflow: hidden;
    padding-left: 28px;
    min-width: fit-content;
    margin-right: -28px;
  }
`;
const imageStyle = css`
  @media (max-width: 935px) {
    width: 100%;
  }
  @media (min-width: 936px) {
    width: 400px;
    transform: skewX(-10deg);
  }
`;

const offersContainerStyle = css`
  margin-bottom: 20px;
  padding: 20px;
`;

const kariera = () => {
  return (
    <PageContainer text="kariera">
      <div>
        <div className={driversSectionContainer}>
          <div className={driversContainerStyle}>
            <h1 className={headerTextStyle}>KIEROWCY</h1>
            <p className={driversTextStyle}>
              Zatrudnimy kierowców w transporcie międzynarodowym. Można u nas
              nabyć nowych umiejętności i doświadczenia. Aktualnie poszukujemy
              kierowców na kierunki na pojedyncze i podwójne obsady. Preferowany
              tryb pracy- co drugi weekend wolny.
            </p>
            <p className={companyLoactionTextStyle}>
              Baza transportowa firmy znajduje się w Sucharzewie (województwo
              Wielkopolskie).
            </p>
          </div>
          <div className={imageContainerStyle}>
            <img
              src={require("../pictures/kariera.jpeg")}
              alt=""
              className={imageStyle}
            />
          </div>
        </div>
        <div className={offersContainerStyle}>
          <h1 className={headerTextStyle}>Oferujemy:</h1>
          <KarieraListItem text="atrakcyjne warunki zatrudnienia (umowa o pracę)," />
          <KarieraListItem text="możliwość zawarcia dodatkowego ubezpieczenia grupowego," />
          <KarieraListItem text="pracę na nowoczesnym taborze oraz auta przypisane do kierowców" />
          <KarieraListItem text="szkolenia ADR i SPX," />
          <KarieraListItem text="ycia nowych kompetencji," />

          <h1 className={headerTextStyle}>Wymagania:</h1>
          <KarieraListItem text="uprawnienia do wykonywania zawodu (kat. C+E)," />
          <KarieraListItem text="zaświadczenie o niekaralności," />
          <KarieraListItem text="uczciwość i rzetelność w wykonywaniu obowiązków," />
          <KarieraListItem text="dbałość o powierzony sprzęt." />
        </div>
      </div>
    </PageContainer>
  );
};

export default kariera;
