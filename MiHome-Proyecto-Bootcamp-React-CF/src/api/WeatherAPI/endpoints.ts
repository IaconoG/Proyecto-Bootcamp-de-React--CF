/* Wheater API
 * https://rapidapi.com/weatherapi/api/weatherapi-com
 * https://www.weatherapi.com/docs/
 */
export const getRealTimeWeatherEndpoint =
  'https://weatherapi-com.p.rapidapi.com/current.json';

export interface RealTimeWeatherParams {
  localidad: string;
  date?: string; // YYYY-MM-DD
}

/* https://www.weatherapi.com/docs/#apis-forecast
 * Con este endpoint obtenemos Forecast Weather
 */

export const getForecastWeatherEndpoint =
  'https://weatherapi-com.p.rapidapi.com/forecast.json';

export interface ForecastWeatherParams {
  localidad: string;
  dt?: string; // YYYY-MM-DD // Default today
  lang?: string; // Default 'en'
  days?: number; // Default 3 (free)
}
