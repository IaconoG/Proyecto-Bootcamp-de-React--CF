export const generateId = (title: string): string => {
  return title.replace(/\s/g, '-').toLowerCase() + Math.random();
};

export const formatDate = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  date = new Date(date);

  const formatNumber = (num: number): string => (num < 10 ? `0${num}` : `${num}`);

  const hour: string = formatNumber(date.getHours());
  const minute: string = formatNumber(date.getMinutes());

  return new Intl.DateTimeFormat('es-ES', options)
    .format(date)
    .replace(/(\d{1,2}:\d{1,2})/, `${hour}:${minute}`);
};

/*
 *  Expresion regular 😨:
 *  La línea `.replace(/(\d{1,2}:\d{1,2})/, `:`);` en el código utiliza una
 *  expresión regular para encontrar el patrón de uno o dos dígitos seguidos de dos puntos.
 *  Luego uno o dos dígitos más en la cadena de fecha formateada. Una vez que se encuentra este patrón, lo
 *  reemplaza con los valores de `hora:minuto` que se generaron anteriormente en la función.
 */

/*
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
 */
