import React from "react";
import Link from "next/link";

import classes from "./event-item.module.css";

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
  item: Item;
}

const EventItem = ({ item }: Props) => {
  const { title, description, location, date, id, image } = item;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  console.log(item);

  const exploreLink = `/events/${id}`;

  const formattedAddress = location.replace(", ", "\n");
  return (
    <li className={classes.item}>
      <img src={"/" + image} alt="" />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h2>{title}</h2>
        </div>
        <div className={classes.date}>
          <time>{humanReadableDate}</time>
        </div>
        <div className={classes.address}>
          <address>{formattedAddress}</address>
        </div>
        <div className={classes.actions}>
          <Link href={exploreLink}>Explore Events</Link>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
