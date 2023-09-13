import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import ContactModal from "./ContactModal.jsx";
import SocialMenu from "./SocialMenu.jsx";

export default function MobileMenu() {
    // Initialisation de hooks et récupération de traductions
    const { t } = useTranslation();
    const theme = useTheme();
    const menuNavigation = t("menuNavigation", { returnObjects: true });
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    // Fonctions pour ouvrir et fermer la modal de contact
    const openModal = () => setIsContactModalOpen(true);
    const closeModal = () => setIsContactModalOpen(false);

    // Gestion des états pour le menu et la modal de contact
    const [anchorElNav, setAnchorElNav] = useState(null);

    // Gestionnaire d'ouverture du menu
    const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);

    // Gestionnaire de fermeture du menu
    const handleCloseNavMenu = () => setAnchorElNav(null);

    return (
        <AppBar
            component="nav"
            position="static"
            elevation={trigger ? 1 : 0}
            sx={{}}
        >
            <Toolbar
                sx={{
                    flexDirection: "column",
                    paddingY: ".5rem",
                    backgroundColor: theme.palette.background.default,
                }}
            >
                {/* Nom ou titre */}
                <Typography variant="h3" color="primary">
                    {t("name")}
                </Typography>
                <Box
                    sx={{
                        flexGrow: 1,
                        display: { xs: "flex", md: "none" },
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
                            display: {
                                xs: "block",
                                md: "none",
                            },
                            ".css-t86q1k-MuiPaper-root-MuiPopover-paper-MuiMenu-paper":
                                {
                                    width: "100%",
                                    borderRadius: "0",
                                    backgroundColor:
                                        theme.palette.background.default,
                                    textAlign: "center",
                                },
                        }}
                    >
                        {/* Création des éléments de menu à partir des données de navigation */}
                        {menuNavigation.map((menuItem, index) => (
                            <MenuItem
                                component="li"
                                key={index}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    justifyContent: "center",
                                    marginY: ".5rem",
                                }}
                            >
                                {/* Lien vers la page correspondante avec gestion de la modal */}
                                <NavLink
                                    key={index}
                                    to={menuItem.url}
                                    onClick={
                                        menuItem.label === "Contact"
                                            ? openModal
                                            : null
                                    }
                                >
                                    {/* Libellé du menu */}
                                    <Typography
                                        component="a"
                                        variant="h5"
                                        key={index}
                                        color="primary"
                                    >
                                        {t(menuItem.label)}
                                    </Typography>
                                </NavLink>
                            </MenuItem>
                        ))}
                        <SocialMenu gap="2rem" />
                    </Menu>
                </Box>
            </Toolbar>
            {/* Modal de contact */}
            <ContactModal open={isContactModalOpen} onClose={closeModal} />
        </AppBar>
    );
}
