import React from "react";

import { Modal, Box } from "@mui/material";

import { useTheme } from "@mui/material/styles";
import ContactForm from "./ContactForm.jsx";
import SocialMenu from "./SocialMenu.jsx";

export default function ContactModal({ open, onClose }) {
    const theme = useTheme();

    return (
        <Box sx={{ alignSelf: "center" }}>
            <Modal
                open={open}
                onClose={onClose}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backdropFilter: "blur(20px)",
                    backgroundColor: theme.palette.background.transparent,
                    padding: "2rem",
                    [theme.breakpoints.down("sm")]: {
                        padding: "1rem",
                    },
                }}
            >
                <Box
                    sx={{
                        width: "400px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        backgroundColor: theme.palette.background.default,
                        border: `2px solid ${theme.palette.primary.main}`,
                        boxShadow: theme.shadows[5],
                    }}
                >
                    <ContactForm onClose={onClose} />
                    <SocialMenu />
                </Box>
            </Modal>
        </Box>
    );
}
