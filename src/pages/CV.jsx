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
import Layout from "../Layouts/Layout.jsx";

export default function Cv() {
    const { t } = useTranslation();
    const theme = useTheme();

    const maxWidth = theme.breakpoints.values.lg;
    const cvData = t("cv", {
        returnObjects: true,
    });

    const formatTextWithLink = (item) => {
        if (item.linkText && item.text && item.text.includes(item.linkText)) {
            const parts = item.text.split(item.linkText);
            return (
                <Typography variant="subtitle1">
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
            return <Typography variant="subtitle1">{item.text}</Typography>;
        }
    };

    return (
        <Layout h1="cv.title" maxWidth={maxWidth}>
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
                {cvData.section.map((section, sectionIndex) => (
                    <Box
                        key={sectionIndex}
                        sx={{
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
                                                <Typography
                                                    component="li"
                                                    variant="subtitle1"
                                                    key={itemIndex}
                                                    sx={{
                                                        paddingLeft: "2rem",
                                                        listStyle:
                                                            "disc !important",
                                                        [theme.breakpoints.down(
                                                            "sm"
                                                        )]: {
                                                            paddingLeft: "1rem",
                                                        },
                                                    }}
                                                >
                                                    {typeof item === "object"
                                                        ? formatTextWithLink(
                                                              item
                                                          )
                                                        : item}
                                                </Typography>
                                            )
                                        )}
                                    </Box>
                                </Box>
                            )
                        )}
                    </Box>
                ))}
            </Container>
        </Layout>
    );
}
