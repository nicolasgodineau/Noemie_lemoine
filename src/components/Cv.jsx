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

    const formatTextWithLink = (item) => {
        if (item.linkText && item.text && item.text.includes(item.linkText)) {
            const parts = item.text.split(item.linkText);
            return (
                <Typography>
                    {parts[0]}
                    <Link
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            color: "#b3a7f9",
                            fontWeight: "bold",
                        }}
                    >
                        {item.linkText}
                    </Link>
                    {parts[1]}
                </Typography>
            );
        } else {
            return <Typography>{item.text}</Typography>;
        }
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
                    <Typography
                        variant="h4"
                        gutterBottom
                        sx={{
                            fontWeight: "bold",
                            textDecoration: "underline",
                            textUnderlineOffset: "0.2rem",
                        }}
                    >
                        {section.title}
                    </Typography>
                    {Object.keys(section).map(
                        (subsectionKey, subsectionIndex) => (
                            <Box key={subsectionIndex}>
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
                                <Box
                                    component="ul"
                                    sx={{
                                        paddingLeft: "2rem",
                                        listStyle: "disc !important",
                                        [theme.breakpoints.down("sm")]: {
                                            paddingLeft: "1rem",
                                        },
                                    }}
                                >
                                    {section[subsectionKey].items.map(
                                        (item, itemIndex) => (
                                            <li key={itemIndex}>
                                                {typeof item === "object"
                                                    ? formatTextWithLink(item)
                                                    : item}
                                            </li>
                                        )
                                    )}
                                </Box>
                            </Box>
                        )
                    )}
                </Box>
            ))}
        </Container>
    );
}
