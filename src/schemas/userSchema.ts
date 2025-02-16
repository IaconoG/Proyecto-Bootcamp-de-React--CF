import { z } from "zod";
import { DEFAULT_TIME_ZONE } from "../state/stores/userInfo/constants";
import { OccupationType } from "../state/stores/userInfo/types";
import { OptionProps } from "../components/Form/Option";

export const userSchema = (provinces: OptionProps[], cities: OptionProps[]) => {
  return z.object({
    userName: z.string().min(3, "El nombre de usuario debe tener al menos 3 caracteres."),
    occupation: z.nativeEnum(OccupationType, { message: "Elige una ocupación válida." }).optional(),

    location: z
      .object({
        province: z.string().refine(
          // Si la provincia no coincide con ninguna de las opciones
          (province) => {
            return !province || provinces.some((p) => p.value === province);
          },
          {
            message: "Provincia inválida.",
          }
        ),
        city: z.string().refine(
          // Si la ciudad no coincide con ninguna de las opciones
          (city) => {
            return !city || cities.some((c) => c.value === city);
          },
          {
            message: "Ciudad inválida.",
          }
        ),
        timeZone: z.string().default(DEFAULT_TIME_ZONE),
      })
      .superRefine((location, ctx) => {
        const hasProvince = !!location.province;
        const hasCity = !!location.city;

        // Si solo falta uno de los 2
        if ((hasProvince && !hasCity) || (!hasProvince && hasCity)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Debes seleccionar una provincia y una ciudad.",
            path: ["warning"],
          });
        }
        // Si se selecciona una provincia pero no una ciudad
        if (hasProvince && !hasCity) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Selecciona una ciudad.",
            path: ["city"],
          });
        }
      }),
  });
};
