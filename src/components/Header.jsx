import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Box, Container, Icon, Typography, Link } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

import DesktopMenu from "./DesktopMenu.jsx";
import MobileMenu from "./MobileMenu.jsx";

export default function Header({ position }) {
    const { t } = useTranslation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    console.log("isMobile:", isMobile);

    return (
        <Container
            component="header"
            disableGutters={true}
            maxWidth={false}
            sx={{
                width: "100%",
                position: { position },
                top: "0px",
                paddingY: isMobile ? 0 : ".5rem",
                backgroundColor: theme.palette.background.default,
            }}
        >
            {isMobile ? <MobileMenu /> : <DesktopMenu />}
        </Container>
    );
}
