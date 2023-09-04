import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Box, Container, Icon, Typography, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SocialMenu from "./SocialMenu.jsx";
import ContactModal from "./ContactModal.jsx";

export default function DesktopMenu({ position }) {
    const { t } = useTranslation();
    const theme = useTheme();
    const menuNavigation = t("menuNavigation", { returnObjects: true });
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const openModal = () => {
        setIsContactModalOpen(true);
    };

    const closeModal = () => {
        setIsContactModalOpen(false);
    };
    return (
        <Container
            component="nav"
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
                <SocialMenu gap=".5rem" />
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
                    <NavLink
                        key={index}
                        to={menuItem.url}
                        onClick={
                            menuItem.label === "Contact" ? openModal : null
                        }
                    >
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
                <ContactModal open={isContactModalOpen} onClose={closeModal} />
            </Box>
        </Container>
    );
}
