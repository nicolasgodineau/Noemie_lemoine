import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Menu,
    MenuItem,
    Button,
} from "@mui/material";
import { popoverClasses } from "@mui/material/Popover";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import ContactModal from "./ContactModal.jsx";
import SocialMenu from "./SocialMenu.jsx";
import { useMediaQuery } from "@mui/material";

export default function UnifiedMenu() {
    const { t } = useTranslation();
    const theme = useTheme();
    const location = useLocation();
    const menuNavigation = t("menuNavigation", { returnObjects: true });
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    const openModal = () => setIsContactModalOpen(true);
    const closeModal = () => setIsContactModalOpen(false);

    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
    const handleCloseNavMenu = () => setAnchorElNav(null);

    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const isHome = location.pathname === "/";

    const generateMenuButtons = (
        menuNavigation,
        openModal,
        handleCloseNavMenu,
        theme,
        t,
        isMobile
    ) =>
        menuNavigation.map((menuItem, index) => (
            <MenuItem
                component="li"
                role="menu"
                aria-labelledby="menubutton"
                aria-controls="button"
                aria-label="button navigation"
                key={index}
                onClick={handleCloseNavMenu}
                sx={{
                    justifyContent: "center",
                    padding: isMobile ? "1rem" : "0",
                }}
            >
                <Button
                    component={NavLink}
                    aria-controls="button"
                    aria-label="button navigation"
                    to={menuItem.url}
                    key={index}
                    color="primary"
                    onClick={menuItem.label === "Contact" ? openModal : null}
                    sx={{
                        ":hover": {
                            bgcolor: "unset",
                            textDecoration: "underline",
                            textUnderlineOffset: "0.2rem",
                            color: `${theme.palette.link} !important`,
                        },
                        ...(menuItem.label !== "Contact"
                            ? {
                                  "&.active": {
                                      textDecoration: "underline",
                                      textUnderlineOffset: ".2rem",
                                      color: `${theme.palette.link} !important`,
                                  },
                              }
                            : {}),
                    }}
                >
                    <Typography variant="body1">{t(menuItem.label)}</Typography>
                </Button>
            </MenuItem>
        ));

    return (
        <AppBar
            component="nav"
            position="sticky"
            elevation={trigger ? (isHome ? 0 : 1) : 0}
        >
            <Toolbar
                sx={{
                    flexDirection: isMobile ? "column" : "row",
                    gap: isMobile ? "0" : "5vmax",
                    backgroundColor: theme.palette.background.default,
                }}
            >
                {/* Nom ou titre */}
                <Typography
                    variant="h3"
                    color="primary"
                    sx={{ padding: "1rem" }}
                >
                    {t("name")}
                </Typography>
                {isMobile ? (
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        {/* Bouton de menu */}
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="primary"
                            sx={{ cursor: "pointer" }}
                        >
                            <MenuIcon />
                        </IconButton>
                        {/* Menu déroulant */}
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: "bottom",
                                horizontal: "left",
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: "top",
                                horizontal: "left",
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                ".MuiMenu-paper": {
                                    width: "100%",
                                    minWidth: "100% !important",
                                    maxWidth: "100% !important",
                                    left: "0 !important",
                                    margin: "0",

                                    backgroundColor:
                                        theme.palette.background.default,
                                    textAlign: "center",
                                },
                                [`& .${popoverClasses.paper}`]: {
                                    margin: "0",
                                },
                            }}
                        >
                            {generateMenuButtons(
                                menuNavigation,
                                openModal,
                                handleCloseNavMenu,
                                theme,
                                t,
                                isMobile
                            )}
                            <SocialMenu
                                gap="2rem"
                                justifyContent={
                                    isMobile ? "space-evenly" : "center"
                                }
                            />
                        </Menu>
                    </Box>
                ) : (
                    <Box
                        sx={{
                            flexGrow: "1",
                            display: "flex",
                            alignItems: "center",
                            gap: "1rem",
                        }}
                    >
                        <SocialMenu
                            gap="2rem"
                            justifyContent={
                                isMobile ? "space-evenly" : "center"
                            }
                        />
                        <Box
                            sx={{
                                flexGrow: "1",
                                display: "inline-flex",
                                justifyContent: "flex-end",
                            }}
                        >
                            {generateMenuButtons(
                                menuNavigation,
                                openModal,
                                handleCloseNavMenu,
                                theme,
                                t,
                                isMobile
                            )}
                        </Box>
                    </Box>
                )}
            </Toolbar>
            <ContactModal open={isContactModalOpen} onClose={closeModal} />
        </AppBar>
    );
}
