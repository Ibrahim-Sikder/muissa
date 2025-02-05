import { createTheme, Theme as MuiTheme } from "@mui/material/styles";
import { PaletteOptions } from "@mui/material/styles";

// Extend the MUI theme to include custom components
declare module "@mui/material/styles" {
  interface Theme {
    customComponents?: {
      MuiPickersCalendarHeader?: {
        styleOverrides?: {
          root?: React.CSSProperties;
        };
      };
      MuiPickersCalendar?: {
        styleOverrides?: {
          root?: React.CSSProperties;
        };
      };
    };
  }
  interface ThemeOptions {
    customComponents?: {
      MuiPickersCalendarHeader?: {
        styleOverrides?: {
          root?: React.CSSProperties;
        };
      };
      MuiPickersCalendar?: {
        styleOverrides?: {
          root?: React.CSSProperties;
        };
      };
    };
  }
}

const palette: PaletteOptions = {
  primary: {
    main: "#00305C",
  },
  secondary: {
    main: "#1591A3",
    light: "#1491A3",
  },
};

const typography = {
  fontFamily: "'Baloo Da 2', 'Roboto', 'Arial', sans-serif",
  body1: {
    color: "#0B1134CC",
  },
};

const customComponents = {
  MuiButton: {
    defaultProps: {
      variant: "contained" as const,
    },
    styleOverrides: {
      root: {
        padding: "8px 24px",
        boxShadow: "none",
      },
    },
  },
  MuiContainer: {
    defaultProps: {
      maxWidth: "lg" as const,
    },
  },
  MuiPickersCalendarHeader: {
    styleOverrides: {
      root: {
        // Add any custom styles here
      },
    },
  },
  MuiPickersCalendar: {
    styleOverrides: {
      root: {
        // Add any custom styles here
      },
    },
  },
};

export const theme = createTheme({
  palette,
  typography,
  components: customComponents,
  customComponents,
});

// Customize shadow
theme.shadows[1] = "0px 5px 22px lightgray";

export type Theme = typeof theme;
