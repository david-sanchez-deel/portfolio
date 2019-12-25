import React, { Component } from "react";
import PropTypes from 'prop-types';

  
function capitalize(text) { 
  return text[0].toUpperCase() +  
  text.slice(1); 
} 

const categories = [
  "general",
  "busisness",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology"
];

class Form extends Component {
  state = {
    category: 'general',
  };

  render() {
    return (
      <div className="search-bar row">
        <div className="col s12 m8 offset-m2">
          <form>
            <h2>Find news in colombia by category</h2>

            <div className="input-field col s12">
              <select value={this.state.category} onChange={this.onCategoryChange}>
                {categories.map(category => (
                  <option key={category} value={category}>{capitalize(category)}</option>
                ))}
              </select>
            </div>
          </form>
        </div>
      </div>
    );
  }

  onCategoryChange = e => {
    this.setState({
      category: e.target.value,
    }, () => {
      this.props.search(this.state.category);
    });
  }
}

Form.propTypes = {
  search: PropTypes.func.isRequired,
}
export { Form };
