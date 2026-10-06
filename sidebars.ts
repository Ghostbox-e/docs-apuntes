import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    "intro",
    { type: "doc", id: "linux", label: "1 · Linux" },
    { type: "doc", id: "redes", label: "2 · Redes" },
    { type: "doc", id: "bbdd", label: "3 · BBDD" },
    { type: "doc", id: "java", label: "4 · Java" },
    { type: "doc", id: "lenguaje-de-marcas", label: "5 · Lenguaje de marcas" },
  ],
};

export default sidebars;
