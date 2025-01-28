export const getLocalTime = (timezone: string) => {
  return new Date().toLocaleString("es-AR", { timeZone: timezone });
};
