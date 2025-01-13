/* API Localidades
 * https://datosgobar.github.io/georef-ar-api/
 * https://datosgobar.github.io/georef-ar-api/open-api/
 * https://datosgobar.github.io/paquete-apertura-datos/guia-interoperables/
 */

//* Definimos la URL base de la API
const GEOREF_API_BASE_URL = "https://apis.datos.gob.ar/georef/api";

//* Definimos el endpoint para obtener las provincias
export const GET_PROVINCES_ENDPOINT = `${GEOREF_API_BASE_URL}/provincias?campos=nombre`;

//* Definimos el endpoint para obtener las localidades segun una provincia
// export const GET_CITIES_BY_PROVINCE_ENDPOINT = `${GEOREF_API_BASE_URL}/localidades?provincia=`;
