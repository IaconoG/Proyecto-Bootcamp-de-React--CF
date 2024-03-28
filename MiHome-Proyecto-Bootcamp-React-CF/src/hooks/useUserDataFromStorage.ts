import { useEffect, useState } from 'react';

import { UserInformation, OccupationTypeUser } from '../utils/types';
import { LOCAL_STORAGE_USER_INFORMATION, INITIAL_USER_INFORMATION } from '../utils/constants';

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
    const userInformationFromStorage = localStorage.getItem(LOCAL_STORAGE_USER_INFORMATION);
    const storedUserInformation = userInformationFromStorage
      ? JSON.parse(userInformationFromStorage)
      : INITIAL_USER_INFORMATION;

    setStoredUserData(storedUserData);
    localStorage.setItem(LOCAL_STORAGE_USER_INFORMATION, JSON.stringify(storedUserInformation));
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
    localStorage.setItem(LOCAL_STORAGE_USER_INFORMATION, JSON.stringify(updatedStoredUserData));
  };

  const addUserOficio = (oficio: OccupationTypeUser | null): void => {
    if (!storedUserData) return;

    const updatedStoredUserData = { ...storedUserData };
    updatedStoredUserData.userData.oficio = oficio;

    setStoredUserData(updatedStoredUserData);
    localStorage.setItem(LOCAL_STORAGE_USER_INFORMATION, JSON.stringify(updatedStoredUserData));
  };

  return {
    getUserName,
    getUserOficio,
    addUserName,
    addUserOficio,
  };
};

export default useUserDataFromStorage;
