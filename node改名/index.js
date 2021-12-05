const fs = require('fs')
const path = require('path')

//文件夹地址
const handFilePath = path.resolve(`E:\xxxxx`)

// 需要过滤的文字水印
const filterName = '11111111'

deepReadFiles(handFilePath)

function deepReadFiles(filePath) {
    fs.readdirSync(filePath).forEach(item => {
        if (fs.statSync(path.resolve(`${filePath}\\${item}`)).isDirectory()) {
            const dirPath = `${filePath}\\${item}`
            deepReadFiles(dirPath)
        } else {
            handFile(`${filePath}\\${item}`)
        }
    })
}

function handFile(filePath) {
    fs.renameSync(filePath, filePath.replace(filterName, ''))
}
