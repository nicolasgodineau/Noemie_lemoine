import React from "react";
import {
    Typography,
    List,
    ListItem,
    ListItemText,
    Paper,
    Link,
    Container,
    Box,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";

export default function Cv({ data }) {
    const { t } = useTranslation();
    const theme = useTheme();
    const cvData = t("cv", {
        returnObjects: true,
    });

    // Fonction pour analyser le texte et appliquer les liens aux parties entre **
    const formatTextWithLinks = (text, link) => {
        const parts = text.split("**");
        return (
            <Typography>
                {parts.map((part, index) =>
                    index % 2 === 1 ? (
                        <Link
                            key={index}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {part}
                        </Link>
                    ) : (
                        part
                    )
                )}
            </Typography>
        );
    };

    return (
        <Container
            component="section"
            maxWidth="lg"
            sx={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                alignContent: "top",
                alignItems: "center",
                justifyContent: "center",
                [theme.breakpoints.down("md")]: {
                    flexDirection: "column",
                    alignItems: "center",
                },
            }}
        >
            <Typography
                component="h2"
                variant="h2"
                sx={{
                    fontWeight: 400,
                    textAlign: "center",
                    textTransform: "capitalize",
                }}
            >
                {cvData.title}
            </Typography>
            {cvData.section.map((section, sectionIndex) => (
                <Box
                    key={sectionIndex}
                    sx={{
                        maxWidth: "70ch",
                        display: "flex",
                        flexDirection: "column",
                        gap: "2rem",
                    }}
                >
                    {Object.keys(section).map(
                        (subsectionKey, subsectionIndex) => (
                            <Box
                                key={subsectionIndex}
                                sx={{ paddingY: "1rem" }}
                            >
                                <Typography
                                    variant="h4"
                                    gutterBottom
                                    sx={{
                                        fontWeight: "bold",
                                        textDecoration: "underline",
                                        textUnderlineOffset: "0.2rem",
                                    }}
                                >
                                    {section[subsectionKey].title}
                                </Typography>
                                {Object.keys(section).map(
                                    (subsectionKey, subsectionIndex) => (
                                        <Box key={subsectionIndex}>
                                            <Typography
                                                variant="h6"
                                                gutterBottom
                                            >
                                                {section[subsectionKey].title}
                                            </Typography>
                                            <ul>
                                                {section[
                                                    subsectionKey
                                                ].items.map(
                                                    (item, itemIndex) => (
                                                        <li key={itemIndex}>
                                                            {typeof item ===
                                                            "object" ? (
                                                                <Typography>
                                                                    <Link
                                                                        href={
                                                                            item.link
                                                                        }
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                    >
                                                                        {
                                                                            item.linkText
                                                                        }
                                                                    </Link>
                                                                    {
                                                                        item.remainingText
                                                                    }
                                                                </Typography>
                                                            ) : (
                                                                item
                                                            )}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </Box>
                                    )
                                )}
                            </Box>
                        )
                    )}
                </Box>
            ))}
        </Container>
    );
}
