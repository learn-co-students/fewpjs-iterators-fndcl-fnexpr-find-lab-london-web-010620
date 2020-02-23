function superbowlWin(record) {
  let result = record.find(function(e) {
    return e.result === "W";
  });
  if (result) {
    return result.year;
  } else {
    result;
  }
}
