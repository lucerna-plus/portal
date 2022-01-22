import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"]
});

registerApplication({
  name: "@lucerna-plus/users",
  app: () => System.import("@lucerna-plus/users"),
  activeWhen: ["/users"]
});

registerApplication({
  name: "@lucerna-plus/dashboard",
  app: () => System.import("@lucerna-plus/dashboard"),
  activeWhen: ["/dashboard"]
});

registerApplication({
  name: "@lucerna-plus/utilities",
  app: () => System.import("@lucerna-plus/utilities"),
  activeWhen: ["/utilities"]
});

registerApplication({
  name: "@lucerna-plus/targets",
  app: () => System.import("@lucerna-plus/targets"),
  activeWhen: ["/targets"]
});

start({
  urlRerouteOnly: true
});
