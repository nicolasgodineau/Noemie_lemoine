import { createTheme } from "@mui/material/styles";

const theme = createTheme({
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
        },
    },
});

export default theme;
