import { A, useLocation } from "@solidjs/router";
import { Suspense } from "solid-js";
import type { Component } from "solid-js";

const App: Component<{ children: Element }> = (props) => (
  <>
    <Suspense>{props.children}</Suspense>
  </>
);

export default App;
