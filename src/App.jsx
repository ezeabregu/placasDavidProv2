import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./pages/Home";
import FloatingButtons from "./components/FloatingButtons";
import { TickerBanner } from "./components/TickerBanner";

function App() {
  const anuncios = [
    "Presupuesto sin cargo",
    "Asesores técnicos todos los días",
    "Sin romper paredes",
    "Solución definitiva contra la humedad",
    "Fabricación propia — Yeso cerámico de 1° calidad",
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <TickerBanner announcements={anuncios} />
      <FloatingButtons />
    </Router>
  );
}

export default App;
