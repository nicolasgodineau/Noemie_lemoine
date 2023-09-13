import React, { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { animateScroll as scroll } from "react-scroll";

import { Box, Container, Divider, Typography } from "@mui/material";
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
        <>
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
                    overflowY: "scroll",
                    overflowX: "hidden",

                    [theme.breakpoints.down("md")]: {
                        backgroundPosition: "87% 50%",
                    },
                }}
            >
                <Container
                    maxWidth="xxs"
                    disableGutters
                    sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <Container disableGutters>
                        <Typography
                            variant="h5"
                            sx={{
                                fontFamily: "'Cinzel', serif;",
                                textAlign: "center",
                                color: "white",
                            }}
                        >
                            {t("job")}
                        </Typography>
                        <Typography
                            variant="h3"
                            sx={{
                                fontFamily: "'Cinzel', serif;",
                                textAlign: "center",
                                letterSpacing: "10px",
                                color: "white",
                            }}
                        >
                            {t("name")}
                        </Typography>
                    </Container>
                    <Divider
                        sx={{
                            height: "2px",
                            marginX: "3%",
                            backgroundColor: theme.palette.background.default,
                        }}
                    />
                    <Container disableGutters>
                        <Typography
                            variant="h3"
                            sx={{
                                fontFamily: "'Cinzel', serif;",
                                textAlign: "center",
                                letterSpacing: "10px",
                                color: "white",
                            }}
                        >
                            {t("lastname")}
                        </Typography>
                    </Container>
                </Container>
            </Container>
            <Box>
                <Layout h1={null} maxWidth="unset">
                    <Portfolio />
                </Layout>
            </Box>
        </>
    );
}
