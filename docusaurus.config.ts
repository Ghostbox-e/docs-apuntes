import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const darkCodeTheme = {
  plain: { color: "#cdd9e5", backgroundColor: "#060a0f" },
  styles: [
    { types: ["comment"], style: { color: "#6a737d", fontStyle: "italic" as const } },
    { types: ["string", "attr-value"], style: { color: "#e3b341" } },
    { types: ["number", "boolean"], style: { color: "#79c0ff" } },
    { types: ["keyword", "operator"], style: { color: "#ff7b72" } },
    { types: ["function", "builtin"], style: { color: "#39d353" } },
    { types: ["variable", "constant"], style: { color: "#ffa657" } },
    { types: ["punctuation"], style: { color: "#8b949e" } },
    { types: ["tag", "selector"], style: { color: "#7ee787" } },
    { types: ["class-name"], style: { color: "#f0883e" } },
    { types: ["property"], style: { color: "#79c0ff" } },
    { types: ["namespace"], style: { color: "#8b949e" } },
  ],
};

const config: Config = {
  title: "Apuntes",
  tagline: "Linux, Redes, BBDD, Java y Lenguaje de marcas",
  favicon: "img/favi.ico",

  url: "https://docs-apuntes.vercel.app",
  baseUrl: "/",

  organizationName: "Ghostbox-e",
  projectName: "docs-apuntes",

  onBrokenLinks: "throw",

  markdown: {
    mermaid: true,
    hooks: { onBrokenMarkdownLinks: "warn" },
  },

  i18n: {
    defaultLocale: "es",
    locales: ["es"],
  },

  headTags: [
    { tagName: "meta", attributes: { name: "darkreader-lock" } },
    { tagName: "meta", attributes: { name: "color-scheme", content: "dark" } },
  ],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    "@docusaurus/theme-mermaid",
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        language: ["es", "en"],
        indexDocs: true,
        indexBlog: false,
        indexPages: true,
        docsRouteBasePath: "/",
        searchBarPosition: "right",
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchBarShortcutKeymap: "ctrl+f",
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      items: [
        {
          href: "https://github.com/Ghostbox-e",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub",
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: darkCodeTheme,
      additionalLanguages: ["bash", "shell-session"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
