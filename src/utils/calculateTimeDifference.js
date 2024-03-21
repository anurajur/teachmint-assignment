// src/utils/timeUtils.js
export const calculateTimeInMinutes = (startTime, endTime = Date.now()) => {
  if (typeof startTime !== "number" || typeof endTime !== "number") {
    console.error("Invalid startTime or endTime:", startTime, endTime);
    return "Invalid time"; // Error message to display in the UI
  }
  const difference = endTime - startTime;
  const minutes = Math.floor(difference / 60000);
  return `${minutes} min`;
};

// src/utils/timeUtils.js
export const isOverThreeMinutes = (timestamp, endTime = Date.now()) => {
  const difference = endTime - timestamp;
  const minutes = Math.floor(difference / 60000);
  return minutes > 3; // Correct comparison
};
