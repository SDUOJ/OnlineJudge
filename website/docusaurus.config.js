// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SDUOJ 开源在线评测系统",
  tagline: "SDUOJ",
  favicon: "img/sduoj-logo.svg",

  // Set the production url of your site here
  url: "https://sduoj.online",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "sduoj", // Usually your GitHub org/user name.
  projectName: "OnlineJudge", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh",
    locales: ["zh"],
    path: "i18n",
    localeConfigs: {
      zh: {
        label: "简体中文",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/sduoj/OnlineJudge/tree/main/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/sduoj/OnlineJudge/tree/main/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/sduoj-logo.svg",
      navbar: {
        title: "SDUOJ",
        logo: {
          alt: "SDUOJ Logo",
          src: "img/sduoj-logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "manualSidebar",
            position: "left",
            label: "使用手册",
          },
          {
            type: "docSidebar",
            sidebarId: "deploymentSidebar",
            position: "left",
            label: "部署手册",
          },
          {
            href: "https://github.com/sduoj/OnlineJudge",
            className: "header-github-link",
            "aria-label": "GitHub repository",
            position: "right",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [],
        copyright: `GNU Affero General Public License v3.0 | Copyright © 2020-${new Date().getFullYear()} SDUOJ Team. All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
