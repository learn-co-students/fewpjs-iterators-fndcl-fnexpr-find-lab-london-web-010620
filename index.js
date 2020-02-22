const testVar = {}

function testFunc() {
  return "hi"
}
const superbowlWin = (record) => {
  let result = record.find(el => el.result === "W")
  if (result){
    return result.year
  }else
  return undefined
};
