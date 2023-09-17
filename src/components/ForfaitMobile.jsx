import React from "react";

import { useTheme } from "@mui/material/styles";
import { Box, Container, Typography } from "@mui/material";

import fleur from "../img/mariage/fleur.webp";

export default function ForfaitMobile({ data, img }) {
    const theme = useTheme();

    return (
        <Container
            component="section"
            maxWidth="lg"
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column-reverse",
                alignItems: "stretch",
                gap: "3rem",
                alignContent: "center",
                justifyContent: "space-between",
                paddingY: "3rem",
                backgroundColor: theme.palette.background.default,
            }}
        >
            <Box
                sx={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "0rem",
                }}
            >
                <Typography component="p" variant="h2" data-aos="fade-up">
                    {data.title}
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "2rem",
                        flexGrow: "1",
                    }}
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <Typography component="p" variant="body1">
                        {data.asterisk2}
                    </Typography>
                    <Box>
                        <Typography
                            component="p"
                            variant="h4"
                            sx={{
                                fontWeight: "bold",
                                lineHeight: "1.7rem",
                            }}
                            data-aos="fade-right"
                        >
                            {data.included}
                        </Typography>
                        <Box sx={{ paddingY: ".5rem" }}>
                            {data.items?.map((item, index) => (
                                <React.Fragment key={index}>
                                    <Typography
                                        component="p"
                                        variant="h6"
                                        data-aos="fade-right"
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
                            data-aos="fade-right"
                        >
                            {data.free}
                        </Typography>
                        <Typography
                            component="p"
                            variant="body2"
                            data-aos="fade-right"
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
                                            data-aos="fade-right"
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
                        data-aos="fade-right"
                        data-aos-delay="200"
                    >
                        {data.asterisk1}
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    width: "100%",
                    height: `500px`,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    backgroundImage: `url(${fleur})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            >
                <img
                    src={img}
                    alt=""
                    style={{
                        height: "100%",
                        objectFit: "contain",
                        padding: "2rem",
                    }}
                    data-aos="zoom-in"
                    data-aos-delay="200"
                />
            </Box>
        </Container>
    );
}
