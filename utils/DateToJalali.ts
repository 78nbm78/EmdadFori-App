// export const DateToJalally = ({ date }: { date: string | undefined | null }) => {
//   if (date === undefined || date === null) return "";

//   const myDate = new Date(date);
//   const d = new Intl.DateTimeFormat("fa-IR").format(myDate);
//   const finnal = d.toString();
//   return finnal;
// }

import { parseISO, format } from "date-fns-jalali";

export const DateToJalali = ({ date }: { date: string | undefined | null }) => {
  if (date === undefined || date === null) return "";

  const myDate = parseISO(date);
  const jalaliDate = format(myDate, "yy/MM/dd - HH:mm");

  return jalaliDate;
};
