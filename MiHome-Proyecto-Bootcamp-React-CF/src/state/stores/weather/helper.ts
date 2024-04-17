export function formatDateLocalTime(date: Date): string {
  const year: number = date.getFullYear();
  const month: number = date.getMonth() + 1; // Los meses van de 0 a 11
  const day: number = date.getDate();
  const hours: number = date.getHours();
  const minutes: number = date.getMinutes();

  // Formatear los componentes de la fecha y hora como cadena de texto
  const formattedMonth: string = month < 10 ? `0${month}` : `${month}`;
  const formattedDay: string = day < 10 ? `0${day}` : `${day}`;
  const formattedHours: string = hours < 10 ? `0${hours}` : `${hours}`;
  const formattedMinutes: string = minutes < 10 ? `0${minutes}` : `${minutes}`;

  const localTime: string = `${year}-${formattedMonth}-${formattedDay} ${formattedHours}:${formattedMinutes}`;

  return localTime;
}
