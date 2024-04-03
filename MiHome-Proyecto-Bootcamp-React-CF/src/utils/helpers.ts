import { UserInformation } from './types';
import { LOCAL_STORAGE_USER_INFORMATION, INITIAL_USER_INFORMATION } from '../utils/constants';

export const getUserInformationFromLocalStorage = (): UserInformation => {
  const userInformationFromStorage = localStorage.getItem(LOCAL_STORAGE_USER_INFORMATION);

  let storedUserInformation: UserInformation = INITIAL_USER_INFORMATION;
  if (userInformationFromStorage) {
    storedUserInformation = JSON.parse(userInformationFromStorage);
  } else {
    setUserInformationToLocalStorage(storedUserInformation);
  }
  return storedUserInformation;
};

export const setUserInformationToLocalStorage = (userInformation: UserInformation): void => {
  localStorage.setItem(LOCAL_STORAGE_USER_INFORMATION, JSON.stringify(userInformation));
};
