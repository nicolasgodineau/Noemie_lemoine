import React from "react";
import { Typography, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Layout from "../Layouts/Layout.jsx";

export default function MentionLegales() {
    const theme = useTheme();

    const maxWidth = theme.breakpoints.values.lg;

    return (
        <Layout h1="mentionsLegales.title" maxWidth={maxWidth}>
            <Container
                component="section"
                maxWidth="lg"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                    alignContent: "top",
                    [theme.breakpoints.down("md")]: {
                        flexDirection: "column",
                        alignItems: "center",
                    },
                }}
            >
                <Typography
                    variant="h3"
                    gutterBottom
                    sx={{
                        fontWeight: "bold",
                        textDecoration: "underline",
                        textUnderlineOffset: "0.2rem",
                    }}
                >
                    Service de communication au public en ligne
                </Typography>
                <Typography variant="body1">
                    La loi pour la Confiance dans l’Economie Numérique du 21
                    juin 2004, article 6.III-1 impose à toute personne physique
                    ou morale dont l’activité est d’éditer un service de
                    communication au public en ligne, de communiquer différents
                    éléments d’identification.
                </Typography>
                <Typography variant="h4">Identité</Typography>
                <Typography>
                    Noëmie Lemoine <br /> 215 rue Frédéric Sévène
                    <br /> Res. St Michel Bat C appt 202
                    <br /> 33400 Talence
                    <br /> TEL 06.67.86.30.21
                    <br /> Identifiants Siret : 79300114000029 <br />
                    Code APE : 9602B – Soins de beauté
                    <br />
                    Artisan
                    <br /> Franchise en base de TVA (net de taxe) – TVA non
                    applicable – article 293 B du CGI
                </Typography>
                <Typography variant="h4">
                    Code de la propriété intellectuelle
                </Typography>
                <Typography>
                    – Tous les droits de reproduction sont réservés – <br />
                    <br />
                    Tous les éléments du site sont la propriété de NOËMIE
                    LEMOINE Conformément à la loi 92-597 du 01.07.1992 – Article
                    122-4 « Toute représentation ou reproduction intégrale ou
                    partielle faite sans le consentement de l’auteur ou de ses
                    ayants droit ou ayants cause est illicite. Il en est de même
                    pour la traduction, l’adaptation ou la transformation,
                    l’arrangement ou la reproduction par un art ou un procédé
                    quelconque. »<br />
                    <br /> NOËMIE LEMOINE ne peut être tenu responsable de tout
                    dommage direct ou indirect pouvant résulter de votre visite
                    sur ce site.
                </Typography>
                <Typography variant="h4">SITE WEB – Noëmie Lemoine</Typography>
                <Typography>
                    Maquilleuse professionnelle <br />
                    En application de l’article 93-2 de la loi du 29 juillet
                    1982 sur la communication audiovisuelle.
                    <br />
                    Dénomination : Noëmie Lemoine <br />
                    Nom – Prénom : Lemoine Noëmie <br />
                    Inscription au registre des métiers, identifiant N° :
                    793001140029 <br />
                    Siège social : 215 rue Frédéric Sévène 33400 Talence <br />
                    Tel 06.67.86.30.21 Mail noemielemoine@hotmail.fr <br />
                    Hébergeur du site : <br />
                    Le site Noëmie Lemoine est hébergé par : OVH <br />
                    OVH HEBERGEMENT INC <br />
                    <br />
                    Adresse : 1801, avenue McGill College, Montréal (Québec) H3A
                    2N4, Canada
                </Typography>
            </Container>
        </Layout>
    );
}
