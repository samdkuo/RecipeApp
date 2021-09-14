import React, { lazy, Suspense } from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

const App = lazy(() => import("./App"));

// const colorScheme =
//   (localStorage.getItem("colorScheme") as ThemeMode) ?? "dark";
// const themeName = localStorage.getItem("themeName") ?? "smartrent";
// const theme = (themes as any)[themeName];

render(
  // <ThemeProvider initialMode={colorScheme} theme={theme}>
  <Suspense fallback={<div>loading...</div>}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>,
  // </ThemeProvider>,
  document.getElementById("root")
);
