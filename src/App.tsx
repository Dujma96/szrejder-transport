import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homePage";
import ONas from "./pages/oNas";
import Uslugi from "./pages/uslugi";
import Flota from "./pages/flota";
import Kontakt from "./pages/kontakt";
import Kariera from "./pages/kariera";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/o-nas" element={<ONas />} />
      <Route path="/uslugi" element={<Uslugi />} />
      <Route path="/flota" element={<Flota />} />
      <Route path="/kariera" element={<Kariera />} />
      <Route path="/kontakt" element={<Kontakt />} />
    </Routes>
  );
}

export default App;
