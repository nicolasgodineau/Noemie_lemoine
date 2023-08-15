import React from "react";

// Routage
import { NavLink } from "react-router-dom";

// Multilingue
import { useTranslation } from "react-i18next";

// Theme & Componentes MUI
import theme from "./theme.js";
import { CssBaseline, ThemeProvider, Typography } from "@mui/material";

export default function App() {
    const { t } = useTranslation();
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <>
                    <h1>{t("welcome")}</h1>
                    <NavLink to="/Page2">
                        <Typography component="a" color="textPrimary">
                            {"page2"}
                        </Typography>
                    </NavLink>
                </>
            </CssBaseline>
        </ThemeProvider>
    );
}
