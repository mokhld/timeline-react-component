import React from "react";
import { singleTimelineProps } from "../types/index";

const SingleTimeline: React.FunctionComponent<singleTimelineProps> = ({
  itemId,
  item,
  index,
}) => {
  return (
    <div
      className={`timeline__event animated fadeInUp delay-3s timeline__event--type${
        itemId + 1
      }`}
      key={index}
      style={{ zIndex: -index }}
    >
      <div className="timeline__event__icon">
        <i className="lni-cake"></i>
      </div>
      <div className="single_time_body">
        <div className="timeline__event__date">
          {item.time.date}
          <br />
          {item.time.time}
        </div>
        <div className="timeline__event__content ">
          <div className="timeline__event__title">{item.title}</div>
          <div className="timeline__event__description">
            <p className="mb-0">{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTimeline;
