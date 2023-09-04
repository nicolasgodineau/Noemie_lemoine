import { Container, Typography } from "@mui/material";
import React from "react";
import SocialMenu from "./SocialMenu.jsx";

export default function Footer() {
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
            }}
        >
            <Typography>Noëmie Lemoine – make-up artist</Typography>
            <SocialMenu gap="1rem" />
        </Container>
    );
}
