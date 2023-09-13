import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
    Box,
    Container,
    Icon,
    Typography,
    Link,
    AppBar,
    Avatar,
    IconButton,
    Menu,
    MenuItem,
    Drawer,
    Button,
    Toolbar,
    ListItem,
    Divider,
    List,
    ListItemButton,
    ListItemText,
} from "@mui/material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";

import DesktopMenu from "./DesktopMenu.jsx";
import MobileMenu from "./MobileMenu.jsx";
import SocialMenu from "./SocialMenu.jsx";
import Nav from "./Menu.jsx";
import UnifiedMenu from "./Menu.jsx";

const navItems = [
    "Accueil",
    "Portfolio",
    "Mariages",
    "Apropos",
    "CV",
    "Contact",
];

export default function Header({ position }) {
    const { t } = useTranslation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    const menuNavigation = t("menuNavigation", { returnObjects: true });

    const [mobileOpen, setMobileOpen] = React.useState(false);

    return (
        <Container
            component="header"
            disableGutters={true}
            maxWidth={false}
            sx={{
                width: "100%",
                position: { position },
                top: "0px",
                padding: "0",
                backgroundColor: theme.palette.background.default,
                zIndex: "100",
            }}
        >
            <UnifiedMenu />
        </Container>
    );
}
