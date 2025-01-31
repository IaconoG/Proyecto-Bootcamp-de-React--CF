import { useState, useEffect } from "react";
import { useUserInfoStore } from "../state/stores/userInfo/userInfo-store";
import { getLocalDate } from "../utils/getLocalDate";

const useCurrentDate: () => { currentDate: { day: string; month: string; year: string } } = () => {
  const { getUserLocation } = useUserInfoStore();
  const timezone = getUserLocation().timeZone;
  const [currentDate, setCurrentDate] = useState(() => getLocalDate(timezone));

  useEffect(() => {
    const updateDate = () => {
      setCurrentDate(getLocalDate(timezone));
    };

    // Calculamos el tiempo restante hasta el próximo día
    const now = new Date();
    const tomorrow = new Date();
    tomorrow.setHours(24, 0, 0, 0);
    const timeUntilMidnight = tomorrow.getTime() - now.getTime();

    const midnightTimeout = setTimeout(() => {
      updateDate();
      setInterval(updateDate, 86400000); // 24 hours
    }, timeUntilMidnight);

    return () => {
      clearTimeout(midnightTimeout);
    };
  }, [timezone]);

  return { currentDate };
};

export { useCurrentDate };
