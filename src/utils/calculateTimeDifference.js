// src/utils/timeUtils.js
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
    return "Invalid time"; // Error message to display in the UI
  }
  const difference = endTime - startTime;
  const minutes = Math.floor(difference / 60000);
  const seconds = Math.floor((difference % 60000) / 1000);
  return `${minutes} min ${seconds < 10 ? "0" : ""}${seconds} sec`;
};

export const isOverThreeMinutes = (timestamp, endTime = Date.now()) => {
  const difference = endTime - timestamp;
  const minutes = Math.floor(difference / 60000);
  return minutes > 3; // Correct comparison
};
