/*!
 *
 */

 import React from "react";
 import ReactDOM from "react-dom";

var app = {
  initialize: function() {
    document.addEventListener("deviceready", this.onDeviceReady.bind(this), false);
  },
  onDeviceReady: function() {
    ReactDOM.render(
      <h1>Hello from Lockbox Mobile (React-edition)!</h1>,
      document.getElementById("content")
    );
  }
};

app.initialize();
