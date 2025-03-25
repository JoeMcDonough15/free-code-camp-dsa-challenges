/*

***** Challenge ***** 
Given a non-negative integer representing a quantity of minutes, return a string representation of the time
broken down into months, weeks, days, hours, and minutes.  You should not include any units for which the value is zero.  
You should not include extraneous spaces.  For the purpose of this challenge, all months have 28 days.

*/

// CONSTANTS

const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const DAYS_IN_WEEK = 7;
const WEEKS_IN_MONTH = 4; // every month has 28 days, so that's exactly 4 weeks per month

// Space and Time
// Time Complexity: O(1)
// Space Complexity: O(1)

const timeDenominations = (integer) => {
  if (!integer) {
    return "No time";
  }

  let answer = "";

  let minutesAsNum = integer;
  let hoursAsNum = 0;
  let daysAsNum = 0;
  let weeksAsNum = 0;
  let monthsAsNum = 0;

  // helper function that can reassign each denomination, using scope chaining
  const reassignDenominations = (higherDenomination) => {
    switch (higherDenomination) {
      case "hours":
        hoursAsNum = Math.floor(minutesAsNum / MINUTES_IN_HOUR);
        minutesAsNum = minutesAsNum % MINUTES_IN_HOUR;
        break;
      case "days":
        daysAsNum = Math.floor(hoursAsNum / HOURS_IN_DAY);
        hoursAsNum = hoursAsNum % HOURS_IN_DAY;
        break;
      case "weeks":
        weeksAsNum = Math.floor(daysAsNum / DAYS_IN_WEEK);
        daysAsNum = daysAsNum % DAYS_IN_WEEK;
        break;
      case "months":
        monthsAsNum = Math.floor(weeksAsNum / WEEKS_IN_MONTH);
        weeksAsNum = weeksAsNum % WEEKS_IN_MONTH;
        break;
      default:
        break;
    }
  };

  // helper function that can concatenate to answer as we go, also using scope chaining
  const updateAnswer = (denominationValue, denominationName) => {
    const denominationAsString =
      denominationValue === 1
        ? `${denominationValue} ${denominationName}`
        : `${denominationValue} ${denominationName}s`;

    answer = `${denominationAsString} ${answer}`;
  };

  // Convert minutes to hours and concatenate remaining minutes to answer
  if (minutesAsNum >= MINUTES_IN_HOUR) {
    reassignDenominations("hours");
  }
  if (minutesAsNum) {
    updateAnswer(minutesAsNum, "minute");
  }

  // Convert hours to days and concatenate remaining days to answer
  if (hoursAsNum >= HOURS_IN_DAY) {
    reassignDenominations("days");
  }
  if (hoursAsNum) {
    updateAnswer(hoursAsNum, "hour");
  }

  // Convert days to weeks and concatenate remaining days to answer
  if (daysAsNum >= DAYS_IN_WEEK) {
    reassignDenominations("weeks");
  }
  if (daysAsNum) {
    updateAnswer(daysAsNum, "day");
  }

  // Convert weeks to months and concatenate remaining weeks to answer
  if (weeksAsNum >= WEEKS_IN_MONTH) {
    reassignDenominations("months");
  }
  if (weeksAsNum) {
    updateAnswer(weeksAsNum, "week");
  }

  // Any months can be concatenated to the answer as is
  if (monthsAsNum) {
    updateAnswer(monthsAsNum, "month");
  }

  return answer;
};

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

console.log(timeDenominations(input1)); // 1 minute
console.log(timeDenominations(input2)); // 1 hour 40 minutes
console.log(timeDenominations(input3)); // 1 month 1 minute
console.log(timeDenominations(input4)); // 1 month 1 week 1 day 17 hours 14 minutes
console.log(timeDenominations(input5)); // No time
