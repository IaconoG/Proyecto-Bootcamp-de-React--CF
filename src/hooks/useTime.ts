import { useState, useEffect } from "react";
import { isDayOrNight } from "../utils/isDayOrNight";

export const useTime = (timezone: string) => {
  const [dayPeriod, setDayPeriod] = useState<"day" | "night">(isDayOrNight(timezone));

  useEffect(() => {
    const interval = setInterval(() => {
      setDayPeriod(isDayOrNight(timezone));
    }, 3600000); // Se actualiza cada 1 hora

    return () => clearInterval(interval);
  }, [timezone]);

  return dayPeriod;
};
