const fileHelper = require("./fileHelper");

const isString = Object.prototype.toString;
const isArray = (arr) => {
  return isString.call(arr) === "[object Array]";
};

const isObject = (arr) => {
  return isString.call(arr) === "[object Object]";
};

const helper = {
  genSidebar: function(
    title,
    children = [],
    collapsable = true,
    sidebarDepth = 1
  ) {
    let arr = new Array();
    let genData = null;

    if (children && isArray(children[0]) && isObject(children[0][0])) {
      let tempArr = [];

      children.map((d) => {
        tempArr.push(d[0]);
      });

      genData = tempArr;
    } else {
      genData = children;
    }

    arr.push({
      title,
      children: genData,
      collapsable,
      sidebarDepth,
    });

    return arr;
  },
  generateArr: function(arr, rootpath) {
    const that = this;
    let tempArr = [];

    arr.map((d, i) => {
      tempArr.push(
        that.genSidebar(
          d.title,
          fileHelper.getFileName(rootpath, d.path),
          d.collapsable,
          d.sidebarDepth || 1
        )
      );
    });

    return tempArr;
  },
};

module.exports = helper;
