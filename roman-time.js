'use strict';

function toRoman(num) {
    var numArabic = [1,4,5,9,10,40,50];
    var numRoman = ['I','IV','V','IX','X','XL','L'];
    var result = '';
    var n = numArabic.length - 1;
    if (num === 0) {
    	result = 'N'
    }
    while (num > 0) {
        if (num >= numArabic[n]) {
        result += numRoman[n];
        num -= numArabic[n];
        }
    else n--;
    }

return result;
}

function wrongTime(time) {
	if (time === null || time === undefined || time.length > 5) {
		return true;
	}
	return false;
}

function wrongHM(hour, minutes) {
	if (hour >= 24 || minutes >= 60 || isNaN(hour) || isNaN(minutes)) {
		return true;
	}
	return false;
}

function romanTime(time) {
    var e = new TypeError('Неверное время');
    if (wrongTime(time)) {
        return e.message;
    }         
    var splitTime = time.split(':');
    var hour = parseInt(splitTime[0], 10);
    var minutes = parseInt(splitTime[1], 10);
    if (wrongHM(hour, minutes)) {
        return e.message;
    }    

    return toRoman(hour) + ':' + toRoman(minutes);
}

module.exports = romanTime;
