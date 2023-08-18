import React from "react";
// Multilingue
import { useTranslation } from "react-i18next";

import { useTheme } from "@mui/material/styles";
import { Box, Container, Typography } from "@mui/material";

import Menu from "../components/Menu.jsx";

import introImg from "../img/mariage/intro.webp";
import forfait1Img from "../img/mariage/forfait1.webp";
import forfait2Img from "../img/mariage/forfait2.webp";
import Forfait from "../components/Forfait.jsx";

export default function Mariage() {
    const { t } = useTranslation();
    const theme = useTheme();

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

    return (
        <>
            <Menu position="fixed" />
            <Container
                component="main"
                disableGutters={true}
                maxWidth="lg"
                sx={{
                    width: "auto",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingTop: "5rem",
                    backgroundColor: "white",
                }}
            >
                <Typography
                    component="h1"
                    variant="h1"
                    sx={{
                        padding: "2rem",
                        fontWeight: 400,
                        textAlign: "center",
                    }}
                >
                    {t("services.title")}
                </Typography>
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
                    disableGutters={true}
                    maxWidth="lg"
                    sx={{
                        display: "flex",
                        height: "75svh",
                        minHeight: "580px",
                        padding: "1rem",
                    }}
                >
                    <Container
                        disableGutters={true}
                        maxWidth={false}
                        sx={{
                            width: "43%",
                            height: "auto",
                        }}
                    >
                        <img
                            src={introImg}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </Container>
                    <Container
                        disableGutters={true}
                        sx={{
                            width: "56%",
                            height: "auto",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-evenly",
                        }}
                    >
                        <Box>
                            {dataIntro.map((item, index) => (
                                <Typography
                                    component="p"
                                    variant="body1"
                                    key={index}
                                    sx={{
                                        textAlign: "center",
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
                                    textAlign: "center",
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
                                            textAlign: "center",
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
                                            textAlign: "center",
                                            padding: "0.2rem",
                                        }}
                                    >
                                        {item.description}
                                    </Typography>
                                </React.Fragment>
                            ))}
                        </Box>
                    </Container>
                </Container>
                <Container
                    component="section"
                    disableGutters={true}
                    maxWidth={false}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10svh",
                    }}
                >
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
                    <Forfait
                        data={forfait3}
                        img={forfait2Img}
                        direction="row"
                    />
                </Container>
            </Container>
        </>
    );
}
