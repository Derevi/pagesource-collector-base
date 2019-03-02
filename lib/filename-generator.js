let today = new Date();

function generateFileName(tickerSymbol) {
    return tickerSymbol + getCurrentDateDDMMYYY() + getCurrentTimeHHMMSS() + ".txt"
}

function getCurrentTimeHHMMSS() {
    let currentTime = ""
    let time = {
        hours: today.getHours(),
        minutes: today.getMinutes(),
        secs: today.getSeconds()
    }
    for (let timeElement in time) {
        currentTime += '\uA789' + convertToLeadingZeroFormat(time[timeElement])
    }
    ;
    return currentTime.substr(1);
}


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

function convertToLeadingZeroFormat(dateElement) {
    return (dateElement < 10) ? "0" + dateElement : dateElement;
}