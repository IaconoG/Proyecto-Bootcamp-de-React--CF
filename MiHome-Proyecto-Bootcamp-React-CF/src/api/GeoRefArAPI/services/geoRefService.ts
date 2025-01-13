import {
  Province,
  ApiProvince,
  ApiDataProvincias,
} from "../models/geoRefModels";
import { GET_PROVINCES_ENDPOINT } from "../endpoints";

export const fetchProvinces = async (): Promise<Province[]> => {
  try {
    const response = await fetch(GET_PROVINCES_ENDPOINT);
    if (!response.ok) {
      throw new Error("Error con la respuesta de la API");
    }
    const data: ApiDataProvincias = await response.json();
    const provinces: Province[] = data.provincias.map((p: ApiProvince) => ({
      id: p.id,
      value: p.nombre,
    }));
    return provinces;
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener las provincias");
  }
};

// export const fetchCitiesByProvince = async (province: string): Promise<String[]> => {
//   try {
//     const response = await fetch(
//       `https://apis.datos.gob.ar/georef/api/localidades?provincia=${province}`
//     );
//     if (!response.ok) {
//       throw new Error("Error con la respuesta de la API");
//     }
//     const data: dataProvincias = await response.json();
//     const cities: string[] = data.provincias.map(
//       (city) => city.nombre
//     );
//     return cities;
//   } catch (error) {
//     console.error(error);
//     throw new Error("Error al obtener las localidades");
//   }
// }
