import React, { Component } from "react";
import "./App.css";
import Component from './components/Component';

export default class AppClass extends Component {
  render() {
    const data = Component();

    return (
      <div>
        {
         data.map((element) => (
          <div key={element.id} className="column">
            <img src={element.img} alt={`Elephant ${element.id}`} />
          </div>
        ))}
      </div>
    );
    }
  }