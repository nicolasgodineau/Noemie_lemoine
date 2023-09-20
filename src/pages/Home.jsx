import React, { Suspense } from "react";

import { Box, Container, Divider, Typography } from "@mui/material";
// Multilingue
import { useTranslation } from "react-i18next";

import { useTheme } from "@mui/material/styles";

import backgroundImage from "../img/Index.webp";
import Layout from "../Layouts/Layout.jsx";
const ImgsPortfolio = React.lazy(() =>
    import("../components/ImgsPortfolio.jsx")
);

export default function Home() {
    const { t } = useTranslation();
    const theme = useTheme();

    return (
        <>
            <Container
                component="main"
                disableGutters
                maxWidth={false}
                sx={{
                    width: "auto",
                    height: "100svh",
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    overflow: "hidden",
                    [theme.breakpoints.down("md")]: {
                        backgroundPosition: "87% 50%",
                    },
                }}
            >
                <Container
                    maxWidth="xxs"
                    disableGutters
                    sx={{
                        marginLeft: "10%",
                        marginRight: "auto",
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        [theme.breakpoints.down("md")]: {
                            marginLeft: "auto",
                        },
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
            <Layout h1={null} maxWidth="unset">
                <Suspense fallback={<div>Chargement...</div>}>
                    <ImgsPortfolio />
                </Suspense>
            </Layout>
        </>
    );
}
