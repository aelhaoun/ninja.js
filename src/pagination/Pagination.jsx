import React from "react";

import Page from "./Page";

const Pagination = ({ currentPageNumber, totalNumberOfPages, paginate }) => {
  const pages = [];
  for (let number = 0; number < totalNumberOfPages; number++) {
    pages.push(
      <Page
        key={number}
        currentPageNumber={currentPageNumber}
        pageNumber={number}
        paginate={paginate}
      />
    );
  }

  return <ul className="pagination">{pages}</ul>;
};

export default Pagination;
