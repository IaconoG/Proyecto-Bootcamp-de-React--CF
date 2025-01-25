import { UserInfo } from "./types";

export const USER_INFO_INITIAL_STATE: UserInfo = {
  userName: "",
  occupation: "",
  location: {
    province: "",
    city: "",
    timeZone: "America/Argentina/Buenos_Aires",
  },
};
