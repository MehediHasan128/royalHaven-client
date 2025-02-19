import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import router from "./routes/main.routes.tsx";
import { RouterProvider } from "react-router-dom";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";


let theme = createTheme();
theme = responsiveFontSizes(theme);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
);
