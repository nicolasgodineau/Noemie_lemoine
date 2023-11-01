import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useForm, Controller } from "react-hook-form";
import Confetti from "react-dom-confetti";
import { Button, Box, Typography, TextField, FormControl } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import { useTheme } from "@mui/material/styles";

export default function ContactForm({ onClose }) {
    const { t } = useTranslation();
    const [isConfettiActive, setConfettiActive] = useState(false);
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
            errors.email = "Invalid email address";
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

        fetch(
            "https://public.herotofu.com/v1/251f3e60-6d06-11ee-8bcd-4fcc9e7e7286",
            {
                method: "POST",
                body: formData,
            }
        ).catch((error) => {
            console.log("error:", error);
        });
        setIsFormSubmitted(true); // Met à jour l'état pour indiquer que le formulaire a été soumis
        reset(); // Réinitialise les valeurs du formulaire à leurs valeurs par défaut
        setConfettiActive(true);

        // Réinitialiser l'animation après une courte durée
        setTimeout(() => {
            setConfettiActive(false);
            onClose(); // Fermer la modal
        }, 2000); // Durée en millisecondes de l'animation de confettis puis ferme la modale
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
                                margin="normal"
                                error={Boolean(errors.name)}
                                helperText={errors.name && errors.name.message}
                                {...field}
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
                                margin="normal"
                                error={Boolean(errors.name)}
                                helperText={errors.name && errors.name.message}
                                {...field}
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
                                message: t("contact.field.invalideEmail"),
                            },
                        }}
                        render={({ field }) => (
                            <TextField
                                label="Email"
                                fullWidth
                                margin="normal"
                                error={Boolean(errors.email)}
                                helperText={
                                    errors.email && errors.email.message
                                }
                                {...field}
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
                                margin="normal"
                                error={Boolean(errors.phone)}
                                helperText={
                                    errors.phone && errors.phone.message
                                }
                                {...field}
                            />
                        )}
                    />
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Controller
                            name="date"
                            control={control}
                            defaultValue={null}
                            rules={{
                                required: t("contact.field.required"),
                            }}
                            render={({ field }) => (
                                <DatePicker
                                    label={t("contact.field.date")}
                                    {...field}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            // Formate la date au format souhaité, par exemple "DD/MM/YYYY"
                                            value={
                                                params.value
                                                    ? params.value.format(
                                                          "DD/MM/YYYY"
                                                      )
                                                    : ""
                                            }
                                        />
                                    )}
                                    sx={{ width: "100%" }}
                                    error={Boolean(errors.date)}
                                    helperText={
                                        errors.date && errors.date.message
                                    }
                                />
                            )}
                        />
                    </LocalizationProvider>
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
                                margin="normal"
                                multiline
                                rows={4}
                                error={Boolean(errors.message)}
                                helperText={
                                    errors.message && errors.message.message
                                }
                                {...field}
                            />
                        )}
                    />
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                            flexDirection: "column",
                        }}
                    >
                        <Confetti active={isConfettiActive} />
                    </Box>
                    <Button
                        type="submit"
                        sx={{
                            width: "100%",
                            padding: "12px 44px",
                            borderRadius: 0,
                            backgroundColor: theme.palette.primary.main,
                            border: `2px solid ${theme.palette.primary.main}`,
                            color: theme.palette.secondary.main,
                            ":hover": {
                                cursor: "pointer",
                                color: theme.palette.primary.main,
                                backgroundColor: theme.palette.secondary.main,
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
