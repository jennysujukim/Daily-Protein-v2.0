import { createTheme, colors } from "@mui/material";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 640,
            md: 1024,
            lg: 1280,
            xl: 1536
        }
    },
    palette: {
        primary: {
            main: colors.deepOrange[500],
            light: colors.deepOrange[100],
            dark: colors.deepOrange[800]
        },
        secondary: {
            main: colors.grey[700],
            light: colors.grey[50]
        },
    },
    typography: {
        fontFamily: [ 'Roboto, sans-serif'].join(','),
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
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    fontSize: "0.8rem",
                    paddingBottom: "0.2rem"
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    paddingBottom: "1.5rem"
                }
            }
        }
    }
})

theme.typography.h2 = {
    fontSize: "2.5rem",
    lineHeight: 1.2,
    textAlign: "center",
    [theme.breakpoints.up('sm')]: {
        textAlign: "left"
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "3rem",
    },
    [theme.breakpoints.up('xl')]: {
        fontSize: "3.5rem",
    }
}