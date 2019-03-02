let fs = require('fs');

function putSourceToFile(pageSource){
    fs.writeFile(newFileName.getName(), pageSource, function (error, pageSource){
        isPageFileWriteSucess.check(error);
    })
}