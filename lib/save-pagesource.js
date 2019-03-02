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