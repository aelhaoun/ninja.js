import React from "react";

const Page = props => {
  const { pageNumber, currentPageNumber, paginate } = props;

  const isActivePage = () => {
    return currentPageNumber === pageNumber;
  };

  return (
    <li className="page-item mr-1">
      <button
        className={`page-link${isActivePage() ? " button-outline" : ""}`}
        onClick={() => paginate(pageNumber)}
      >
        {pageNumber + 1}
      </button>
    </li>
  );
};

export default Page;
