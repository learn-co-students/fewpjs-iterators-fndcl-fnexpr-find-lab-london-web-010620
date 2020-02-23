const superbowlWin = record => {
  let found = record.find(element => {
    return element.result === "W";
  });
  if (found) return found.year;
};
