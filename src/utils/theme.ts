import { createTheme, Theme } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";

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

const createAppTheme = (preferredTheme: any) => {
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
      MuiButton: {
        styleOverrides: {
          root: {
            color: shades.primary[200],
            background: shades.secondary[200],
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
    },
    palette: {
      mode: preferredTheme,
      primary: {
        main: shades.primary[100],
        light: shades.primary[200],
      },
      secondary: {
        main: shades.secondary[100],
        dark: shades.secondary[200],
      },
    },
  })
  return theme;
}

export default createAppTheme;

