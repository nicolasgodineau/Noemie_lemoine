import React from "react";
import { Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Layout from "../Layouts/Layout.jsx";
import ImgsPortfolio from "../components/Portfolio.jsx";

export default function Portfolio() {
    const theme = useTheme();
    const maxWidth = theme.breakpoints.values.lg;

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
