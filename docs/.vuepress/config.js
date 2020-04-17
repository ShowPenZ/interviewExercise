module.exports = {
  base: "/interviewExercise/",
  dest: "docs/.vuepress/dist",

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
                    ["javascript/DataStructureTransformation/2", "question 2"],
                  ],
                },
                {
                  title: "eventHandler",
                  children: [
                    ["javascript/eventHandler/1", "1.debounce and throttle"],
                    [
                      "javascript/eventHandler/2",
                      "2.Implement a sleep function",
                    ],
                  ],
                },
                {
                  title: "basic",
                  children: [
                    [
                      "javascript/basic/1",
                      "1.What does the following code output",
                    ],
                    [
                      "javascript/basic/2",
                      "2.Implement (num1).add(num2).minus(num3)",
                    ],
                    [
                      "javascript/basic/3",
                      "3.The lazyman class is required to achieve the following functions.",
                    ],
                  ],
                },
                {
                  title: "dataProcessing",
                  children: [
                    ["javascript/dataProcessing/1", "1.array flatten"],
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
                    ["/zh/javascript/DataStructureTransformation/2", "第2题"],
                  ],
                },
                {
                  title: "事件处理相关",
                  children: [
                    ["/zh/javascript/eventHandler/1", "1.防抖和截流"],
                    ["/zh/javascript/eventHandler/2", "2.实现一个sleep函数"],
                  ],
                },
                {
                  title: "基础类",
                  children: [
                    ["/zh/javascript/basic/1", "1.下面代码输出什么"],
                    [
                      "/zh/javascript/basic/2",
                      "2.实现 (num1).add(num2).minus(num3)",
                    ],
                    [
                      "/zh/javascript/basic/3",
                      "3.要求设计 LazyMan 类，实现以下功能。",
                    ],
                  ],
                },
                {
                  title: "数据处理",
                  children: [["/zh/javascript/dataProcessing/1", "1.数组展平"]],
                },
              ],
            },
          ],
        },
      },
    },
  },
};
