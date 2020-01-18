import React from "react";
import { EventsConsumer } from "../context/EventsContext";
import Event from "./Event";

const ListEvents = () => {
  return (
    <div className="uk-child-width-1-3@m" uk-grid="true">
      <EventsConsumer>
        {value =>
          value.events.map(event => <Event key={event.id} {...event}></Event>)
        }
      </EventsConsumer>
    </div>
  );
};

export default ListEvents;
