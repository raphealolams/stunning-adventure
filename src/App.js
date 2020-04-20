import React, { Component } from "react";
import Product from "./Component/Product/Product";
import { data } from "./data/index";

class App extends Component {
  state = {
    products: data,
  };

  handleClick = (e) => {
    const { value } = e.target;
    const currentLocal = localStorage.getItem(value);

    if (currentLocal) {
      this.removeFromLocalStorage(value);
    } else {
      this.saveToLocalStorage(value);
    }
  };

  saveToLocalStorage = (value) => {
    localStorage.setItem(value, value);
  };

  removeFromLocalStorage = (value) => {
    localStorage.removeItem(value);
  };

  render() {
    return (
      <div className="container">
        <Product
          products={this.state.products}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
