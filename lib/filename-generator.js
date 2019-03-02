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


function getCurrentDateDDMMYYY() {
    let currentDate = ""
    let date = {
        dd: today.getDate(),
        mm: today.getMonth() + 1,
        yyyy: today.getFullYear(),
    }
    for (let dateElement in date) {
        currentDate += "-" + convertToLeadingZeroFormat(date[dateElement])
    }

    return currentDate + "-"
}

let leadingZeroFormat = (function () {
    return {
        convert: function (dateElement) {
            return (dateElement < 10) ? "0" + dateElement : dateElement;
        }
    }
})();