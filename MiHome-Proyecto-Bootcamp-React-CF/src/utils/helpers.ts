import { UserInformation } from './types';
import { LOCAL_STORAGE_USER_INFORMATION, INITIAL_USER_INFORMATION } from '../utils/constants';

export const getUserInformationFromLocalStorage = (): UserInformation => {
  const userInformationFromStorage = localStorage.getItem(LOCAL_STORAGE_USER_INFORMATION);
  const storedUserInformation = userInformationFromStorage
    ? JSON.parse(userInformationFromStorage)
    : INITIAL_USER_INFORMATION;

  return storedUserInformation;
};

export const setUserInformationToLocalStorage = (userInformation: UserInformation): void => {
  localStorage.setItem(LOCAL_STORAGE_USER_INFORMATION, JSON.stringify(userInformation));
};
