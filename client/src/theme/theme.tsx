import { createTheme, colors } from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const theme = createTheme({

    palette: {
        primary: {
            main: colors.deepOrange[500],
            light: colors.deepOrange[100],
            dark: colors.deepOrange[800]
        },
        secondary: {
            main: colors.grey[700]
        }
    },
    typography: {
        fontFamily: [
            'Roboto, sans-serif',
        ].join(',')
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontFamily: "Roboto, sans-serif",
                }
            }
        },
        MuiLinearProgress: {
            styleOverrides: {
                root: {
                    height: "8px",
                }
            }
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    backgroundColor: colors.grey[700]
                }
            }
        }
    }
})