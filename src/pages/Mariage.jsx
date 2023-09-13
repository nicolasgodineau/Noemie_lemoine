import React from "react";
// Multilingue
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import {
    Box,
    Container,
    Typography,
    useMediaQuery,
    Avatar,
} from "@mui/material";

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
                maxWidth="lg"
                sx={{
                    maxHeight: "450px",
                    display: "flex",
                    gap: "2rem",
                    justifyContent: "space-between",
                    [theme.breakpoints.down("md")]: {
                        maxHeight: "100%",
                        flexDirection: "column",
                        alignItems: "center",
                    },
                }}
            >
                <Avatar
                    src={introImg}
                    alt="Votre image"
                    variant="square"
                    sx={{
                        width: "40%",
                        height: "100%",
                        maxHeight: "450px",
                        aspectRatio: "0.5",
                        ".MuiAvatar-img": {
                            [theme.breakpoints.down("sm")]: {
                                objectPosition: "0% 28%",
                            },
                        },
                        [theme.breakpoints.down("md")]: {
                            width: "100%",
                            height: "100%",
                            aspectRatio: "10/9",
                        },
                    }}
                />
                <Box
                    sx={{
                        maxWidth: "70ch",
                        display: "flex",
                        flexDirection: "column",
                        gap: "3svh",
                        justifyContent: "space-between",
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
