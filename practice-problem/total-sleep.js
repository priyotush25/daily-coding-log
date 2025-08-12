/*function signature/sample */
function calculateSleepTime(times) {
  if (!Array.isArray(times)) {
    return "Invalid";
  }

  for (let time of times) {
    if (typeof time !== "number") {
      return "invalid";
    }
  }

  let totalSecond = 0;

  for (let time of times) {
    totalSecond += time;
  }

  let hour = Math.floor(totalSecond / 3600);
  let minute = Math.floor((totalSecond % 3600) / 60);
  let second = totalSecond % 60;

  return {
    hour: hour,
    minute: minute,
    second: second,
  };
}

console.log(calculateSleepTime([100, 3800, "90"]));
