export const getLocalTime = (timezone: string) => {
  const now = new Date().toLocaleTimeString("es-AR", { timeZone: timezone, hour12: false });
  const [hours, minutes, seconds] = now.split(":");

  return { hours, minutes, seconds };
};
