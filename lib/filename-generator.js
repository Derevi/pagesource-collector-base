let today = new Date();

function generateFileName(tickerSymbol) {
    return tickerSymbol + getCurrentDateDDMMYYY() + getCurrentTimeHHMMSS() + ".txt"
}

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


let leadingZeroFormat = (function () {
    return {
        convert: function (dateElement) {
            return (dateElement < 10) ? "0" + dateElement : dateElement;
        }
    }
})();