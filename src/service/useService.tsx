import { useState } from "react";
import dataImport from "../data";
import { generatingDates, generatingId } from "../utils";

import {
  generatingDatesType,
  singleTimeline,
  serviceHooks,
} from "../types/index";

// custom Hook for generating new event
export const useService = (): serviceHooks => {
  const [data, setData] = useState<singleTimeline[]>(dataImport);

  // adding item
  const newAddition = (
    id: number,
    date: generatingDatesType
  ): singleTimeline => {
    let addition = {
      ...dataImport[0],
      id: id,
      time: { date: date.date, time: date.time },
    };

    return addition;
  };

  // set interval for events
  function setIntervalX(callback: any, delay: number, repetitions: number) {
    var counter = 0;
    var intervalID = window.setInterval(function () {
      callback();
      ++counter;

      if (counter === repetitions) {
        window.clearInterval(intervalID);
      }
    }, delay);
  }

  const getData = () => {
    setIntervalX(
      function () {
        setData((prev: any) => {
          return [
            newAddition(generatingId(), generatingDates()),
            ...prev,
          ].slice(0, 6);
        });
      },
      5000,
      5
    );
  };

  return { getData, data };
};
