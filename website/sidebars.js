/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // create a sidebar manually
  manualSidebar: [
    {
      type: "category",
      label: "用户手册",
      items: [
        "manual/user/home",
        "manual/user/user",
        "manual/user/problem",
        "manual/user/submission",
        "manual/user/contest",
      ],
    },
    {
      type: "category",
      label: "管理手册",
      items: [
        "manual/manager/user",
        "manual/manager/problem",
        "manual/manager/contest",
        "manual/manager/judgetemplate",
      ],
    },
  ],
  deploymentSidebar: [
    {
      type: "category",
      label: "快速开始",
      items: [
        "deployment/docker-compose",
      ],
    },
  ],
};

module.exports = sidebars;
