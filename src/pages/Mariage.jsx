import React from "react";
// Multilingue
import { useTranslation } from "react-i18next";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import { Box, Container, Typography, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import Menu from "../components/Menu.jsx";

import introImg from "../img/mariage/intro.webp";
import forfait1Img from "../img/mariage/forfait1.webp";
import forfait2Img from "../img/mariage/forfait2.webp";
import Forfait from "../components/Forfait.jsx";
import Layout from "../Layouts/Layout.jsx";

export default function Mariage() {
    const { t } = useTranslation();
    const theme = useTheme();
    const maxWidth = theme.breakpoints.values.lg;

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
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    flexGrow: 1,
                }}
            >
                <Grid
                    container
                    sx={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        flexGrow: 1,
                    }}
                >
                    <Grid item xs={4} md={4} lg={4}>
                        <Item>
                            {" "}
                            <img
                                src={introImg}
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "contain",
                                    objectPosition: "top",
                                }}
                            />
                        </Item>
                    </Grid>
                    {/*                     <Grid item xs={6}>
                        <Item>xs=6</Item>
                    </Grid> */}
                    <Grid item xs={6} md={7} lg={7}>
                        <Item>
                            {" "}
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
                        </Item>
                    </Grid>
                </Grid>
            </Box>

            {/*             <Container
                component="section"
                disableGutters={false}
                maxWidth="lg"
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "2rem",
                    justifyContent: "space-evenly",
                }}
            >
                <Container
                    disableGutters={true}
                    maxWidth={false}
                    sx={{
                        width: "43%",
                        maxHeight: "600px",
                        minHeight: "400px",
                        maxWidth: "300px",
                        minWidth: "20rem",
                        margin: "0",
                    }}
                >
                    <img
                        src={introImg}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            objectPosition: "top",
                        }}
                    />
                </Container>
                <Container
                    disableGutters={true}
                    maxWidth={false}
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
                </Container>
            </Container>
            <Forfait data={forfait1} img={forfait1Img} direction="row" />
            <Forfait
                data={forfait2}
                img={forfait2Img}
                direction="row-reverse"
            /> */}
        </Layout>
    );
}
