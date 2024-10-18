import { DocsThemeConfig } from "nextra-theme-docs";
import { Logo } from "./components/Logo";

const config: DocsThemeConfig = {
  logo: <Logo></Logo>,
  project: {
    link: "https://github.com/plantree-xyz/plantree",
  },
  chat: {
    link: "https://discord.gg/nyVpH9njDu",
  },
  docsRepositoryBase: "https://github.com/plantree-xyz/plantree-docs",
  sidebar: {
    // defaultMenuCollapseLevel: 2
  },
  footer: {
    text: "PenX Docs",
  },
};

export default config;
