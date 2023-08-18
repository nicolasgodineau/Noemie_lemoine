import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
    breakpoints: {
        values: {
            xs: 0, // Extra small devices (portrait phones)
            sm: 600, // Small devices (landscape phones)
            md: 960, // Medium devices (tablets)
            lg: 1280, // Large devices (desktops)
            xl: 1920, // Extra large devices (large desktops)
        },
    },
    palette: {
        text: {
            primary: "#BAAAA2",
            secondary: "#bba590",
            white: "white",
        },
        background: "#E7D8D3",
    },
});
theme = responsiveFontSizes(theme);

/* Mémo des variants typo */
/* 

    h1
    h2
    h3
    h4
    h5
    h6
    subtitle1
    subtitle2
    body1
    body2
    button
    caption
    overline

*/

export default theme;
