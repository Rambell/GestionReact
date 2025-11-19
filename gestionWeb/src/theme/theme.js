import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
            background: { default: "#f5f5f5" }
          }
        : {
            background: { default: "#121212" }
          }),
    },
    components: {
      MuiAppBar: { styleOverrides: { root: { boxShadow: "none" } } },
    },
  });
  