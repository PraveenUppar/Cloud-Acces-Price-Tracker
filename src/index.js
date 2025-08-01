import React from "react";
import ReactDOM from "react-dom/client";
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import App from "./App";
import { AppProvider } from "./Context/AppContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App></App>
    </AppProvider>
  </React.StrictMode>
);
