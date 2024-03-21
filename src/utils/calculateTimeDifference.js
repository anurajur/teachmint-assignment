export const calculateTimeInMinutesAndSeconds = (
  startTime,
  endTime = Date.now()
) => {
  if (
    typeof startTime !== "number" ||
    startTime <= 0 ||
    typeof endTime !== "number" ||
    endTime <= 0
  ) {
    console.error("Invalid startTime or endTime:", startTime, endTime);
    return "Invalid time";
  }
  const difference = endTime - startTime;
  const minutes = Math.floor(difference / 60000);
  const seconds = Math.floor((difference % 60000) / 1000);
  return `${minutes} min ${seconds < 10 ? "0" : ""}${seconds} sec`;
};

export const isOverThreeMinutes = (startTime, endTime = Date.now()) => {
  const difference = endTime - startTime;
  return difference > 180000;
};
