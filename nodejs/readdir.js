var testFolder = './data'; // 현재디렉토리에 있는 data
var fs = require('fs');

fs.readdir(testFolder, function (error, filelist) {
    console.log(filelist);
})