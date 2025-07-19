import { createTheme } from "@mui/material";

export const theme =createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#2563eb",
            light: "#60a5fa",
            dark: "#1d4ed8",
            contrastText: "#ffffff"
        },
        secondary: {
            main: "#7c3aed",
            light: "#a78bfa",
            dark: "#5b21b6",
            contrastText: "#ffffff"
        },
        error: {
            main: "#dc2626",
            light: "#f87171",
            dark: "#991b1b"
        },
        warning: {
            main: "#d97706",
            light: "#fbbf24",
            dark: "#92400e"
        },
        success: {
            main: "#059669",
            light: "#34d399",
            dark: "#047857"
        },
        info: {
            main: "#0891b2",
            light: "#22d3ee",
            dark: "#0e7490"
        },
        background: {
           default: "#f8fafc",
           paper: "#ffffff"
        },
        text: {
            primary: "#0f172a",
            secondary: "#475569"
        },
        grey: {
            50: "#f8fafc",
            100: "#f1f5f9",
            200: "#e2e8f0",
            300: "#cbd5e1",
            400: "#94a3b8",
            500: "#64748b",
            600: "#475569",
            700: "#334155",
            800: "#1e293b",
            900: "#0f172a"
        }
    },
     typography: {
            fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
            h1: {
                fontSize: "2.25rem",
                fontWeight: 700,
                lineHeight: 1.2
            },
            h2: {
                fontSize: "1.875rem",
                fontWeight: 600,
                lineHeight: 1.3
            },
            h3: {
                fontSize: "1.5rem",
                fontWeight: 600,
                lineHeight: 1.4
            },
            h4: {
                fontSize: "1.25rem",
                fontWeight: 600,
                lineHeight: 1.4
            },
            h5: {
                fontSize: "1.125rem",
                fontWeight: 600,
                lineHeight: 1.4
            },
            h6: {
                fontSize: "1rem",
                fontWeight: 600,
                lineHeight: 1.4
            },
            body1: {
                fontSize: "1rem",
                lineHeight: 1.5
            },
            body2: {
                fontSize: "0.875rem",
                lineHeight: 1.5
            },
            button: {
                textTransform: "none",
                fontWeight: 500
            },
            caption: {
                fontSize: "0.75rem",
                lineHeight: 1.5
            },
            overline: {
                fontSize: "0.75rem",
                fontWeight: 600,
                letterSpacing: "0.5px",
                lineHeight: 2.5,
                textTransform: "uppercase"
            }
    },
    spacing: 8,
    shape: {
        borderRadius: 8
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    textTransform: "none",
                    fontWeight: 500
                },
                contained: {
                    boxShadow: "none",
                    "&:hover": {
                        boxShadow: "none"
                    }
                }
            },
            defaultProps: {
                disableElevation: true
            }
        },
        MuiTextField: {
            defaultProps: {
                size: "small"
            },
            styleOverrides: {
                root: {
                    borderRadius: 8
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)"
                }
            }
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundImage: "none"
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundImage: "none"
                }
            }
        },
        MuiIconButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8
                }
            }
        },
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    borderRadius: 4
                }
            }
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: "rgba(0, 0, 0, 0.07)"
                }
            }
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: 6
                }
            }
        }
    }
})