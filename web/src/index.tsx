import React, { lazy, Suspense } from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

const App = lazy(() => import("./App"));

render(
  <Suspense fallback={<div>loading...</div>}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>,
  document.getElementById("root")
);
