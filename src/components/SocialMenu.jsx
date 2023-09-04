import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Box, Container, Icon, Typography, Link } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Instagram from "@mui/icons-material/Instagram";
import Facebook from "@mui/icons-material/Facebook";
import LinkedIn from "@mui/icons-material/LinkedIn";

export default function SocialMenu({ gap }) {
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
        <Box
            sx={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "center",
                gap: gap,
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
                    <Icon sx={{ color: theme.palette.text.primary }}>
                        {iconsList[menuItem.label]}
                    </Icon>
                </Link>
            ))}
        </Box>
    );
}
