
const getNextDate = require('../modules/getPreviousDate');

test('Previous date test', () => {
    // expect(getPreviousDate(4, 16, 2024)) ....
    expect(getPreviousDate(4, 17, 2024)).toEqual({ month: 4, day: 16, year: 2024 });
    
});
