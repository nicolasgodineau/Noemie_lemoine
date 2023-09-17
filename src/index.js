import React from "react";
import ReactDOM from "react-dom/client";

// Routage
import { BrowserRouter } from "react-router-dom";

// Multilingue
import i18n from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import enTranslation from "./locales/en.json";
import frTranslation from "./locales/fr.json";

// CSS & MUI
import "./index.css";
import theme from "./theme.js";
import { CssBaseline, ThemeProvider } from "@mui/material";

// Annimation
import "aos/dist/aos.css";

// Componentes & Pages
import App from "./App";

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
    fallbackLng: "fr",
    interpolation: {
        escapeValue: false,
    },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <I18nextProvider i18n={i18n}>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <App />
                </CssBaseline>
            </ThemeProvider>
        </I18nextProvider>
    </BrowserRouter>
);
