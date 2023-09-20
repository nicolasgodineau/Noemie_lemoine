import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container, Typography, Box, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Noemie from "../img/Noëmie.webp";
import Layout from "../Layouts/Layout.jsx";
import ContactModal from "../components/ContactModal.jsx";

export default function About() {
    const { t } = useTranslation();
    const theme = useTheme();
    const maxWidth = theme.breakpoints.values.lg;

    const dataIntro = t("about.intro", {
        returnObjects: true,
    });

    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const openModal = () => setIsContactModalOpen(true);
    const closeModal = () => setIsContactModalOpen(false);

    return (
        <Layout h1="about.title" maxWidth={maxWidth}>
            <Container
                component="section"
                maxWidth="lg"
                sx={{
                    display: "flex",
                    gap: "2rem",
                    alignItems: "flex-start",
                    alignContent: "top",
                    justifyContent: "center",
                    marginBottom: "5rem",
                    [theme.breakpoints.down("md")]: {
                        flexDirection: "column",
                        alignItems: "center",
                    },
                }}
            >
                <Container
                    disableGutters
                    maxWidth={false}
                    sx={{
                        width: "43%",
                        height: "34rem",
                        maxWidth: "300px",
                        minWidth: "20rem",
                        margin: "0",
                        [theme.breakpoints.down("md")]: {
                            width: "100%",
                            maxWidth: "500px",
                            height: "20rem",
                        },
                    }}
                >
                    <img
                        src={Noemie}
                        alt="Noëmie Lemoine"
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "left",
                            aspectRatio: "9/16",
                        }}
                        data-aos="zoom-in"
                        data-aos-delay="200"
                    />
                </Container>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "2rem",
                        justifyContent: "space-between",
                        paddingX: "1rem",
                        [theme.breakpoints.down("md")]: {
                            width: "100%",
                            maxWidth: "500px",
                            height: "auto",
                        },
                    }}
                >
                    <Box
                        sx={{
                            maxWidth: "70ch",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-evenly",
                            margin: "0",
                            textAlign: "left",
                            [theme.breakpoints.down("md")]: {
                                gap: "2rem",
                            },
                        }}
                    >
                        {dataIntro.map((item, index) => {
                            const delay = index * 100;
                            return (
                                <Typography
                                    component="p"
                                    variant={
                                        index === dataIntro.length - 1
                                            ? "h4"
                                            : "body1"
                                    }
                                    key={index}
                                    sx={{
                                        padding: "0.2rem",
                                        paddingX:
                                            index === dataIntro.length - 1
                                                ? "1rem"
                                                : "0",
                                        textAlign:
                                            index === dataIntro.length - 1
                                                ? "right"
                                                : "left",
                                        fontStyle:
                                            index === dataIntro.length - 1
                                                ? "italic"
                                                : "normal",
                                    }}
                                    data-aos="fade-left"
                                    data-aos-delay={delay}
                                >
                                    {item.element}
                                </Typography>
                            );
                        })}
                    </Box>
                    <Box
                        sx={{
                            maxWidth: "70ch",
                            height: "auto",
                            display: "flex",
                            flexDirection: "column",
                            gap: "2rem",
                            justifyContent: "space-evenly",
                            margin: "0",
                            textAlign: "left",
                            [theme.breakpoints.down("md")]: {
                                gap: "1rem",
                            },
                        }}
                    >
                        <Typography
                            variant="body1"
                            data-aos="fade-left"
                            data-aos-delay="200"
                        >
                            Pour toute demande concernant une prestation
                            maquillage et/ou coiffure, contactez-moi afin
                            d’obtenir un devis sur mesure.
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
                                [theme.breakpoints.down("md")]: {
                                    width: "100%",
                                },
                            }}
                            data-aos="fade-left"
                            data-aos-delay="200"
                            onClick={openModal}
                        >
                            {t("contact.field.title")}
                        </Button>
                        <Button
                            variant="contained"
                            size="large"
                            component={Link}
                            to="/cv"
                            sx={{
                                width: "20vmax",
                                minWidth: "300px",
                                alignSelf: "center",
                                borderRadius: "0",
                                color: "white",
                                [theme.breakpoints.down("md")]: {
                                    width: "100%",
                                },
                            }}
                            data-aos="fade-left"
                            data-aos-delay="400"
                        >
                            {t("cv.title")}
                        </Button>
                    </Box>
                </Box>
            </Container>
            <ContactModal open={isContactModalOpen} onClose={closeModal} />
        </Layout>
    );
}
