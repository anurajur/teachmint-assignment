export const calculateTimeDifference = (timePlaced) => {
  const now = new Date();
  const placed = new Date(timePlaced);
  const difference = now.getTime() - placed; // time in milliseconds

  const minutes = Math.floor(difference / 60000);
  const seconds = ((difference % 60000) / 1000).toFixed(0);
  return `${minutes} min ${seconds < 10 ? "0" : ""}${seconds} sec`;
};
