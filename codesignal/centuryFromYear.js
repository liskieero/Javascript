// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

function centuryFromYear(year) {
  year = year.toString();
  let cent;
  let corr;
  if (year.length < 3) {
    return 1;
  } else if (year.length === 3) {
    corr = !(year.slice(-2) === '00');
    cent = Number(year[0]) + corr;
    return cent;
  } else if (year.length === 4) {
    corr = !(year.slice(-2) === '00');
    cent = Number(year.slice(0,2)) + corr;
    return cent;
  }
}

let year = 2001;
centuryFromYear(year);
