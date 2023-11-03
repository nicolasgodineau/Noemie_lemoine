import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useForm, Controller } from "react-hook-form";
import { Button, Box, Typography, TextField, FormControl } from "@mui/material";

import { useTheme } from "@mui/material/styles";

export default function ContactForm({ onClose }) {
    const { t } = useTranslation();
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const theme = useTheme();

    const validate = (values) => {
        const errors = {};
        const requiredFields = [
            "name",
            "last_name",
            "email",
            "message",
            "phone",
        ];
        requiredFields.forEach((field) => {
            if (!values[field]) {
                errors[field] = "Required";
            }
        });
        if (
            values.email &&
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
        ) {
            errors.email = "Adresse mail invalide";
        }

        // Vérification de la date pour s'assurer qu'elle n'est pas dans le passé
        if (values.date) {
            const selectedDate = new Date(values.date);
            const today = new Date(); // Date actuelle
            today.setHours(0, 0, 0, 0);

            if (selectedDate < today) {
                errors.date = "La date ne peut pas être dans le passé";
            }
        }

        return errors;
    };

    const {
        handleSubmit,
        control,
        reset,
        formState: { errors },
    } = useForm({ validate });

    const onSubmit = (data) => {
        const formData = new FormData();
        Object.keys(data).forEach((key) => {
            formData.append(key, data[key]);
        });

        fetch(process.env.REACT_APP_FORMSPREE_ENDPOINT, {
            method: "POST",
            body: formData,
        }).catch((error) => {
            console.log("error:", error);
        });
        setIsFormSubmitted(true); // Met à jour l'état pour indiquer que le formulaire a été soumis
        reset(); // Réinitialise les valeurs du formulaire à leurs valeurs par défaut

        // Réinitialiser l'animation après une courte durée
        setTimeout(() => {
            onClose(); // Fermer la modal
        }, 2000); // Durée en millisecondes puis ferme la modale
    };

    // Fonction pour mettre à jour les dimensions de l'élément cible
    const [elementDimensions, setElementDimensions] = useState({
        width: 281, // Valeur par défaut de la largeur
        height: 426, // Valeur par défaut de la hauteur
    });

    const targetElementRef = useRef(null);

    const updateDimensions = () => {
        if (targetElementRef.current) {
            const { width, height } =
                targetElementRef.current.getBoundingClientRect();
            setElementDimensions({ width, height });
        }
    };

    // Appele la fonction updateDimensions lorsque le composant est monté
    useEffect(() => {
        updateDimensions();
    }, []);
    return (
        <FormControl component="form" onSubmit={handleSubmit(onSubmit)}>
            {isFormSubmitted ? (
                <Box
                    ref={targetElementRef}
                    sx={{
                        width: `${elementDimensions.width}px`,
                        height: `${elementDimensions.height}px`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        flexDirection: "column",
                        padding: "1rem",
                    }}
                >
                    <Typography variant="h6" color={theme.palette.primary.main}>
                        {t("contact.field.sendSucces")}
                    </Typography>
                </Box>
            ) : (
                <Box
                    ref={targetElementRef}
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-evenly",
                        flexDirection: "column",
                        gap: 2,
                        padding: "1rem",
                        [theme.breakpoints.down("sm")]: {
                            paddingY: "0",
                            gap: "1vmin",
                            width: "100%",
                        },
                        [theme.breakpoints.down("md")]: {
                            height: "100%",
                        },
                    }}
                >
                    <Typography variant="h6">
                        {t("contact.field.title")}
                    </Typography>

                    <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: t("contact.field.required"),
                        }}
                        render={({ field }) => (
                            <TextField
                                label={t("contact.field.name")}
                                fullWidth
                                margin="none"
                                size="small"
                                required
                                error={Boolean(errors.name)}
                                helperText={errors.name && errors.name.message}
                                {...field}
                                sx={{
                                    [theme.breakpoints.down("sm")]: {
                                        margin: "0px",
                                    },
                                }}
                            />
                        )}
                    />
                    <Controller
                        name="last_name"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: t("contact.field.required"),
                        }}
                        render={({ field }) => (
                            <TextField
                                label={t("contact.field.lastName")}
                                fullWidth
                                margin="none"
                                size="small"
                                required
                                error={Boolean(errors.name)}
                                helperText={errors.name && errors.name.message}
                                {...field}
                                sx={{
                                    [theme.breakpoints.down("sm")]: {
                                        padding: "0",
                                        margin: "0px",
                                    },
                                }}
                            />
                        )}
                    />
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: t("contact.field.required"),
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: t("Adresse mail invalide"),
                            },
                        }}
                        render={({ field }) => (
                            <TextField
                                label={t("contact.field.email")}
                                fullWidth
                                margin="none"
                                size="small"
                                required
                                error={Boolean(errors.email)}
                                helperText={
                                    errors.email && errors.email.message
                                }
                                {...field}
                                sx={{
                                    [theme.breakpoints.down("sm")]: {
                                        margin: "0px",
                                    },
                                }}
                            />
                        )}
                    />
                    <Controller
                        name="phone"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: t("contact.field.required"),
                        }}
                        render={({ field }) => (
                            <TextField
                                label={t("contact.field.phoneNumber")}
                                fullWidth
                                margin="none"
                                size="small"
                                required
                                id="outlined-required"
                                {...field}
                                sx={{
                                    [theme.breakpoints.down("sm")]: {
                                        margin: "0px",
                                    },
                                }}
                            />
                        )}
                    />
                    <Controller
                        name="message"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: t("contact.field.required"),
                        }}
                        render={({ field }) => (
                            <TextField
                                label="Message"
                                fullWidth
                                margin="none"
                                size="small"
                                required
                                multiline
                                rows={2}
                                error={Boolean(errors.message)}
                                helperText={
                                    errors.message && errors.message.message
                                }
                                {...field}
                                sx={{
                                    [theme.breakpoints.down("sm")]: {
                                        margin: "0px",
                                    },
                                }}
                            />
                        )}
                    />
                    <Button
                        type="submit"
                        sx={{
                            width: "100%",
                            padding: "12px 44px",
                            backgroundColor: theme.palette.primary.main,
                            border: `2px solid ${theme.palette.primary.main}`,
                            color: theme.palette.secondary.main,
                            ":hover": {
                                cursor: "pointer",
                                color: theme.palette.primary.main,
                                backgroundColor: theme.palette.secondary.main,
                            },
                            [theme.breakpoints.down("sm")]: {
                                marginTop: "0.5rem",
                                padding: "0.5rem",
                            },
                        }}
                        variant="text"
                    >
                        {t("contact.field.submit")}
                    </Button>
                </Box>
            )}
        </FormControl>
    );
}
