import React from "react";

import Pagination from "../pagination/Pagination";
import List from "../list/List";
import Search from "../search/Search";

class DataTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: this.props.rows,
      currentPageNumber: 0,
      totalNumberOfPages: this.calculateTotalNumberOfPages(this.props.rows)
    };
    this.search = this.search.bind(this);
    this.changeToPageNumber = this.changeToPageNumber.bind(this);
  }

  static defaultProps = {
    rowsPerPage: 40
  };

  calculateTotalNumberOfPages(rows) {
    const { rowsPerPage } = this.props;
    if (rowsPerPage === 0) return 0;
    return Math.ceil(rows.length / rowsPerPage);
  }

  search(text) {
    const textLower = text.toLowerCase();
    const { rows } = this.props;

    const rowsFound = rows.filter(row => {
      return (
        row.name1.toLowerCase().indexOf(textLower) !== -1 ||
        (row.email && row.email.toLowerCase().indexOf(textLower) !== -1)
      );
    });

    this.setState({
      rows: rowsFound,
      currentPageNumber: 0,
      totalNumberOfPages: this.calculateTotalNumberOfPages(rowsFound)
    });
  }

  changeToPageNumber(pageNumber) {
    this.setState({ currentPageNumber: pageNumber });
  }

  getCurrensRows() {
    const { rowsPerPage } = this.props;
    const { rows, currentPageNumber } = this.state;
    const startIndex = currentPageNumber * rowsPerPage;
    return rows.slice(startIndex, startIndex + rowsPerPage).map(row => {
      return {
        id: row.per_id,
        title: row.name1,
        subtitle: row.email,
        link: row.edit_path
      };
    });
  }

  render() {
    const { totalNumberOfPages, currentPageNumber } = this.state;
    const currentRows = this.getCurrensRows();

    return (
      <div>
        <Search onSearch={this.search} />
        {currentRows.length > 0 && <List currentRows={currentRows} />}
        {totalNumberOfPages > 0 && (
          <Pagination
            currentPageNumber={currentPageNumber}
            totalNumberOfPages={totalNumberOfPages}
            paginate={this.changeToPageNumber}
          />
        )}
      </div>
    );
  }
}

export default DataTable;
