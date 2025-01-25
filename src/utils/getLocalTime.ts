export const getLocalTime = (timezone: string) => {
  return new Date().toLocaleString("en-US", { timeZone: timezone });
};
