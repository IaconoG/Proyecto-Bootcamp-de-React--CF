import { OccupationType, UserInfo } from "./types";

export const OCCUPATION_OPTIONS_VALUES = Object.values(OccupationType);

export const DEFAULT_TIME_ZONE = "America/Argentina/Buenos_Aires";

export const USER_INFO_INITIAL_STATE: UserInfo = {
  userName: "",
  occupation: OccupationType.Nothing,
  location: {
    province: "",
    city: "",
    timeZone: DEFAULT_TIME_ZONE,
  },
};
