import React, { useEffect, useRef, useState } from "react";

import { useTheme } from "@mui/material/styles";
import { Avatar, Box, Container, Typography } from "@mui/material";

import fleur from "../img/mariage/fleur.webp";

export default function Forfait({ data, img, direction }) {
    const theme = useTheme();

    const [element1Height, setElement1Height] = useState(650);
    const element2Ref = useRef(null);

    // Obtien la hauteur du premier élément (par exemple, au chargement de la page)
    useEffect(() => {
        if (element2Ref.current) {
            setElement1Height(element2Ref.current.clientHeight);
        }
    }, []);

    // Ajuste dynamiquement la hauteur du deuxième élément pour correspondre au premier élément
    useEffect(() => {
        if (element2Ref.current) {
            element2Ref.current.style.height = `${element1Height}px`;
        }
    }, [element1Height]);

    return (
        <Container
            component="section"
            maxWidth="lg"
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: direction,
                alignItems: "stretch",
                alignContent: "center",
                justifyContent: "space-between",
                paddingY: "3rem",
                backgroundColor: theme.palette.background.default,
                [theme.breakpoints.down("smd")]: {
                    flexDirection: "column-reverse",
                },
            }}
            data-aos="fade-up"
            data-aos-delay="500"
        >
            <Box
                ref={element2Ref}
                sx={{
                    height: "100%",
                    minHeight: "550px",
                    maxHeight: "650px",
                    minWidth: "55ch",
                    maxWidth: "67ch",
                    width: "60%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: "2rem",
                    alignItems: direction === "row" ? "start" : "end",
                    textAlign: direction === "row" ? "left" : "right",
                    padding: direction === "row" ? "0 1rem 0 0" : "0 0 0 1rem",
                }}
            >
                <Typography component="p" variant="h2" sx={{}}>
                    {data.title}
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        flexGrow: "1",
                    }}
                >
                    <Box>
                        <Typography
                            component="p"
                            variant="h4"
                            sx={{
                                fontWeight: "bold",
                                lineHeight: "1.7rem",
                            }}
                            data-aos={
                                direction === "row" ? "fade-right" : "fade-left"
                            }
                            data-aos-delay="200"
                        >
                            {data.included}
                        </Typography>
                        <Box sx={{ paddingY: ".5rem" }}>
                            {data.items?.map((item, index) => (
                                <React.Fragment key={index}>
                                    <Typography
                                        component="p"
                                        variant="h6"
                                        data-aos={
                                            direction === "row"
                                                ? "fade-right"
                                                : "fade-left"
                                        }
                                        data-aos-delay="200"
                                    >
                                        {item.element}
                                    </Typography>
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
                            data-aos={
                                direction === "row" ? "fade-right" : "fade-left"
                            }
                            data-aos-delay="200"
                        >
                            {data.free}
                        </Typography>
                        <Typography
                            component="p"
                            variant="body2"
                            data-aos={
                                direction === "row" ? "fade-right" : "fade-left"
                            }
                            data-aos-delay="200"
                        >
                            {data.bonus.title}
                        </Typography>
                        {data.bonus !== undefined && (
                            <Box sx={{ paddingY: ".5rem" }}>
                                {data.bonus.items.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <Typography
                                            component="p"
                                            variant="h6"
                                            data-aos={
                                                direction === "row"
                                                    ? "fade-right"
                                                    : "fade-left"
                                            }
                                            data-aos-delay="200"
                                        >
                                            {item.element}
                                        </Typography>
                                    </React.Fragment>
                                ))}
                            </Box>
                        )}
                    </Box>
                    <Typography
                        component="p"
                        variant="body1"
                        data-aos={
                            direction === "row" ? "fade-right" : "fade-left"
                        }
                        data-aos-delay="200"
                    >
                        {data.asterisk2}
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    position: "relative",
                    width: "30%",
                    height: `${element1Height}px`,
                    maxHeight: "45rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    backgroundImage: `url(${fleur})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <Avatar
                    src={img}
                    variant="square"
                    alt="Mariage"
                    imgProps={{
                        sx: {
                            objectFit:
                                direction === "row" ? "cover" : "contain",
                        },
                    }}
                    sx={{
                        position: "relative",
                        left: direction === "row" ? "-50%" : undefined,
                        right: direction === "row-reverse" ? "-50%" : undefined,
                        height: `calc(${element1Height}px - 10%)`,
                        width: direction === "row" ? "fit-content" : "auto",
                        paddingLeft: direction === "row" ? "70px" : undefined,
                        paddingRight:
                            direction === "row-reverse" ? "70px" : undefined,
                        aspectRatio: "0.7",
                    }}
                    data-aos="zoom-in"
                />
            </Box>
        </Container>
    );
}
