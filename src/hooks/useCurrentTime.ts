import { useState, useEffect } from "react";
import { useUserInfoStore } from "../state/stores/userInfo/userInfo-store";
import { getLocalTime } from "../utils/getLocalTime";

export const useCurrentTime: () => {
  currentTime: { hours: string; minutes: string; seconds: string };
} = () => {
  const { getUserLocation } = useUserInfoStore();
  const timezone = getUserLocation().timeZone;
  const [currentTime, setCurrentTime] = useState(() => getLocalTime(timezone));

  useEffect(() => {
    // Actualizar currentTime cada 1 segundo
    const timeInterval = setInterval(() => {
      setCurrentTime(getLocalTime(timezone));
    }, 1000); // 1 second

    return () => {
      clearInterval(timeInterval);
    };
  }, [timezone]);

  return { currentTime };
};
