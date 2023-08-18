import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Box, Container, Icon, Typography, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Instagram from "@mui/icons-material/Instagram";
import Facebook from "@mui/icons-material/Facebook";
import LinkedIn from "@mui/icons-material/LinkedIn";

export default function Menu({ position }) {
    const { t } = useTranslation();
    const theme = useTheme();
    const menuNavigation = t("menuNavigation", { returnObjects: true });
    const menuSocial = t("menuSocial", { returnObjects: true });

    const iconsList = {
        Instagram: <Instagram />,
        Facebook: <Facebook />,
        LinkedIn: <LinkedIn />,
    };

    return (
        <Container
            component="nav"
            disableGutters={true}
            maxWidth={false}
            sx={{
                width: "100%",
                backgroundColor: theme.palette.text.white,
                position: { position },
                top: "0px",
                paddingY: "0.5rem",
                zIndex: "9999",
            }}
        >
            <Container
                maxWidth="lg"
                sx={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: ".5rem",
                    }}
                >
                    <Typography variant="h3">{t("name")}</Typography>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "baseline",
                            justifyContent: "center",
                            gap: ".5rem",
                        }}
                    >
                        {menuSocial.map((menuItem, index) => (
                            <Link
                                key={index}
                                href={menuItem.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                underline="none"
                                sx={{
                                    display: "inline-flex",
                                    alignSelf: "center",
                                }}
                            >
                                <Icon
                                    sx={{ color: theme.palette.text.primary }}
                                >
                                    {iconsList[menuItem.label]}
                                </Icon>
                            </Link>
                        ))}
                    </Box>
                </Box>
                <Box
                    sx={{
                        flexGrow: "1",
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "flex-end",
                        gap: "1rem",
                    }}
                >
                    {menuNavigation.map((menuItem, index) => (
                        <NavLink key={index} to={menuItem.url}>
                            <Typography
                                component="a"
                                variant="body"
                                key={index}
                                color="textPrimary"
                            >
                                {t(menuItem.label)}
                            </Typography>
                        </NavLink>
                    ))}
                </Box>
            </Container>
        </Container>
    );
}
