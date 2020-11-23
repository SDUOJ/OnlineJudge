module.exports = {
  base: "/",
  head: [
    ["link", { rel: "icon", href: `/favicon.ico` }]
  ],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Open Source Online Judge System",
      description: "开源在线评测系统"
    }//, // 临时关闭英文版
    // "/en/": {
    //   lang: "en-US",
    //   title: "SDUOJ",
    //   description: "Open Source Online Judge System"
    // }
  },
  themeConfig: {
    repo: "SDUOJ/OnlineJudge",
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
            text: "用户手册",
            link: "/user-manual/client-manual-home"
          },
          {
            text: "OJ 搭建指南",
            link: "/building-guide/"
          },
          {
            text: "技术博客",
            link: "/technology-blog/"
          }
        ],
        sidebar: {
          "/user-manual/": genUserManualSidebar(true),
          "/building-guide/": genBuildingGuideSidebar(true),
          "/technology-blog/": genTechnologyBlogSidebar(true)
        }
      },
      "/en/": {
        label: "English",
        selectText: "Languages",
        editLinkText: "Edit this page on GitHub",
        lastUpdated: "Last Updated",
        nav: [
          {
            text: "User Manual",
            link: "/en/user-manual/client-manual-home"
          },
          {
            text: "Building Guide",
            link: "/en/building-guide/"
          },
          {
            text: "Technology Blog",
            link: "/en/technology-blog/"
          }
        ],
        sidebar: {
          "/en/user-manual/": genUserManualSidebar(false),
          "/en/building-guide/": genBuildingGuideSidebar(false),
          "/en/technology-blog/": genTechnologyBlogSidebar(false)
        }
      }
    }
  }
}


function genUserManualSidebar(isZh) {
  return [
    // {
    //   title: isZh ? "快速开始" : "Quick Start",
    //   collapsable: false,
    //   children: [
    //     ""
    //   ]
    // },
    {
      title: isZh ? "客户手册" : "Client-Manual",
      collapsable: false,
      children: [
        "client-manual-home",
        "client-manual-user",
        "client-manual-problem",
        "client-manual-submission",
        "client-manual-contest"
      ]
    },
    {
      title: isZh ? "管理手册" : "Manager-Manual",
      collapsable: false,
      children: [
        "manager-manual-user",
        "manager-manual-problem",
        "manager-manual-contest"
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

function genBuildingGuideSidebar(isZh) {
  return [
    {
      title: isZh ? "快速开始" : "Quick Start",
      collapsable: false,
      children: [
        ""
      ]
    },
    {
      title: isZh ? "详细教程" : "Detailed tutorial",
      collapsable: false,
      children: [
        "tutorial"
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

function genTechnologyBlogSidebar(isZh) {
  return [
    {
      title: isZh ? "前言" : "Introduction",
      collapsable: false,
      children: [
        ""
      ]
    },
    {
      title: isZh ? "前端技术" : "Front End Technology",
      collapsable: false,
      children: [
        "front-end-technology"
      ]
    },
    {
      title: isZh ? "后端技术" : "Back End Technology",
      collapsable: false,
      children: [
        "back-end-technology"
      ]
    },
    {
      title: isZh ? "评测机技术" : "Judger Technology",
      collapsable: false,
      children: [
        "judger-technology"
      ]
    },
    {
      title: isZh ? "沙箱技术" : "Sandbox Technology",
      collapsable: false,
      children: [
        "sandbox-technology"
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