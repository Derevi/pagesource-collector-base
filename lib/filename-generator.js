let today = new Date();

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
