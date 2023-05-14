import { alpha, createTheme, Theme } from "@mui/material/styles";
import { grey, blueGrey } from "@mui/material/colors";
import { PaletteMode } from "@mui/material";

const shades = {
  primary: {
    100: "#000000",
    200: "#555555",
  },
  secondary: {
    100: "#e9e9e9",
    200: "#c4c4c4",
  }
}

const darkModeTheme = {
  primary: {
    main: grey[900],
  },
  secondary: {
    main: grey[900],
  },
  background: {
    default: grey[800],
  },
  text: {
    primary: grey[200],
    secondary: blueGrey[200]
  },
}

const lightModeTheme = {
  primary: {
    main: grey[100],
  },
  secondary: {
    main: blueGrey[100],
  },
  background: {
    default: blueGrey[50],
  },
  text: {
    primary: grey[700],
    secondary: blueGrey[700],
  }
}

const createAppTheme = (preferredTheme: PaletteMode) => {
  const theme: Theme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            textTransform: "capitalize",
          }
        }
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            fontWeight: 600,
          }
        }
      },
      MuiSkeleton: {
        styleOverrides: {
          root: {
            filter: "blur(1px)",
            background: alpha(shades.secondary[200], 0.5),
            width: "auto",
            margin: " 0 .5rem",
            height: "inherit",
          }
        }
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            fontSize: "2.2rem",
          }
        }
      },
      MuiGrid: {
        styleOverrides: {
          container: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }
        }
      },
      MuiLink: {
        styleOverrides: {
          root: {
            textDecoration: "none",
          }
        }
      }
    },
    palette: {
      mode: preferredTheme,
      ...(preferredTheme === "dark" ? darkModeTheme : lightModeTheme),
    },
  })
  return theme;
}

export default createAppTheme;

