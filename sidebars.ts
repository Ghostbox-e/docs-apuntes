import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    "intro",
    { type: "doc", id: "linux", label: "1 · Linux" },
    {
      type: "category",
      label: "2 · Redes",
      collapsed: true,
      items: [
        "redes/fundamentos",
        "redes/conmutacion-enrutamiento",
        "redes/seguridad-operacion",
      ],
    },
    {
      type: "category",
      label: "3 · BBDD",
      collapsed: true,
      items: [
        "bbdd/sql",
        "bbdd/modelado-indices",
        "bbdd/transacciones-operacion",
      ],
    },
    {
      type: "category",
      label: "4 · Java",
      collapsed: true,
      items: [
        "java/lenguaje-colecciones",
        "java/jvm-concurrencia",
        "java/spring-persistencia-testing",
      ],
    },
    {
      type: "category",
      label: "5 · Lenguaje de marcas",
      collapsed: true,
      items: ["marcas/html-css", "marcas/xml-json-yaml"],
    },
  ],
};

export default sidebars;
