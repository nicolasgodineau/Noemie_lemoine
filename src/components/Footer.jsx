import { Container, Typography, Button, MenuItem } from "@mui/material";
import React from "react";
import SocialMenu from "./SocialMenu.jsx";
import { useTheme } from "@mui/material/styles";
import { NavLink } from "react-router-dom";
export default function Footer() {
    const theme = useTheme();
    return (
        <Container
            component="footer"
            disableGutters={false}
            maxWidth="sm"
            sx={{
                paddingY: "1rem",
                display: "flex",
                gap: "1rem",
                alignContent: "center",
                alignItems: "center",
                justifyContent: "center",
                [theme.breakpoints.down("xsm")]: {
                    flexDirection: "column-reverse",
                    gap: ".5rem",
                    paddingY: ".5rem",
                },
            }}
        >
            <Typography>Noëmie Lemoine – make-up artist</Typography>
            <Button
                component={NavLink}
                aria-controls="button"
                aria-label="button navigation"
                to="/mention_legales"
                color="primary"
                sx={{
                    textTransform: "none",
                    ":hover": {
                        bgcolor: "unset",
                        textDecoration: "underline",
                        textUnderlineOffset: "0.2rem",
                        color: `${theme.palette.link} !important`,
                    },
                }}
            >
                <Typography variant="body1">Mentions légales</Typography>
            </Button>
            <SocialMenu gap="1rem" />
        </Container>
    );
}
