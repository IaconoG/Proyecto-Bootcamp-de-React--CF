import { z } from "zod";
import { DEFAULT_TIME_ZONE } from "../state/stores/userInfo/constants";
import { OccupationType } from "../state/stores/userInfo/types";

export const userSchema = z.object({
  userName: z.string().min(3, "El nombre de usuario debe tener al menos 3 caracteres."),
  occupation: z.nativeEnum(OccupationType, { message: "Elige una ocupación válida." }).optional(),

  location: z.object({
    province: z.string().default(""),
    city: z.string().default(""),
    timeZone: z.string().default(DEFAULT_TIME_ZONE),
  }),
});
