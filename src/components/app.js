import React, { Component } from "react";
import BlogContainer from "./blog/blog-container";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <BlogContainer />
      </div>
    );
  }
}
