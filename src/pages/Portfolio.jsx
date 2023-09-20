import React, { Suspense } from "react";
import { Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Layout from "../Layouts/Layout.jsx";
const ImgsPortfolio = React.lazy(() =>
    import("../components/ImgsPortfolio.jsx")
);

export default function Portfolio() {
    const theme = useTheme();
    const maxWidth = theme.breakpoints.values.lg;

    return (
        <Layout h1="portfolio.title" maxWidth={maxWidth}>
            <Container
                component="section"
                disableGutters
                maxWidth="lg"
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Suspense fallback={<div>Chargement...</div>}>
                    <ImgsPortfolio />
                </Suspense>
            </Container>
        </Layout>
    );
}
