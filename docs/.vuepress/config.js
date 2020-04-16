module.exports = {
  base: "/interviewExercise/",
  dest: "dist",

  description: "面试题",
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    "/": {
      lang: "en-US", // 将会被设置为 <html> 的 lang 属性
      title: "InterviewExercise",
      description: "Vue-powered Static Site Generator",
    },
    "/zh/": {
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
      "/": {
        selectText: "选择语言",
        label: "English",
        ariaLabel: "Languages",
        editLinkText: "Edit this page on GitHub",
        // nav: [{ text: "Nested", link: "/nested/", ariaLabel: "Nested" }],
        sidebar: {
          "/": [
            {
              title: "Javascript",
              children: [
                {
                  title: "DataStructureTransformation",
                  children: [
                    ["javascript/DataStructureTransformation/1", "question 1"],
                  ],
                },
              ],
            },
          ],
        },
      },
      "/zh/": {
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
          "/zh/": [
            {
              title: "Javascript",
              children: [
                {
                  title: "数据结构转换",
                  children: [
                    ["/zh/javascript/DataStructureTransformation/1", "第1题"],
                  ],
                },
              ],
            },
          ],
        },
      },
    },
  },
};
