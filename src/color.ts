import { createTheme } from '@mui/material/styles';
import { teal,lightBlue } from "@mui/material/colors";

interface PaletteColor {
    light?: string;
    main: string;
    dark?: string;
    contrastText?: string;
}

const theme = createTheme({
    palette: {
        primary: {
            main: lightBlue[200],
        },
        text: {
            primary: teal[900],
            secondary: lightBlue[900],
        },
    }
});

export default theme;