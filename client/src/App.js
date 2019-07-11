import React, { Component } from "react";
import "./App.css";
import { BrowserRouter } from 'react-router-dom'
import Router from './router'


class App extends Component {
  
  componentDidMount() {
    this.props.listUsers()
  }
  render() {
    return (
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    );
  }
}

export default (App);