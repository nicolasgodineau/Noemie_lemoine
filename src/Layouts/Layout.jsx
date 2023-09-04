import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Menu from "../components/Menu.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

export default function Layout({ children, h1, maxWidth }) {
    console.log("h1:", h1);
    const { t } = useTranslation();
    const theme = useTheme();
    return (
        <>
            <Header position="sticky" />
            <Container
                component="main"
                disableGutters={false}
                maxWidth={false}
                sx={{
                    maxWidth: maxWidth,
                    width: "auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "3rem",
                    padding: "1rem 0 3rem 0",
                    backgroundColor: theme.palette.background.default,
                }}
            >
                {h1 !== null ? (
                    <Typography
                        component="h1"
                        variant="h1"
                        sx={{
                            padding: "2rem",
                            fontWeight: 400,
                            textAlign: "center",
                            textTransform: "capitalize",
                        }}
                    >
                        {t(h1)}
                    </Typography>
                ) : null}

                {children}
            </Container>
            <Footer />
        </>
    );
}
