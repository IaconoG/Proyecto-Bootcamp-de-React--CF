const DEFAULT_ROUTE = "/home";
export const ROUTES = {
  LADNINGPAGE: "/",
  HOME: DEFAULT_ROUTE,
  BALANCE: DEFAULT_ROUTE + "/balance",
  CALENDAR: DEFAULT_ROUTE + "/calendar",
  FOCUS: DEFAULT_ROUTE + "/focus",
  TRANSPORT: DEFAULT_ROUTE + "/transport",
  TO_DO: DEFAULT_ROUTE + "/to-do",
  WEATHER: DEFAULT_ROUTE + "/weather",
  SETTINGS: DEFAULT_ROUTE + "/settings",
};

export type ROUTES = (typeof ROUTES)[keyof typeof ROUTES];
