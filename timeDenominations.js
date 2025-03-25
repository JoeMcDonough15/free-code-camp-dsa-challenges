/*
***** Challenge ***** 
Given a non-negative integer representing a quantity of minutes, return a string representation of the time
broken down into months, weeks, days, hours, and minutes.  You should not include any units for which the value is zero.  
You should not include extraneous spaces.  For the purpose of this challenge, all months have 28 days.

*/

// Tests

// 1.
const input1 = 1;

// 2.
const input2 = 100;

// 3.
const input3 = 40321;

// 4.
const input4 = 52874;

// 5.
const input5 = 0;

const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const DAYS_IN_WEEK = 7;
const WEEKS_IN_MONTH = 4; // every month has 28 days, so that's exactly 4 weeks per month

const timeDenominations = (integer) => {
  if (!integer) {
    return "No time";
  }

  let answer = "";

  let minutesAsNum = integer;
  let minutesAsString = "";

  let hoursAsNum = 0;
  let hoursAsString = "";

  let daysAsNum = 0;
  let daysAsString = "";

  let weeksAsNum = 0;
  let weeksAsString = "";

  let monthsAsNum = 0;
  let monthsAsString = "";

  if (minutesAsNum >= MINUTES_IN_HOUR) {
    hoursAsNum = Math.floor(minutesAsNum / MINUTES_IN_HOUR);
    minutesAsNum = minutesAsNum % MINUTES_IN_HOUR;
  }

  if (minutesAsNum) {
    minutesAsString =
      minutesAsNum === 1 ? `${minutesAsNum} minute` : `${minutesAsNum} minutes`;

    answer = `${minutesAsString}`;
  }

  if (hoursAsNum >= HOURS_IN_DAY) {
    daysAsNum = Math.floor(hoursAsNum / HOURS_IN_DAY);
    hoursAsNum = hoursAsNum % HOURS_IN_DAY;
  }

  if (hoursAsNum) {
    hoursAsString =
      hoursAsNum === 1 ? `${hoursAsNum} hour` : `${hoursAsNum} hours`;

    answer = `${hoursAsString} ${answer}`;
  }

  if (daysAsNum >= DAYS_IN_WEEK) {
    weeksAsNum = Math.floor(daysAsNum / DAYS_IN_WEEK);
    daysAsNum = daysAsNum % DAYS_IN_WEEK;
  }

  if (daysAsNum) {
    daysAsString = daysAsNum === 1 ? `${daysAsNum} day` : `${daysAsNum} days`;
    answer = `${daysAsString} ${answer}`;
  }

  if (weeksAsNum >= WEEKS_IN_MONTH) {
    monthsAsNum = Math.floor(weeksAsNum / WEEKS_IN_MONTH);
    weeksAsNum = weeksAsNum % WEEKS_IN_MONTH;
  }

  if (weeksAsNum) {
    weeksAsString =
      weeksAsNum === 1 ? `${weeksAsNum} week` : `${weeksAsNum} weeks`;
    answer = `${weeksAsString} ${answer}`;
  }

  if (monthsAsNum) {
    monthsAsString =
      monthsAsNum === 1 ? `${monthsAsNum} month` : `${monthsAsNum} months`;
    answer = `${monthsAsString} ${answer}`;
  }

  return answer;
};

console.log(timeDenominations(input1)); // 1 minute
console.log(timeDenominations(input2)); // 1 hour 40 minutes
console.log(timeDenominations(input3)); // 1 month 1 minute
console.log(timeDenominations(input4)); // 1 month 1 week 1 day 17 hours 14 minutes
console.log(timeDenominations(input5)); // No time
