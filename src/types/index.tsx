export interface generatingDatesType {
  date: string;
  time: string;
}

export interface singleTimeline {
  id: number;
  time: generatingDatesType;
  title: string;
  description: string;
}

export interface singleTimelineProps {
  itemId: number;
  item: singleTimeline;
  index: number;
}

export interface serviceHooks {
  getData: Function;
  data: singleTimeline[];
}
