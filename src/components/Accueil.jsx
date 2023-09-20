import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Box, Typography } from "@mui/material";
import backgroundImage from "../img/Index.webp";

export default function Accueil() {
    const { t } = useTranslation();

    return (
        <Container
            disableGutters
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
                    width: "fit-content",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    paddingLeft: "150px",
                }}
            >
                <Typography
                    sx={{
                        fontSize: "clamp(2rem, 4vw, 6rem)",
                        color: "white",
                    }}
                >
                    {t("name")}
                </Typography>
                <Typography
                    sx={{
                        fontSize: "clamp(2rem, 4vw, 5rem)",
                        color: "white",
                    }}
                >
                    {t("job")}
                </Typography>
            </Box>
        </Container>
    );
}
