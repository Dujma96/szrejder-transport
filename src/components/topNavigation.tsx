import { css } from "@emotion/css";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationButton from "./NavigationButton";
import NavigationDropdownButton from "./NavigationDropdownButton";
import { Navbar } from "react-responsive-navbar-overlay";

const navigationLinkContainer = css`
  float: right;
  height: 100%;
  justify-content: center;
  display: inline-flex;
  padding-right: 20px;
  @media (max-width: 960px) {
    flex-direction: column;
    height: "fit-content";
    background-color: "#000";
  }
`;

const smallScreenStyle = css`
  @media (max-width: 960px) {
    display: none;
  }
`;

const bigScreenStyle = css`
  @media (min-width: 961px) {
    display: none;
  }
`;

export const TopNavigation = () => {
  let navigation = useNavigate();

  const [y, setY] = useState(window.scrollY);

  const handleNavigation = useCallback((e: any) => {
    const window = e.currentTarget;
    setY(window.scrollY);
  }, []);

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <div>
      <div className={bigScreenStyle}>
        <Navbar
          brand="Szrejder Transport"
          links={[
            {
              text: "Home",
              link: "/",
            },
            {
              text: "ONas",
              link: "/o-nas",
            },
            // {
            //   text: "Uslugi",
            //   link: "/uslugi",
            // },
            {
              text: "Kariera",
              link: "/kariera",
            },
            {
              text: "Kontakt",
              link: "/kontakt",
            },
          ]}
        />
      </div>
      <div
        className={smallScreenStyle}
        style={{
          width: "100%",
          height:
            y >= 100
              ? "100px"
              : y > 50 && y < 100
              ? `${150 - y + 50}px`
              : "150px",
          backgroundColor: y < 50 ? "transparent" : "#111112",
          opacity: y > 50 && y < 100 ? `${50 + y - 50}%` : "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          position: "fixed",
          zIndex: 20,
        }}
      >
        <img
          src={require("../pictures/logo.png")}
          alt="logo"
          className={smallScreenStyle}
          style={
            y >= 100
              ? {
                  width: "80px",
                  height: "80px",
                  margin: "10px",
                  cursor: "pointer",
                }
              : y > 50 && y < 100
              ? {
                  width: `${130 - y + 50}px`,
                  height: `${130 - y + 50}px`,
                  margin: "10px",
                  cursor: "pointer",
                }
              : {
                  width: "130px",
                  height: "130px",
                  margin: "10px",
                  cursor: "pointer",
                }
          }
          onClick={() => navigation("/")}
        />

        <div className={navigationLinkContainer}>
          <NavigationButton text="O Nas" action={() => navigation("/o-nas")} />

          <NavigationDropdownButton
            buttonText="Usługi"
            links={[
              { destination: "", text: "Nowoczesna flota" },
              {
                destination: "",
                text: "Transport ładunków niebezpiecznych ADR",
              },
              { destination: "", text: "Transport ekspresowy towarów" },
              { destination: "", text: "Air Cargo Transport" },
              { destination: "", text: "Transport ładunków FTL i LTL" },
              {
                destination: "",
                text: "Śledzenie i kontrola przewożonych ładunków",
              },
              {
                destination: "",
                text: "Doradztwo wykwalifikowanych pracowników biurowych",
              },
            ]}
          />
          {/* <NavigationButton text="Usługi" action={() => navigation("/uslugi")} /> */}
          <NavigationButton text="Flota" action={() => navigation("/flota")} />
          <NavigationButton
            text="Kariera"
            action={() => navigation("/kariera")}
          />
          <NavigationButton
            text="Kontakt"
            action={() => navigation("/kontakt")}
          />
        </div>
      </div>
    </div>
  );
};
