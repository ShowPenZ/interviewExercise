const path = require("path");
const rootpath = path.dirname(__dirname); //执行一次dirname将目录定位到docs目录
// const util = require("util");
const sideBarData = require("./fileData/sideBarData");
const helper = require("./utils/helper");

const en = helper.genSidebar(
  "Javascript",
  helper.generateArr(sideBarData.enFileData, rootpath),
  true
);

const zh = helper.genSidebar(
  "Javascript",
  helper.generateArr(sideBarData.zhFileData, rootpath),
  true
);

// console.log(util.inspect(en, { showHidden: false, depth: null, colors: true })); // alternative shortcutconsole.log(util.inspect(myObject, false, null, true /* enable colors */))

module.exports = {
  base: "/interviewExercise/",
  dest: "docs/.vuepress/dist",

  description: "面试题",
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    // "/": {
    //   lang: "en-US", // 将会被设置为 <html> 的 lang 属性
    //   title: "InterviewExercise",
    //   description: "Vue-powered Static Site Generator",
    // },

    "/en/": {
      lang: "en-US", // 将会被设置为 <html> 的 lang 属性
      title: "InterviewExercise",
      description: "Vue-powered Static Site Generator",
    },
    "/": {
      lang: "zh-CN",
      title: "练习题",
      description: "Vue 驱动的静态网站生成器",
    },
  },
  themeConfig: {
    editLinks: false,
    docsDir: "docs",
    nav: [],
    locales: {
      "/en/": {
        selectText: "选择语言",
        label: "English",
        ariaLabel: "Languages",
        editLinkText: "Edit this page on GitHub",
        // nav: [{ text: "Nested", link: "/nested/", ariaLabel: "Nested" }],
        sidebar: {
          "/en/": en,
        },
      },
      "/": {
        // 多语言下拉菜单的标题
        selectText: "Languages",
        // 该语言在下拉菜单中的标签
        label: "简体中文",
        // 编辑链接文字
        editLinkText: "在 GitHub 上编辑此页",
        // Service Worker 的配置

        // 当前 locale 的 algolia docsearch 选项
        // nav: [{ text: "嵌套", link: "/zh/nested/" }],
        sidebar: {
          "/": zh,
        },
      },
    },
  },
};
