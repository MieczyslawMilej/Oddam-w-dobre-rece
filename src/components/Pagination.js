import React from "react";

export default function Pagination({
  totalPosts,
  postsPerPage,
  paginate,
  active,
  currentPage
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers.map(number => (
        <li key={number}>
          <button
            className={
              "btn pagination-btn" + (currentPage === number ? " active" : "")
            }
            href="!#"
            onClick={() => paginate(number)}
          >
            {number}
          </button>
        </li>
      ))}
    </ul>
  );
}
