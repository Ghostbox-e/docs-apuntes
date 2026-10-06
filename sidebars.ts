import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    "intro",
    {
      type: "category",
      label: "1 · Linux",
      collapsed: true,
      items: [
        "linux/administracion",
        "linux/automatizacion-ansible",
        "linux/seguridad-selinux",
        "linux/monitorizacion-logs",
        "linux/contenedores-podman",
      ],
    },
    {
      type: "category",
      label: "2 · Redes",
      collapsed: true,
      items: [
        "redes/fundamentos",
        "redes/conmutacion-enrutamiento",
        "redes/seguridad-operacion",
        "redes/automatizacion",
        "redes/wifi-qos-diseno",
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
        "bbdd/programacion-sql",
        "bbdd/mysql-innodb",
        "bbdd/migraciones-cloud",
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
        "java/seguridad-spring",
        "java/microservicios-mensajeria",
        "java/contenedores-ci",
        "java/diseno-arquitectura",
      ],
    },
    {
      type: "category",
      label: "5 · Lenguaje de marcas",
      collapsed: true,
      items: [
        "marcas/html-css",
        "marcas/xml-json-yaml",
        "marcas/javascript-dom",
        "marcas/seguridad-web",
        "marcas/rendimiento-accesibilidad",
      ],
    },
    {
      type: "category",
      label: "6 · Herramientas",
      collapsed: true,
      items: ["herramientas/git"],
    },
    {
      type: "category",
      label: "7 · Autoevaluación",
      collapsed: true,
      items: [
        "autoevaluacion/index",
        "autoevaluacion/linux",
        "autoevaluacion/redes",
        "autoevaluacion/bbdd",
        "autoevaluacion/java",
        "autoevaluacion/marcas",
        "autoevaluacion/herramientas",
        "autoevaluacion/examen-mixto",
      ],
    },
  ],
};

export default sidebars;
