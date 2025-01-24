export type OccupationType = "Estudiante" | "Trabajador" | "Otro" | "";

export type UserInfo = {
  userName: string;
  occupation: OccupationType;
  location: UserLocation;
};

export type UserLocation = {
  province: string;
  city: string;
};
