import React, { useEffect } from "react";

// Routage
import { Routes, Route, useLocation } from "react-router-dom";

// Componentes & Pages
import Mariage from "./pages/Mariage";
import Home from "./pages/Home";

export default function App() {
    // Permet le retour en haut de page
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mariage" element={<Mariage />} />
        </Routes>
    );
}
