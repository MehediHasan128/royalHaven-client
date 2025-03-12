import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import router from "./routes/main.routes.tsx";
import { RouterProvider } from "react-router-dom";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material";
import { PhotoProvider } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";

let theme = createTheme();
theme = responsiveFontSizes(theme);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PhotoProvider>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <RouterProvider router={router} />
        </Provider>
      </ThemeProvider>
    </PhotoProvider>
  </StrictMode>
);
