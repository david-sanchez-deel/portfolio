import React, { Component } from "react";
import { CategoriesConsumer } from "../context/CategoriesContext";
import { EventsConsumer } from "../context/EventsContext";

class Form extends Component {
  state = {
    name: "",
    category: ""
  };

  // If user adds an event or category
  onChangeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <EventsConsumer>
        {value => (
          <form
            onSubmit={e => {
              console.log(value);
              e.preventDefault();
              value.searchEvents(this.state);
            }}
          >
            <fieldset className="uk-fieldset uk-margin">
              <legend className="uk-legend uk-text-center">
                Find your event by name or category
              </legend>
            </fieldset>
            <div className="uk-column-1-3@m uk-margin">
              <div className="uk-margin" uk-margin="true">
                <input
                  name="name"
                  className="uk-input"
                  type="text"
                  onChange={this.onChangeInput}
                  placeholder="Name of the event or city"
                />
              </div>
              <div className="uk-margin" uk-margin="true">
                <select
                  name="category"
                  className="uk-select"
                  onChange={this.onChangeInput}
                >
                  <option value="">Select your category</option>
                  <CategoriesConsumer>
                    {value =>
                      value.categories.map(category => (
                        <option
                          key={category.id}
                          value={category.id}
                          data-uk-form-select
                        >
                          {category.name}
                        </option>
                      ))
                    }
                  </CategoriesConsumer>
                </select>
              </div>
              <div className="uk-margin" uk-margin="true">
                <input
                  className="uk-button uk-button-danger"
                  type="submit"
                  value="Search"
                />
              </div>
            </div>
          </form>
        )}
      </EventsConsumer>
    );
  }
}

export default Form;
