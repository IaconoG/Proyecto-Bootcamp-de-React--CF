import { getLocalTime } from "./getLocalTime";

type DayPeriod = "day" | "night";

export const isDayOrNight = (timezone: string): DayPeriod => {
  const localTime = getLocalTime(timezone);
  const hours = Number(localTime.hours);

  return hours >= 6 && hours < 18 ? "day" : "night";
};
