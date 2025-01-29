import { useState, useEffect } from "react";
import { useUserInfoStore } from "../state/stores/userInfo/userInfo-store";
import { isDayOrNight } from "../utils/isDayOrNight";

export const useDayPeriod = () => {
  const { getUserLocation } = useUserInfoStore();
  const timezone = getUserLocation().timeZone;
  const [dayPeriod, setDayPeriod] = useState<"day" | "night">(isDayOrNight(timezone));

  useEffect(() => {
    // Actualizar dayPeriod cada hora
    const dayPeriodInterval = setInterval(() => {
      setDayPeriod(isDayOrNight(timezone));
    }, 3600000); // 1 hour

    return () => {
      clearInterval(dayPeriodInterval);
    };
  }, [timezone]);

  return { dayPeriod };
};
