import axios from "axios";
import React, { Component } from "react";

// Create the context
const EventsContext = React.createContext();
export const EventsConsumer = EventsContext.Consumer;

class EventsProvider extends Component {
  token = "MsZIomzqlNMGdX3ILoAx2vEvoq1yWPpN";

  state = {
    events: []
  };

  getEvents = async ({ name, category }) => {
    let url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${this.token}&keyword=${name}&classificationId=${category}&sort=date,desc`;
    let events = await axios.get(url);
    this.setState({
      events: events.data._embedded ? events.data._embedded.events : []
    });
  };

  render() {
    return (
      <EventsContext.Provider
        value={{
          events: this.state.events,
          searchEvents: this.getEvents
        }}
      >
        {this.props.children}
      </EventsContext.Provider>
    );
  }
}

export default EventsProvider;
