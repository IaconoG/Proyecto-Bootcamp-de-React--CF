export enum OccupationType {
  Estudiante = "Estudiante",
  Trabajador = "Trabajador",
  Otro = "Otro",
  Nothing = "",
}

export type UserInfo = {
  userName: string;
  occupation?: OccupationType;
  location: UserLocation;
};

export type UserLocation = {
  province?: string;
  city?: string;
  timeZone?: string;
};
