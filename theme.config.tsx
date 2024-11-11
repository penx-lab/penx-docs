import { Logo } from "./components/Logo";

export default {
  logo: <Logo></Logo>,
  project: {
    link: "https://github.com/penx-lab/penx",
  },
  chat: {
    link: "https://discord.gg/nyVpH9njDu",
  },
  docsRepositoryBase: "https://github.com/penx-lab/penx-docs",
  sidebar: {
    defaultMenuCollapseLevel: 2,
  },
  footer: {
    content: (
      <span>
        MIT {new Date().getFullYear()} ©{" "}
        <a href="https://nextra.site" target="_blank">
          PenX
        </a>
        .
      </span>
    ),
  },
};
