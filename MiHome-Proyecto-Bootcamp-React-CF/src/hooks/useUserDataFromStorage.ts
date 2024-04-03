import { useEffect, useState } from 'react';

import { UserInformation, OficioTypeUser } from '../utils/types';
import { INITIAL_USER_INFORMATION } from '../utils/constants';
import {
  getUserInformationFromLocalStorage,
  setUserInformationToLocalStorage,
} from '../utils/helpers';

interface UserDataFromStorageHook {
  getUserName: () => string;
  getUserOficio: () => OficioTypeUser;
  addUserName: (name: string) => void;
  addUserOficio: (oficio: OficioTypeUser) => void;
}

const useUserDataFromStorage = (): UserDataFromStorageHook => {
  const [storedUserData, setStoredUserData] = useState<UserInformation>(INITIAL_USER_INFORMATION);

  useEffect(() => {
    const storedUserInformation = getUserInformationFromLocalStorage();
    if (!storedUserInformation) return;
    setStoredUserData(storedUserInformation);
  }, []);

  const getUserName = (): string => {
    const storedUserInformation = getUserInformationFromLocalStorage();
    return storedUserInformation?.userData.username || '';
  };

  const getUserOficio = (): OficioTypeUser => {
    const storedUserInformation = getUserInformationFromLocalStorage();
    return storedUserInformation?.userData.oficio || '';
  };

  const addUserName = (username: string): void => {
    if (!storedUserData) return;

    const updatedStoredUserData = { ...storedUserData };
    updatedStoredUserData.userData.username = username?.trim() || '';

    setStoredUserData(updatedStoredUserData);
    setUserInformationToLocalStorage(updatedStoredUserData);
  };

  const addUserOficio = (oficio: OficioTypeUser): void => {
    if (!storedUserData) return;

    const updatedStoredUserData = { ...storedUserData };
    updatedStoredUserData.userData.oficio = oficio || '';

    setStoredUserData(updatedStoredUserData);
    setUserInformationToLocalStorage(updatedStoredUserData);
  };

  return {
    getUserName,
    getUserOficio,
    addUserName,
    addUserOficio,
  };
};

export default useUserDataFromStorage;
