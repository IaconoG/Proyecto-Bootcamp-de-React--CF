import { create } from "zustand";
import { persist } from "zustand/middleware";

import { USER_INFO_INITIAL_STATE } from "./constants";
import { UserInfo, UserLocation } from "./types";

type UserInfoState = UserInfo;

type UpdateUserInfoResponse = { success: boolean; message: string };

type UserInfoActions = {
  setInitialUserInfo: () => void;
  getUserInfo: () => UserInfoState;
  updateUserInfo: (userInfo: UserInfoState) => UpdateUserInfoResponse;
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
        try {
          set(userInfo);
          return { success: true, message: "Datos guardados correctamente." };
        } catch (error) {
          return { success: false, message: "Error al guardar los datos." };
        }
      },
      getUserLocation: () => get().location,
    }),
    { name: "user-info-store" }
  )
);
