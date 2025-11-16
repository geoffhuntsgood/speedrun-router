import { colors, createTheme } from "@mui/material";

const primary = colors.grey[900];
const border = colors.grey[700];
const background = "#141414";

export const theme = createTheme({
  components: {
    MuiAccordion: {
      styleOverrides: {
        root: {
          margin: "2rem auto",
          border: `2px solid ${border}`
        }
      }
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          backgroundColor: background
        }
      }
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          backgroundColor: background,
          overflowY: "auto"
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        text: {
          width: "95%",
          height: "100%",
          fontSize: "2rem",
          "&:hover": {
            backgroundColor: border
          }
        }
      }
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          width: "70%",
          overflowX: "hidden",
          color: "white",
          backgroundColor: "rgb(0, 0, 50)",
          border: "2px solid white"
        }
      }
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          maxWidth: "90%"
        }
      }
    },
    MuiGrid: {
      styleOverrides: {
        container: {
          width: "90vw",
          height: "85vh",
          overflowX: "hidden",
          overflowY: "auto",
          margin: "0 auto"
        }
      }
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: primary,
          marginLeft: "1rem",
          marginTop: "-5px",
          height: "2rem",
          width: "2rem",
          "&:hover": {
            backgroundColor: "white"
          }
        }
      }
    }
  },
  palette: {
    text: {
      primary: primary
    }
  },
  typography: {
    fontFamily: "Jersey10",
    fontSize: 16,
    h1: {
      width: "100%",
      fontSize: "3rem",
      fontWeight: "bold",
      backgroundColor: "rgb(0, 0, 50)"
    },
    h2: {
      padding: "10px",
      fontSize: "1.5rem",
      fontWeight: "bold"
    },
    h3: {
      color: "white"
    }
  },
  spacing: 8
});
