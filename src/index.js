import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

var userData = JSON.parse(document.getElementById("user-data").dataset.users);
ReactDOM.render(
  <App rows={userData} locale="da" rowsPerPage={5} />,
  document.getElementById("root")
);
