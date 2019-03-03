module.exports = function saveTheSource(pageSource){
    return sourceToFile.putSourceToFile(pageSource);
}

let sourceToFile = (function () {
    return{
        putSourceToFile: function (pageSource) {
            let fs = require('fs');
            fs.writeFile(newFileName.getName(), pageSource, function (error, pageSource){
                isPageFileWriteSucess.check(error);
            })
        }
    }
})();

let isPageFileWriteSucess = (function(){
    return{
        check: function(error){

            if (error) {
                console.log(error);
            }else{
                console.log("Successfully Written to File:  "+ newFileName.getName());
            }
        }
    }
})();

let newFileName = (function () {
    return{
        getName: function () {
            const path = require('path');
            let generateFileName = require('./privatefunc');
            let filePath = "stockdata" + path.sep;
            let fileName =  filePath + generateFileName("TickerSymbol");
            return fileName;
        }
    }
})();
