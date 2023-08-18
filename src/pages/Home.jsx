import React from "react";
import { Box, Container, Typography } from "@mui/material";
// Multilingue
import { useTranslation } from "react-i18next";

import { useTheme } from "@mui/material/styles";

import backgroundImage from "../img/Index.webp";
import Menu from "../components/Menu.jsx";
import Accueil from "../components/Accueil.jsx";

export default function Home() {
    const { t, language } = useTranslation();
    const theme = useTheme();

    const imageNames = Array.from(
        { length: 22 },
        (_, index) => `collage${index + 1}.webp`
    );
    const images = imageNames.map((imageName) =>
        require(`../img/portfolio/${imageName}`)
    );

    const customStyles = {
        position: "sticky",
        top: "0px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
    };

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
                        backgroundColor: "white",
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
            <Menu position="sticky" />
            <Container
                maxWidth={false}
                sx={{
                    backgroundColor: "white",
                }}
            >
                <Container component="section" maxWidth="lg">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image}
                            alt={`Collage ${index + 1}`}
                            style={{ width: "100%" }}
                        />
                    ))}
                </Container>
            </Container>
        </Container>
    );
}
