import React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Fab, Zoom, useScrollTrigger } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function BackToTop() {
    const theme = useTheme();
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    return (
        <Zoom in={trigger}>
            <Box
                onClick={handleClick}
                role="BackToTop"
                sx={{
                    position: "fixed",
                    bottom: "4vh",
                    right: "2vw",
                    borderRadius: "9999px",
                    zIndex: "99999",
                    backdropFilter: "blur(100px)",
                }}
            >
                <Fab
                    size="large"
                    aria-label="scroll back to top"
                    sx={{
                        fontSize: "11px",
                        padding: "0",
                        backgroundColor: "#BAAAA2",
                        border: `2px solid #fafafa7a`,
                        color: "#fafafa7a",
                        ":hover": {
                            color: "white",
                            backgroundColor: theme.palette.text.secondary,
                        },
                    }}
                >
                    <KeyboardArrowUpIcon />
                </Fab>
            </Box>
        </Zoom>
    );
}
