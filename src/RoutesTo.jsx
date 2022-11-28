import { Routes, Route } from "react-router-dom";
import SeePDI from "./pages/SeePDI.jsx";
import Login from "./pages/Login/Login.jsx";

export default function RoutesTo() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/pdi" element={<SeePDI />} />
    </Routes>
  );
}
