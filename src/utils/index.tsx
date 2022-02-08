// utility functions
import { generatingDatesType } from "../types/index";

// function to generate IDs
const generatingId = (): number => {
  return Math.floor(Math.random() * (3 - 1 + 1)) + 1;
};

// function to generate dates
const generatingDates = (): generatingDatesType => {
  const today = new Date();

  const date =
    today.getFullYear() +
    "-" +
    "0" +
    (today.getMonth() + 1) +
    "-" +
    "0" +
    today.getDate();

  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

  return { date, time };
};

export { generatingDates, generatingId };
