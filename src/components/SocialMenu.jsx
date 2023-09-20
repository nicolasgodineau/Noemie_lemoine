import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { Icon, Stack, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Instagram from "@mui/icons-material/Instagram";
import Facebook from "@mui/icons-material/Facebook";
import LinkedIn from "@mui/icons-material/LinkedIn";

export default function SocialMenu({ gap, justifyContent }) {
    const { t } = useTranslation();
    const theme = useTheme();
    const menuSocial = t("menuSocial", { returnObjects: true });
    console.log("menuSocial:", menuSocial);

    const iconsList = {
        Instagram: <Instagram />,
        Facebook: <Facebook />,
        LinkedIn: <LinkedIn />,
    };
    return (
        <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="space-evenly"
        >
            {menuSocial.map((menuItem, index) => (
                <IconButton
                    component={NavLink}
                    key={index}
                    to={menuItem.url}
                    aria-label={menuItem.label}
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
                </IconButton>
            ))}
        </Stack>
    );
}
