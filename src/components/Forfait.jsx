import React from "react";
// Multilingue
import { useTranslation } from "react-i18next";

import { useTheme } from "@mui/material/styles";
import { Box, Container, Typography } from "@mui/material";

import fleur from "../img/mariage/fleur.webp";

export default function Forfait({ data, img, direction }) {
    console.log("data:", data);
    const { t } = useTranslation();
    const theme = useTheme();

    // Si il n'y a pas "bonus" dans la description d'un forfait alors on affiche pas la box avec les informations
    const bonus = data.bonus;

    return (
        <Container
            component="article"
            disableGutters={false}
            maxWidth="lg"
            sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: direction,
                justifyContent: "space-evenly",
            }}
        >
            <Container
                disableGutters={true}
                maxWidth={false}
                sx={{
                    maxWidth: "330px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "center",
                }}
            >
                <Typography
                    component="p"
                    variant="h1"
                    sx={{
                        position: "relative",
                        top: "-200px",
                        right: "-200px",
                        fontSize: "7rem",
                        fontFamily: "'Cinzel', serif;",
                        textTransform: "uppercase",
                        textAlign: "center",
                        padding: "0.2rem",
                        zIndex: "100",
                    }}
                >
                    {data.id}
                </Typography>
                <img
                    src={fleur}
                    style={{
                        position: "absolute",
                        width: "280px",
                        height: "400px",
                    }}
                />
            </Container>
            <Container
                component="aside"
                disableGutters={true}
                maxWidth={false}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    paddingY: "2rem",
                    backgroundColor: theme.palette.text.white,
                    color: theme.palette.text.secondary,
                }}
            >
                <Typography
                    component="h2"
                    variant="h4"
                    sx={{
                        textTransform: "uppercase",
                        textAlign: "center",
                        padding: "0.2rem",
                    }}
                >
                    {data.title}
                </Typography>
                {data.items?.map((item, index) => (
                    <React.Fragment key={index}>
                        <Typography
                            component="p"
                            variant="h6"
                            sx={{
                                textAlign: "center",
                                padding: "0.2rem",
                            }}
                        >
                            {item.element}
                        </Typography>
                        <Typography
                            component="p"
                            variant="h6"
                            sx={{
                                textAlign: "center",
                                padding: "0.2rem",
                            }}
                        >
                            {index !== data.items?.length - 1 && " + "}
                        </Typography>
                    </React.Fragment>
                ))}
                {data.bonus !== undefined && (
                    <Box>
                        <Typography
                            component="p"
                            variant="body1"
                            sx={{
                                textTransform: "uppercase",
                                textAlign: "center",
                                padding: "0.2rem",
                            }}
                        >
                            {data.bonus.title}
                        </Typography>
                        {data.bonus.items.map((item, index) => (
                            <React.Fragment key={index}>
                                <Typography
                                    component="p"
                                    variant="body2"
                                    sx={{
                                        textAlign: "center",
                                        padding: "0.2rem",
                                    }}
                                >
                                    {item.element}
                                </Typography>
                                <Typography
                                    component="p"
                                    variant="body2"
                                    sx={{
                                        textAlign: "center",
                                        padding: "0.2rem",
                                    }}
                                >
                                    {index !== data.bonus.items?.length - 1 &&
                                        " + "}
                                </Typography>
                            </React.Fragment>
                        ))}
                    </Box>
                )}
            </Container>
            <Container
                disableGutters={true}
                maxWidth={false}
                sx={{
                    width: "43%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundImage:
                        "linear-gradient(to right, white 0%, white 33.33%, #E7D8D3 33.33%, #E7D8D3 66.66%, white 66.66%, white 100%)",
                }}
            >
                <img src={img} style={{ width: "490px", height: "720px" }} />
            </Container>
        </Container>
    );
}
