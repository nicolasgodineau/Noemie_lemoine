import React, { useEffect } from "react";

// Routage
import { Routes, Route, useLocation } from "react-router-dom";

// Componentes & Pages
import Mariage from "./pages/Mariage";
import Home from "./pages/Home";
import About from "./pages/About.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Cv from "./pages/CV.jsx";

export default function App() {
    // Permet le retour en haut de page
    const location = useLocation();
    const isHome = location.pathname === "/";
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mariage" element={<Mariage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/apropos" element={<About />} />
            <Route path="/cv" element={<Cv />} />
        </Routes>
    );
}
