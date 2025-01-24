import { WeatherData } from "../models/wather";
import {
  ForecastWeatherParams,
  getRealTimeWeatherEndpoint,
} from "../endpoints";
import dataTest from "../data/weather_conditions.json";
import { getCurrentDate } from "../utils";

/*
 * Obtenemos toda la información del tiempo en una localidad
 */
export async function fetchForecastWeatherData(
  params: ForecastWeatherParams
): Promise<WeatherData> {
  const { localidad, dt = getCurrentDate(), lang = "es", days = 3 } = params;
  const url = `${getRealTimeWeatherEndpoint}?q=${localidad.replace(
    " ",
    "%20"
  )}&days=${days}&lang=${lang}&dt=${dt}`;

  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": import.meta.env.VITE_APP_WEATHER_RAPIDAPI_KEY!,
      "x-rapidapi-host": import.meta.env.VITE_APP_WEATHER_RAPIDAPI_HOST!,
    },
  };

  try {
    // FIXME: Cuando devuelve un error la api, deberiamos controlar el error
    const response = await fetch(url, options);
    const data = await response.json();
    return data as WeatherData;
  } catch (error) {
    console.error("Error al obtener los datos de weather api", error);
    throw error;
  }
}

export function fetchForecastWeatherTest(
  params: ForecastWeatherParams
): WeatherData {
  const { localidad, dt = getCurrentDate(), lang = "es", days = 3 } = params;
  const url = `${getRealTimeWeatherEndpoint}?q=${localidad}&dt=${dt}&lan=${lang}&days=${days}`;
  console.log(url);
  const data = dataTest as WeatherData;
  console.log(data);
  return data;
}

/*
 * Funcion de auto refresco del componente cada 3 horas
 * setInterval(callback, interval) -> https://developer.mozilla.org/en-US/docs/Web/API/setInterval
 * - callback: Función que se ejecutará cada intervalo, recibiremos por parametro la funcion fetchWeatherData
 * - interval: Intervalo de tiempo en milisegundos, por defecto 3 horas
 *    - 3 * 60 * 60 * 1000 = 3 horas en milisegundos 

 */
export function startAutoRefresh(
  callback: () => void,
  interval: number = 3 * 60 * 60 * 1000
): NodeJS.Timeout {
  // FIXME: NodeJS.Timeout como se resuelve en React + Typescript
  return setInterval(callback, interval);
}
