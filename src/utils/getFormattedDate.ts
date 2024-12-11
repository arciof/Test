const getFormattedDate = (date: Date) =>
  date.toLocaleDateString("it-IT", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default getFormattedDate;
