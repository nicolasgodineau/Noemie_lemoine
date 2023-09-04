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
                flexDirection: direction,
                justifyContent: "space-between",
                paddingBottom: "5rem",
            }}
        >
            <Container
                component="aside"
                disableGutters={true}
                maxWidth="md"
                sx={{
                    height: "700px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    backgroundColor: theme.palette.text.white,
                    color: theme.palette.text.secondary,
                }}
            >
                <Typography component="p" variant="h3">
                    {data.title}
                </Typography>
                <Box
                    sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                    }}
                >
                    <Box sx={{}}>
                        <Typography
                            component="p"
                            variant="h4"
                            sx={{
                                fontWeight: "bold",
                            }}
                        >
                            {data.included}
                        </Typography>
                        {data.items?.map((item, index) => (
                            <React.Fragment key={index}>
                                <Typography component="p" variant="h6">
                                    {item.element}
                                </Typography>
                                <Typography
                                    component="p"
                                    variant="h6"
                                ></Typography>
                            </React.Fragment>
                        ))}
                    </Box>
                    <Box sx={{}}>
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "baseline",
                                gap: "5px",
                            }}
                        >
                            <Typography
                                component="p"
                                variant="h4"
                                sx={{
                                    fontWeight: "bold",
                                }}
                            >
                                {data.free}
                            </Typography>
                            <Typography component="p" variant="body2">
                                {data.bonus.title}
                            </Typography>
                        </Box>
                        {data.bonus !== undefined && (
                            <Box>
                                {data.bonus.items.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <Typography component="p" variant="h6">
                                            {item.element}
                                        </Typography>
                                        <Typography
                                            component="p"
                                            variant="body2"
                                        ></Typography>
                                    </React.Fragment>
                                ))}
                            </Box>
                        )}
                    </Box>
                </Box>
            </Container>
            <Container
                disableGutters={true}
                maxWidth="lg"
                sx={{
                    position: "relative",
                    height: "700px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Container
                    disableGutters={true}
                    maxWidth={false}
                    sx={{
                        width: "43%",
                        height: "auto",
                        margin: "0",
                    }}
                >
                    <img
                        src={fleur}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            objectPosition: "top",
                        }}
                    />
                </Container>
                {/*                 <img
                    src={fleur}
                    style={{
                        alignSelf: "self-end",
                        height: "100%",
                        top: "0",
                        objectFit: "contain",
                    }}
                />
                <img
                    src={img}
                    style={{
                        position: "absolute",
                        width: "90%",
                        height: "90%",
                        left: "-10%",
                        top: "50%",
                        transform: "translateY(-50%)",
                        objectFit: "contain",
                        zIndex: "100",
                    }}
                /> */}
            </Container>
        </Container>
    );
}

{
    /*                 <Box
                    sx={{
                        position: "absolute",
                        width: "90%",
                        height: "90%",
                        left: "-10%",
                        objectFit: "contain",
                        zIndex: "200",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "baseline",
                        }}
                    >
                        <Typography component="p" variant="h1">
                            {data.id}
                        </Typography>
                        <Typography component="p" variant="h4">
                            {"&"}
                        </Typography>
                    </Box>
                    <Typography
                        component="p"
                        variant="h1"
                        sx={{
                            paddingLeft: "5rem",
                        }}
                    >
                        {data.id2}
                    </Typography>
                </Box> */
}
