const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  //...
]

function superbowlWin(funny) {
  for (const user of funny) {
    if (user.result === 'W') {
      return user.year
    }
    else console.log(undefined)
  }

}

superbowlWin(record);
