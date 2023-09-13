import React from "react";
// Multilingue
import { useTranslation } from "react-i18next";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import {
    Box,
    Container,
    Typography,
    Grid,
    useMediaQuery,
    Avatar,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Menu from "../components/Menu.jsx";

import introImg from "../img/mariage/intro.webp";
import forfait1Img from "../img/mariage/forfait1.webp";
import forfait2Img from "../img/Group 7.png";
import Forfait from "../components/Forfait.jsx";
import ForfaitMobile from "../components/ForfaitMobile.jsx";
import Layout from "../Layouts/Layout.jsx";

export default function Mariage() {
    const { t } = useTranslation();
    const theme = useTheme();
    const maxWidth = theme.breakpoints.values.lg;
    const isMd = useMediaQuery((theme) => theme.breakpoints.down("md"));

    const dataIntro = t("services.intro", {
        returnObjects: true,
    });
    const dataSteps = t("services.steps.list", {
        returnObjects: true,
    });
    const forfaits = t("services.forfaits", {
        returnObjects: true,
    });
    const forfait1 = forfaits[0];
    const forfait2 = forfaits[1];
    const forfait3 = forfaits[2];
    const ForfaitMaquillageCoiffure = t(
        "services.forfait.forfaitMaquillageCoiffure",
        {
            returnObjects: true,
        }
    );

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: "center",
        color: theme.palette.text.secondary,
    }));

    const isCustomBreakpoint = useMediaQuery("(max-width: 800px)");
    console.log("isCustomBreakpoint:", isCustomBreakpoint);

    return (
        <Layout h1="services.title" maxWidth={maxWidth}>
            <Typography
                component="h3"
                variant="h4"
                sx={{
                    textAlign: "center",
                }}
            >
                {t("services.subtitle")}
            </Typography>
            <Container
                component="section"
                disableGutters={false}
                maxWidth="lg"
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "2rem",
                    justifyContent: "space-between",
                }}
            >
                <Grid container columnSpacing={4} rowSpacing={5} sx={{}}>
                    {/* Image container */}
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        smd
                        md={4}
                        sx={{
                            [theme.breakpoints.down("smd")]: {
                                maxHeight: "300px",
                            },
                        }}
                    >
                        <Avatar
                            src={introImg}
                            alt="Votre image"
                            variant="square"
                            sx={{
                                width: "100%",
                                height: "100%",
                                [theme.breakpoints.down("smd")]: {
                                    maxHeight: "300px",
                                },
                            }}
                        />
                    </Grid>

                    {/* Text container */}
                    <Grid
                        item
                        xs={12}
                        sm="auto"
                        smd={4}
                        md={6}
                        sx={{}}
                        style={{
                            flexGrow: "1",
                            minHeight: "400px",
                            maxHeight: "600px",
                            maxWidth: "fit-content",
                        }}
                    >
                        <Box
                            sx={{
                                maxWidth: "70ch",
                                height: "100%",
                                margin: "auto",
                                display: "flex",
                                flexDirection: "column",
                                gap: "3svh",
                                justifyContent: "space-evenly",
                                [theme.breakpoints.down("sm")]: {
                                    maxWidth: "50ch",
                                },
                            }}
                        >
                            <Box>
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
                            <Box
                                sx={{
                                    height: "auto",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <Typography
                                    component="p"
                                    variant="body"
                                    sx={{
                                        padding: "0.2rem",
                                    }}
                                >
                                    {t("services.steps.subtitle")}
                                </Typography>
                                {dataSteps.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <Typography
                                            component="p"
                                            variant="body"
                                            key={index}
                                            sx={{
                                                fontWeight: "bolder",
                                                padding: "0.2rem",
                                            }}
                                        >
                                            {item.title}
                                        </Typography>
                                        <Typography
                                            component="p"
                                            variant="body"
                                            key={index}
                                            sx={{
                                                padding: "0.2rem",
                                            }}
                                        >
                                            {item.description}
                                        </Typography>
                                    </React.Fragment>
                                ))}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
            <>
                {!isMd ? (
                    // Si isMd est false on affiche le forfait bureau
                    <>
                        <Forfait
                            data={forfait1}
                            img={forfait1Img}
                            direction="row"
                        />
                        <Forfait
                            data={forfait2}
                            img={forfait2Img}
                            direction="row-reverse"
                        />
                    </>
                ) : (
                    // Si isMd est true on affiche le forfait mobile
                    <>
                        <ForfaitMobile data={forfait1} img={forfait1Img} />
                        <ForfaitMobile data={forfait2} img={forfait2Img} />
                    </>
                )}
            </>
        </Layout>
    );
}
