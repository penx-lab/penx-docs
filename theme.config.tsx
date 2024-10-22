import { Logo } from "./components/Logo";

export default {
  logo: <Logo></Logo>,
  project: {
    link: "https://github.com/plantree-xyz/plantree",
  },
  chat: {
    link: "https://discord.gg/nyVpH9njDu",
  },
  docsRepositoryBase: "https://github.com/plantree-xyz/plantree-docs",
  sidebar: {
    defaultMenuCollapseLevel: 2,
  },
  footer: {
    content: (
      <span>
        MIT {new Date().getFullYear()} ©{" "}
        <a href="https://nextra.site" target="_blank">
          Plantree
        </a>
        .
      </span>
    ),
  },
};
