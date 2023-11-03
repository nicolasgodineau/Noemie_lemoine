import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import grey from "@mui/material/colors/grey";
let theme = createTheme({
    breakpoints: {
        values: {
            xxs: 320,
            xs: 320, // Extra small devices (portrait phones)
            xsm: 480,
            sm: 600, // Small devices (landscape phones)
            smd: 750,
            md: 960, // Medium devices (tablets)
            lg: 1280, // Large devices (desktops)
            xl: 1920, // Extra large devices (large desktops)
        },
    },
    palette: {
        main: "#bba590",
        text: {
            primary: "#BAAAA2",
            secondary: "#bba590",
            white: "white",
        },
        primary: {
            main: "#BAAAA2",
        },
        secondary: {
            main: grey[50],
        },
        background: {
            default: "white",
            transparent: "#fafafa7a",
        },
        button: {
            main: "black",
            contrastText: grey[50],
        },
        accent: "black",
        nav: "#fafafa7a",
        linkActive: "#01579b",
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
