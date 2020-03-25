import React from "react";

export const Pagination = ({
  postsPerPage,
  totalPosts,
  paginate,
  nextPage,
  previousPage,
  currentPage
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="mt-3">
      <ul className="pagination justify-content-center">
        {currentPage >= 2 ? (
          <li className="page-item">
            <span className="page-link" onClick={() => previousPage()}>
              Previous
            </span>
          </li>
        ) : (
          ""
        )}

        {pageNumbers.map(number => (
          <li className="page-item" key={number}>
            <span onClick={() => paginate(number)} className="page-link">
              {number}
            </span>
          </li>
        ))}

        {currentPage < pageNumbers.length ? (
          <li className="page-item">
            <span className="page-link" onClick={() => nextPage()}>
              Next
            </span>
          </li>
        ) : (
          ""
        )}

        <li className="page-item">
          <div className="page-link">Total: {totalPosts}</div>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;


