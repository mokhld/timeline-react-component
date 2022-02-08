import { generatingDates, generatingId } from "../utils";

// data array for timeline events
export default [
  {
    id: generatingId(),
    time: generatingDates(),
    title: "New Event",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, doloremque aut! Laboriosam, dicta! Maxime, nostrum perferendis error ipsa molestias aut.",
  },
];
