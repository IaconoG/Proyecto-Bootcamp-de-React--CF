import { useEffect, useState } from 'react';

import { UserInformation, OccupationTypeUser } from '../utils/types';
import { INITIAL_USER_INFORMATION } from '../utils/constants';
import {
  getUserInformationFromLocalStorage,
  setUserInformationToLocalStorage,
} from '../utils/helpers';

interface UserDataFromStorageHook {
  getUserName: () => string;
  getUserOficio: () => OccupationTypeUser | null;
  addUserName: (name: string | null) => void;
  addUserOficio: (oficio: OccupationTypeUser | null) => void;
}

const useUserDataFromStorage = (): UserDataFromStorageHook => {
  const [storedUserData, setStoredUserData] = useState<UserInformation | null>(
    INITIAL_USER_INFORMATION
  );

  useEffect(() => {
    const storedUserInformation = getUserInformationFromLocalStorage();
    setStoredUserData(storedUserInformation);
    setUserInformationToLocalStorage(storedUserInformation);
  }, []);

  const getUserName = (): string => {
    return storedUserData?.userData.username || '';
  };

  const getUserOficio = (): OccupationTypeUser | null => {
    return storedUserData?.userData.oficio || null;
  };

  const addUserName = (username: string | null): void => {
    if (!storedUserData) return;

    const updatedStoredUserData = { ...storedUserData };
    updatedStoredUserData.userData.username = username?.trim() || '';

    setStoredUserData(updatedStoredUserData);
    setUserInformationToLocalStorage(updatedStoredUserData);
  };

  const addUserOficio = (oficio: OccupationTypeUser | null): void => {
    if (!storedUserData) return;

    const updatedStoredUserData = { ...storedUserData };
    updatedStoredUserData.userData.oficio = oficio;

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
