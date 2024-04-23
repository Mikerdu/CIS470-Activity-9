// Here your code for the get previous date function goes
// you can refer to the getNextDate function and make minor changes
const lastDayOfMonth = require('./lastDayOfMonth');

function getPreviousDate(month, day, year) {
    const lastDay = lastDayOfMonth(month, year);
    if (day > 1) {
        return { month, day: day - 1, year };
    } else {
        if (month > 1) {
            const lastDayOfPreviousMonth = getLastDayOfMonth(month -1, year);
            return { month: month - 1, day: lastDayOfPreviousMonth, year };
        } else {
            return { month: 12, day: 31, year: year - 1 };
        }
    }
}

module.exports = getPreviousDate;