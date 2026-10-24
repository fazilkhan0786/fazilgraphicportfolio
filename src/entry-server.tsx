/**
 * © 2026 Mohammad Fazil Firojkhan Malek. All rights reserved.
 * Watermark-ID: MF-FIROJKHAN-MALEK-2026
 * Author: Fazil Malek
 * Server Entry for Static Site Generation (SSG Prerendering)
 */

import { renderToString } from "react-dom/server";
import App from "./App";
import {
  findRouteConfig,
  RouteConfig,
  ALL_CANONICAL_ROUTES,
  NOT_FOUND_ROUTE,
  STATIC_ROUTES,
  STORY_ROUTES
} from "./routes";
import { stories, Story } from "./data/stories";

export {
  ALL_CANONICAL_ROUTES,
  NOT_FOUND_ROUTE,
  STATIC_ROUTES,
  STORY_ROUTES,
  stories
};

export interface RenderResult {
  appHtml: string;
  config: RouteConfig;
}

export function render(url: string): RenderResult {
  const config = findRouteConfig(url);
  const appHtml = renderToString(<App initialRoute={url} />);

  return {
    appHtml,
    config
  };
}
