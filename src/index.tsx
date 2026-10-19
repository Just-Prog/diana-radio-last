/* @refresh reload */
import "solid-devtools";
import "./index.css";
import { HashRouter } from "@solidjs/router";
import { render, Suspense } from "solid-js/web";

import App from "./app";
import { routes } from "./routes";

const root = document.querySelector("#root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(
  () => (
    <HashRouter root={(props) => <App>{props.children}</App>}>
      {routes}
    </HashRouter>
  ),
  root
);
