import type { RouteDefinition } from "@solidjs/router";
import { lazy } from "solid-js";

import AppMain from "./pages/main";

export const routes: RouteDefinition[] = [
  {
    component: AppMain,
    path: "/",
  },
  {
    component: lazy(() => import("./pages/login")),
    path: "/login",
  },
  // {
  //   path: '/about',
  //   component: lazy(() => import('./pages/about')),
  //   data: AboutData,
  // },
  // {
  //   path: '**',
  //   component: lazy(() => import('./errors/404')),
  // },
];
