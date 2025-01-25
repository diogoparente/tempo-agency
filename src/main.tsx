import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { I18nProvider } from "./lib/i18n";
import { ThemeProvider } from "./lib/theme.tsx";
import "./index.css";

const basename = import.meta.env.BASE_URL;
const App = React.lazy(() => import("./App.tsx"));

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <I18nProvider>
        <ThemeProvider>
          <Suspense fallback={<div className="loading-indicator" />}>
            <App />
          </Suspense>
        </ThemeProvider>
      </I18nProvider>
    </BrowserRouter>
  </React.StrictMode>
);
