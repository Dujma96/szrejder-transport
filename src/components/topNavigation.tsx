import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavigationButton from "./NavigationButton";
import NavigationDropdownButton from "./NavigationDropdownButton";

export const TopNavigation = () => {
  let navigation = useNavigate();
  console.log(window.location.pathname);

  const [y, setY] = useState(window.scrollY);

  const handleNavigation = useCallback(
    (e: any) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        console.log("scrolling up");
      } else if (y < window.scrollY) {
        console.log("scrolling down");
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <div
      style={{
        width: "100%",
        height:
          y >= 100 && window.location.pathname === "/"
            ? "100px"
            : y > 50 && y < 100 && window.location.pathname === "/"
            ? `${150 - y + 50}px`
            : window.location.pathname === "/"
            ? "150px"
            : "100px",
        backgroundColor:
          y < 50 && window.location.pathname === "/"
            ? "transparent"
            : "#111112",
        opacity:
          y > 50 && y < 100 && window.location.pathname === "/"
            ? `${50 + y - 50}%`
            : "100%",

        flexDirection: "row",
        justifyContent: "space-between",
        position: "fixed",
        zIndex: 20,
      }}
    >
      <img
        src={require("../pictures/logo.png")}
        alt=""
        style={
          y >= 100 && window.location.pathname === "/"
            ? { width: "80px", height: "80px", margin: "10px" }
            : y > 50 && y < 100 && window.location.pathname === "/"
            ? {
                width: `${130 - y + 50}px`,
                height: `${130 - y + 50}px`,
                margin: "10px",
              }
            : window.location.pathname === "/"
            ? { width: "130px", height: "130px", margin: "10px" }
            : { width: "80px", height: "80px", margin: "10px" }
        }
        onClick={() => navigation("/")}
      />

      <div
        style={{
          float: "right",
          height: "100%",
          justifyContent: "center",
          display: "inline-flex",
        }}
      >
        <NavigationDropdownButton
          buttonText="O Nas"
          links={[{ destination: "Ada", text: "Szrejder" }]}
        />
        <NavigationButton text="O Nas" action={() => navigation("/o-nas")} />
        <NavigationButton text="Uslugi" action={() => navigation("/uslugi")} />
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
  );
};
