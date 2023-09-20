import React, { useEffect } from "react";

import AOS from "aos";

// Routage
import { Routes, Route, useLocation } from "react-router-dom";

// Componentes & Pages
import Mariage from "./pages/Mariage";
import Home from "./pages/Home";
import About from "./pages/About.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Cv from "./pages/CV.jsx";
import BackToTop from "./components/BackToTop.jsx";
import MentionLegales from "./pages/MentionsLegales.jsx";

export default function App() {
    // Permet le retour en haut de page
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {
        AOS.init({
            useClassNames: true, // Utilise des noms de classe pour les animations (optionnel)
            initClassName: false, // Désactive l'ajout de la classe d'initialisation automatique (optionnel)
            easing: "ease", // Type d'interpolation de l'animation
            duration: 1000, // Durée de l'animation en millisecondes
            delay: 0, // Délai avant que l'animation ne commence en millisecondes
            anchorPlacement: "top-bottom", // Placement de l'ancre pour déclencher les animations lors du défilement
            offset: 0, // Décalage personnalisé pour déclencher les animations avant ou après le point de déclenchement
            once: false, // Indique si l'animation ne se répète qu'une seule fois
            mirror: false, // Indique si les animations se répètent en sens inverse lorsqu'elles sont déclenchées dans l'autre sens
            zoom: 0, // Réduire le niveau de zoom pour les animations avec l'effet "zoom-in"
        });
    }, []);

    useEffect(() => {
        AOS.refresh();
    }, []);

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mariage" element={<Mariage />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/apropos" element={<About />} />
                <Route path="/cv" element={<Cv />} />
                <Route path="/mention_legales" element={<MentionLegales />} />
            </Routes>
            <BackToTop />
        </>
    );
}
