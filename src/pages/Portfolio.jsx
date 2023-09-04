import React from "react";
import { useTranslation } from "react-i18next";
import { Container, Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Noemie from "../img/Noëmie.webp";
import ContactForm from "../components/ContactForm.jsx";
import Layout from "../Layouts/Layout.jsx";
import { Link } from "react-router-dom";
import ImgsPortfolio from "../components/Portfolio.jsx";

export default function Portfolio() {
    const { t } = useTranslation();
    const theme = useTheme();
    const maxWidth = theme.breakpoints.values.lg;

    const dataIntro = t("about.intro", {
        returnObjects: true,
    });

    return (
        <Layout h1="portfolio.title" maxWidth={maxWidth}>
            <Container
                component="section"
                disableGutters={true}
                maxWidth="lg"
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <ImgsPortfolio />
            </Container>
        </Layout>
    );
}
