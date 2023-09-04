import React from "react";
import { Box, Container, Typography } from "@mui/material";
// Multilingue
import { useTranslation } from "react-i18next";

import { useTheme } from "@mui/material/styles";

import backgroundImage from "../img/Index.webp";
import Menu from "../components/Menu.jsx";
import Accueil from "../components/Accueil.jsx";
import Layout from "../Layouts/Layout.jsx";
import Portfolio from "../components/Portfolio.jsx";

export default function Home() {
    const { t } = useTranslation();
    const theme = useTheme();

    return (
        <Container
            component="main"
            disableGutters={true}
            maxWidth={false}
            sx={{
                width: "auto",
                height: "100svh",
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                overflow: "scroll",
            }}
        >
            <Box
                sx={{
                    height: "100%",
                    width: "500px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    paddingLeft: "150px",
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontFamily: "'Cinzel', serif;",
                        textAlign: "center",
                        color: "white",
                    }}
                >
                    {t("job")}
                </Typography>
                <Typography
                    variant="h2"
                    sx={{
                        fontFamily: "'Cinzel', serif;",
                        textAlign: "center",
                        letterSpacing: "10px",
                        color: "white",
                    }}
                >
                    {t("name")}
                </Typography>
                <Box
                    sx={{
                        height: "2px",
                        backgroundColor: theme.palette.background.default,
                    }}
                />
                <Typography
                    variant="h2"
                    sx={{
                        fontFamily: "'Cinzel', serif;",
                        textAlign: "center",
                        letterSpacing: "10px",
                        color: "white",
                    }}
                >
                    {t("lastname")}
                </Typography>
            </Box>
            <Layout h1={null} maxWidth="unset">
                <Portfolio />
            </Layout>
        </Container>
    );
}
