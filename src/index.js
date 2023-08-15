import React from "react";
import ReactDOM from "react-dom/client";

// Routage
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Multilingue
import i18n from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json";
import frTranslation from "./locales/fr.json";

// CSS
import "./index.css";

// Componentes & Pages
import App from "./App";
import Page2 from "./pages/Page2.jsx";

// Multilingue config
i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: enTranslation,
        },
        fr: {
            translation: frTranslation,
        },
    },
    lng: "fr",
    keySeparator: false,
    interpolation: {
        escapeValue: false,
    },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <BrowserRouter>
                <Routes>
                    <Route path="/page2" element={<Page2 />} />
                </Routes>
                <App />
            </BrowserRouter>
        </I18nextProvider>
    </React.StrictMode>
);
