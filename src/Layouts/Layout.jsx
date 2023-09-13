import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Menu from "../components/Menu.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";

export default function Layout({ children, h1, maxWidth }) {
    const { t } = useTranslation();
    const theme = useTheme();
    return (
        <>
            <Header position="sticky" />
            <Container
                component="main"
                maxWidth={false}
                sx={{
                    maxWidth: maxWidth,
                    width: "auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "3vmax",
                    padding: "1rem 0 3rem 0",
                    backgroundColor: theme.palette.background.default,
                }}
            >
                {h1 !== null ? (
                    <Typography
                        component="h1"
                        variant="h1"
                        sx={{
                            fontWeight: 400,
                            textAlign: "center",
                            textTransform: "capitalize",
                            paddingX: "1rem",
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
