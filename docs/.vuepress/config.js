module.exports = {
  base: "/SDUOJ/",
  head: [
    ["link", { rel: "icon", href: `/favicon.ico` }]
  ],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "SDUOJ",
      description: "开源在线评测系统"
    },
    "/en/": {
      lang: "en-US",
      title: "SDUOJ",
      description: "Open Source Online Judge System"
    }
  },
  themeConfig: {
    repo: "SDUOJ/SDUOJ",
    docsDir: "docs/",
    editLinks: true,
    locales: {
      "/": {
        label: "简体中文",
        selectText: "Languages",
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdated: "上次更新",
        nav: [
          {
            text: "指南",
            link: "/guide/"
          }
        ],
        sidebar: {
          "/guide/": genGuideSidebar(true)
        }
      },
      "/en/": {
        label: "English",
        selectText: "Languages",
        editLinkText: "Edit this page on GitHub",
        lastUpdated: "Last Updated",
        nav: [
          {
            text: "Guide",
            link: "/en/guide/"
          }
        ],
        sidebar: {
          "/en/guide/": genGuideSidebar(false)
        }
      }
    }
  }
}


function genGuideSidebar(isZh) {
  return [
    {
      title: isZh ? "快速入门" : "Getting Start",
      collapsable: false,
      children: [
        "", "start"
      ]
    },
    {
      title: isZh ? "核心功能" : "Core",
      collapsable: false,
      children: [
      ]
    },
    {
      title: "FAQ",
      collapsable: false,
      children: [
        "faq"
      ]
    }
  ];
}
