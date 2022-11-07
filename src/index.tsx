import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { TopNavigation } from "./components/topNavigation";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TopNavigation />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
