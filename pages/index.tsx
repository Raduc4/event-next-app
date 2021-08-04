import React from "react";
import { getFeaturedEvents } from "../dummy-data";
import { EventList } from "../components/events/event-list";
import classes from "./iii.module.css";
export default function Home() {
  const featuredEvents = getFeaturedEvents();

  return (
    <div className={classes.iii}>
      <EventList items={featuredEvents} />
    </div>
  );
}
