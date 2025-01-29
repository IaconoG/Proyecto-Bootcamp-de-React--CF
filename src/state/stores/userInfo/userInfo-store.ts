import { create } from "zustand";
import { persist } from "zustand/middleware";

import { USER_INFO_INITIAL_STATE } from "./constants";
import { UserInfo, UserLocation } from "./types";

type UserInfoState = UserInfo;

type UserInfoActions = {
  setInitialUserInfo: () => void;
  getUserInfo: () => UserInfoState;
  updateUserInfo: (userInfo: UserInfoState) => void;
  getUserLocation: () => UserLocation;
};

export const useUserInfoStore = create(
  persist<UserInfoState & UserInfoActions>(
    (set, get) => ({
      ...USER_INFO_INITIAL_STATE,

      setInitialUserInfo: () => {
        set(USER_INFO_INITIAL_STATE);
      },
      getUserInfo: () => get(),
      updateUserInfo: (userInfo) => {
        set(userInfo);
      },
      getUserLocation: () => get().location,
    }),
    { name: "user-info-store" }
  )
);
