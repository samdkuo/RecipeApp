import React, { lazy } from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

const App = lazy(() => import("./App"));

render(
  // <ThemeProvider initialMode={colorScheme} theme={theme}>
  //   <Suspense fallback={<FullScreenLoader />}>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  //   </Suspense>
  // </ThemeProvider>,
  document.getElementById("root")
);
