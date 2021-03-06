// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import { ReactInstance, Surface } from "react-360-web";
import { screenDimensions } from "./config";

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options
  });

  const s = r360.getDefaultSurface();
  //s.setShape(Surface.SurfaceShape.Flat);
  //s.resize(4096, 600);
  s.resize(screenDimensions.width, screenDimensions.height);

  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot("App", {
      /* initial props */
    }),
    s
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL("nokia.jpg"));
}

window.React360 = { init };
