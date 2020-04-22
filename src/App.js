import React, { Component } from "react";
import DataTable from "./DataTable";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: props.rows,
      rowsPerPage: props.rowsPerPage
    };
  }

  render() {
    const { rows, locale, rowsPerPage } = this.state;
    return (
      <div className="container mt-3">
        <DataTable rows={rows} locale={locale} rowsPerPage={rowsPerPage} />
      </div>
    );
  }
}

export default App;
