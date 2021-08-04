import React from "react";
import EventItem from "./event-item";
import classes from "./event-list.module.css";

type Item = {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  isFeatured: boolean;
};
interface Props {
  items: Item[];
}

export const EventList = ({ items }: Props) => {
  console.log(items);
  return (
    <ul className={classes.list}>
      {items.map((item) => {
        <EventItem key={item.id} item={item} />;
      })}
    </ul>
  );
};
