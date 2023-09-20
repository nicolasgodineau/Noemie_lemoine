import React from "react";
import { Container } from "@mui/material";

import { useTheme } from "@mui/material/styles";

import UnifiedMenu from "./Menu.jsx";

export default function Header({ position }) {
    const theme = useTheme();

    return (
        <Container
            component="header"
            disableGutters
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
