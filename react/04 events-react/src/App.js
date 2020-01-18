import React from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import ListEvents from "./components/ListEvents";
import CategoriesProvider from "./context/CategoriesContext";
import EventsProvider from "./context/EventsContext";

function App() {
  return (
    <EventsProvider>
      <CategoriesProvider>
        <Header></Header>
        <div className="uk-container">
          <Form />
          <ListEvents></ListEvents>
        </div>
      </CategoriesProvider>
    </EventsProvider>
  );
}

export default App;
