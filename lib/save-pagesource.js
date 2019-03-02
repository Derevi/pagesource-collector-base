let fs = require('fs');

function putSourceToFile(pageSource){
    fs.writeFile(newFileName.getName(), pageSource, function (error, pageSource){
        isPageFileWriteSucess.check(error);
    })
}

function isPageFileWriteSucess(error){
    if (error) {
        console.log(error);
    }else{
        console.log("Successfully Written to File:  "+ newFileName.getName());
    }
}

function getName() {
    const path = require('path');
    generateFileName("sym")
    let filePath = "stockdata" + path.sep;
    let fileName =  filePath + generateFileName("TickerSymbol");
    return fileName;
}