export const getLocalTime = (timezone: string) => {
  const now = new Date().toLocaleTimeString("es-AR", { timeZone: timezone });
  const [hours, minutes, seconds] = now.split(":");
  const currentTime = { hours, minutes, seconds };

  return currentTime;
};
