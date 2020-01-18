import axios from "axios";
import React, { Component } from "react";

// Create the context
const CategoriesContext = React.createContext();
export const CategoriesConsumer = CategoriesContext.Consumer;

class CategoriesProvider extends Component {
  token = "MsZIomzqlNMGdX3ILoAx2vEvoq1yWPpN";
  state = {
    categories: []
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = async () => {
    let url = `https://app.ticketmaster.com/discovery/v2/classifications.json?apikey=${this.token}`;
    let categories = await axios.get(url);
    this.setState({
      categories: categories.data._embedded.classifications
        .map(c => c.segment)
        .filter(c => c)
    });
  };
  render() {
    return (
      <CategoriesContext.Provider
        value={{
          categories: this.state.categories
        }}
      >
        {this.props.children}
      </CategoriesContext.Provider>
    );
  }
}

export default CategoriesProvider;
