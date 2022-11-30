import { Routes, Route } from "react-router-dom";
import SeePDI from "../pages/SeePDI.jsx";
import Login from "../pages/Login/Login.jsx";
import ListPDI from "../pages/ListPDI.jsx";

export default function RoutesTo() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/pdi" element={<SeePDI />} />
      <Route path="/list_pdi" element={<ListPDI />} />
    </Routes>
  );
}
