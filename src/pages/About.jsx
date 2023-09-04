import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Container, Typography, Box, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Noemie from "../img/Noëmie.webp";
import ContactForm from "../components/ContactForm.jsx";
import Layout from "../Layouts/Layout.jsx";
import { Link } from "react-router-dom";
import ContactModal from "../components/ContactModal.jsx";

export default function About() {
    const { t } = useTranslation();
    const theme = useTheme();
    const maxWidth = theme.breakpoints.values.lg;

    const dataIntro = t("about.intro", {
        returnObjects: true,
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <Layout h1="about.title" maxWidth={maxWidth}>
            <Container
                component="section"
                disableGutters={true}
                maxWidth="lg"
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "2rem",
                    alignItems: "flex-start",
                    alignContent: "top",
                    justifyContent: "center",
                }}
            >
                <Container
                    disableGutters={true}
                    maxWidth={false}
                    sx={{
                        width: "43%",
                        maxWidth: "300px",
                        minWidth: "20rem",
                        height: "auto",
                        margin: "0",
                        paddingX: "1rem",
                    }}
                >
                    <img
                        src={Noemie}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                        }}
                    />
                </Container>
                <Box
                    sx={{
                        width: "56%",
                        maxWidth: "70ch",
                        minWidth: "60ch",
                        height: "auto",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        margin: "0",
                        textAlign: "left",
                    }}
                >
                    {dataIntro.map((item, index) => (
                        <Typography
                            component="p"
                            variant="body1"
                            key={index}
                            sx={{
                                textAlign: "left",
                                padding: "0.2rem",
                            }}
                        >
                            {item.element}
                        </Typography>
                    ))}
                </Box>
            </Container>
            <Container
                component="section"
                disableGutters={true}
                maxWidth="lg"
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "2rem",
                    alignItems: "flex-start",
                    alignContent: "top",
                    justifyContent: "center",
                }}
            >
                <Box
                    sx={{
                        width: "56%",
                        maxWidth: "70ch",
                        minWidth: "60ch",
                        height: "auto",
                        display: "flex",
                        flexDirection: "column",
                        gap: "2rem",
                        justifyContent: "space-evenly",
                        margin: "0",
                        textAlign: "left",
                    }}
                >
                    <Typography variant="body1">
                        Pour toute demande concernant une prestation maquillage
                        et/ou coiffure, contactez-moi afin d’obtenir un devis
                        sur mesure.
                    </Typography>
                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            width: "20vmax",
                            minWidth: "300px",
                            alignSelf: "center",
                            borderRadius: "0",
                            color: "white",
                        }}
                        onClick={handleOpenModal}
                    >
                        {t("contact.field.title")} 👋🏻👋🏻👋🏻
                    </Button>
                </Box>
                <ContactModal open={isModalOpen} onClose={handleCloseModal} />
            </Container>
        </Layout>
    );
}
