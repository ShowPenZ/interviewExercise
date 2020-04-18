const fs = require("fs");

const fileHelper = {
  getFileName: function(rootPath, filePath) {
    const fileTypes = /\.md$/; //只匹配以md结尾的文件
    let fileNames = [];

    fs.readdirSync(rootPath + filePath).forEach((file) => {
      let tempFilePath = "";
      let generateArr = new Array();

      fullPath = rootPath + filePath + "/" + file;
      //异步获取文件状态
      let fileInfo = fs.statSync(fullPath);

      if (fileInfo.isFile() && fileTypes.test(file) > 0) {
        //剔除README.md
        if (file !== "README.md") {
          file = file.replace(".md", "");
          tempFilePath = filePath + "/" + file;
        }

        generateArr.push(tempFilePath, file);
        fileNames.push(generateArr); // 构造二维数组
      }
    });

    fileNames.sort(); // 排序

    return fileNames;
  },
};

module.exports = fileHelper;
