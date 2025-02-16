import { ApiProvince, ApiDataProvincias, ApiCity, ApiDataCiudades } from "../models/geoRefModels";
import { GET_PROVINCES_ENDPOINT, GET_CITIES_BY_PROVINCE_ENDPOINT } from "../endpoints";
import { OptionProps } from "../../../components/Form/Option";

export const fetchProvinces = async (): Promise<OptionProps[]> => {
  try {
    const params = "orden=nombre&campos=basico";
    const response = await fetch(GET_PROVINCES_ENDPOINT + params);
    if (!response.ok) throw new Error("Error con la respuesta de la API");

    const data: ApiDataProvincias = await response.json();
    const provinces: OptionProps[] = data.provincias.map((p: ApiProvince) => ({
      id: p.id,
      value: p.nombre,
      label: p.nombre,
    }));
    return provinces;
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener las provincias");
  }
};

export const fetchCitiesByProvince = async (province: string): Promise<OptionProps[]> => {
  try {
    const params = `${encodeURIComponent(province)}&orden=nombre&aplanar=true&campos=categoria&max=999`;
    const response = await fetch(GET_CITIES_BY_PROVINCE_ENDPOINT + params);
    if (!response.ok) throw new Error("Error con la respuesta de la API");

    const data: ApiDataCiudades = await response.json();
    const CATEGORIA_CIUDAD = ["Localidad simple", "Componente de localidad compuesta"];
    const mapOnlyCities: ApiCity[] = data.localidades.filter((c: ApiCity) =>
      CATEGORIA_CIUDAD.includes(c.categoria)
    );

    const cities: OptionProps[] = mapOnlyCities.map((c: ApiCity) => ({
      id: c.id,
      value: c.nombre,
      label: c.nombre,
    }));
    return cities;
  } catch (error) {
    console.error(error);
    throw new Error("Error al obtener las localidades");
  }
};
