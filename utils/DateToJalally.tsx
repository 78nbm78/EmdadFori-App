const DateToJalally = ({ date }: { date: string | undefined | null }) => {
  if (date === undefined || date === null) return "";

  const myDate = new Date(date);
  const d = new Intl.DateTimeFormat("fa-IR").format(myDate);
  const finnal = d.toString();
  return finnal;
};

export default DateToJalally;
