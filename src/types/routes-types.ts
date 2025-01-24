export const ROUTES = {
  HOME: "/",
  DASHBOARD: "/dashboard",
  BALANCE: "/dashboard/balance",
  CALENDAR: "/dashboard/calendar",
  FOCUS: "/dashboard/focus",
  INFO_MICROS: "/dashboard/info-micros",
  TO_DO: "/dashboard/to-do",
  WEATHER: "/dashboard/weather",
  SETTINGS: "/dashboard/settings",
};

export type ROUTES = (typeof ROUTES)[keyof typeof ROUTES];
