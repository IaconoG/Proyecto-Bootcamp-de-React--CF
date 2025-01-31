export const getLocalDate = (timezone: string) => {
  const now = new Date();
  const dateString = now.toLocaleDateString("es-AR", {
    timeZone: timezone,
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  // datestring = "2 de septiembre de 2021"
  const [day, month, year] = dateString.split(" de ");

  console.log("dateString", dateString);

  return { day, month, year };
};
