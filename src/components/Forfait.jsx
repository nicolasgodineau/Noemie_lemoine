import React, { useEffect, useRef, useState } from "react";
// Multilingue
import { useTranslation } from "react-i18next";

import { useTheme } from "@mui/material/styles";
import { Avatar, Box, Button, Container, Typography } from "@mui/material";

import fleur from "../img/mariage/fleur.webp";

export default function Forfait({ data, img, direction }) {
    const { t } = useTranslation();
    const theme = useTheme();

    const [element1Height, setElement1Height] = useState(0);
    const element2Ref = useRef(null);

    // Obtenez la hauteur du premier élément (par exemple, au chargement de la page)
    useEffect(() => {
        if (element2Ref.current) {
            setElement1Height(element2Ref.current.clientHeight);
        }
    }, []);

    // Ajustez dynamiquement la hauteur du deuxième élément pour correspondre au premier élément
    useEffect(() => {
        if (element2Ref.current) {
            element2Ref.current.style.height = `${element1Height}px`;
        }
    }, [element1Height]);

    // Si il n'y a pas "bonus" dans la description d'un forfait alors on affiche pas la box avec les informations
    const bonus = data.bonus;

    return (
        <Container
            component="section"
            disableGutters={true}
            maxWidth={false}
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: direction,
                alignItems: "flex-start",
                justifyContent: "center",
                gap: "3rem",
                paddingY: "3rem",
                backgroundColor: theme.palette.background.default,
            }}
        >
            <Container
                ref={element2Ref}
                disableGutters={true}
                maxWidth={false}
                sx={{
                    width: "56%",
                    maxWidth: "70ch",
                    height: "auto",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: direction === "row" ? "start" : "end",
                    justifyContent: "space-between",
                    gap: "1rem",
                    margin: "0",
                    textAlign: direction === "row" ? "left" : "right",
                }}
            >
                <Typography component="p" variant="h3">
                    {data.title}
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "3rem",
                    }}
                >
                    <Box sx={{}}>
                        <Typography
                            component="p"
                            variant="h4"
                            sx={{
                                fontWeight: "bold",
                                lineHeight: "1.7rem",
                            }}
                        >
                            {data.included}
                        </Typography>
                        <Box sx={{ paddingY: "1rem" }}>
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
                    </Box>
                    <Box>
                        <Typography
                            component="p"
                            variant="h4"
                            sx={{
                                fontWeight: "bold",
                                lineHeight: "1.7rem",
                            }}
                        >
                            {data.free}
                        </Typography>
                        <Typography component="p" variant="body2">
                            {data.bonus.title}
                        </Typography>
                        {data.bonus !== undefined && (
                            <Box sx={{ paddingY: "1rem" }}>
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
                <Typography component="p" variant="body1">
                    {data.asterisk2}
                </Typography>
            </Container>
            <Container
                disableGutters={true}
                maxWidth={false}
                sx={{
                    position: "relative",
                    width: "43%",
                    height: "644px",
                    margin: "0",
                }}
            >
                <Avatar
                    src={fleur}
                    variant="square"
                    sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "top",
                    }}
                />
                <Avatar
                    src={img}
                    variant="square"
                    style={{
                        position: "absolute",
                        width: "90%",
                        height: "90%",
                        [direction === "row" ? "left" : "right"]: "-10%",
                        top: "50%",
                        transform: "translateY(-50%)",
                        objectFit: "contain",
                        zIndex: "100",
                    }}
                />
            </Container>
        </Container>
    );
}
