import React from "react";

const Row = props => {
  const { row } = props;

  return (
    <tr>
      <td>
        <a href={row.link}>{row.title}</a>
        <br />
        <small>{row.subtitle}</small>
      </td>
    </tr>
  );
};

export default Row;
