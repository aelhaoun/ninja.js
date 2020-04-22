import React from "react";

import Row from "./Row";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRows: []
    };
  }

  render() {
    const { currentRows } = this.props;

    return (
      <table>
        <tbody>
          {currentRows.map(row => (
            <Row key={row.id} row={row} />
          ))}
        </tbody>
      </table>
    );
  }
}

export default List;
