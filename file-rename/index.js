const fs = require("fs")

//需要批量修改的文件夹路径
const rootPath = `C:\\Users\\xxxxx`
// 需要过滤的文字水印
const filterContent = "_666"
// 替换的内容
const replaceContent = ""

deepReadFiles(rootPath)

function deepReadFiles(filePath) {
  fs.readdirSync(filePath).forEach((dir) => {
    const dirPath = `${filePath}\\${dir}`

    if (fs.statSync(dirPath).isDirectory()) {
      deepReadFiles(dirPath)
    } else {
      renameFile(dirPath)
    }
  })
}

function renameFile(filePath) {
  fs.renameSync(filePath, filePath.replace(filterContent, replaceContent))
}
