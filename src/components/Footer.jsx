import { Container, Typography } from "@mui/material";
import React from "react";
import SocialMenu from "./SocialMenu.jsx";
import { useTheme } from "@mui/material/styles";
export default function Footer() {
    const theme = useTheme();
    return (
        <Container
            component="footer"
            disableGutters={false}
            maxWidth="sm"
            fixed
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
            <SocialMenu gap="1rem" />
        </Container>
    );
}
