let today = new Date();

function generateFileName(tickerSymbol) {
    return tickerSymbol + getCurrentDateDDMMYYY() + getCurrentTimeHHMMSS() + ".txt"
}


let createFileName = (function () {
    return {
        formatTickerTimeStamp: function (tickerSymbol) {
            let date = new Date();
            return tickerSymbol +
                getTimeStamp.formatDateAndTime(date) +
                ".txt";
        }
    }
})();

let getTimeStamp = (function () {
    return{
        formatDateAndTime: function (date) {
            return getTodaysDate.formatDateDDMMYY(date) +
                getCurrentTime.formatTimeHHMMS(date);
        }
    }
})();

let getCurrentTime = (function () {
    return {
        formatTimeHHMMS: function (date) {
            let currentTime = "";
            let timeElements = time.timeComponents(date);
            for (let timeElement in timeElements) {
                currentTime += '\uA789' + leadingZeroFormat.convert(timeElements[timeElement]);
            }
            return currentTime.substr(1);
        }
    }
})();


let getTodaysDate = (function () {
    return {
        formatDateDDMMYY: function (date) {
            let todaysDate = "";
            let dateElements = day.dateComponents(date);
            for (let dateElement in dateElements) {
                todaysDate += "-" + leadingZeroFormat.convert(dateElements[dateElement]);
            }
            return todaysDate + "-";
        }
    }
})();

let day = (function () {
    return {
        dateComponents: function(date) {
            return   {
                dd: date.getDate(),
                mm: date.getMonth() + 1,
                yyyy: date.getFullYear(),
            }
        }
    }
})();



let leadingZeroFormat = (function () {
    return {
        convert: function (dateElement) {
            return (dateElement < 10) ? "0" + dateElement : dateElement;
        }
    }
})();