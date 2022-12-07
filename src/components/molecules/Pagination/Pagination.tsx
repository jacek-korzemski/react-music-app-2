import styled from "styled-components";
import { usePagination, DOTS } from "src/hooks/usePagination";

const PaginationWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  padding: 0;
  margin: 0 auto 30px;
  width: fit-content;

  .pagination-item {
    padding: 8px;
    text-align: center;
    margin: auto 4px;
    color: white;
    align-items: center;
    font-size: 20px;
    min-width: 32px;
    border-bottom: 1px solid transparent;

    &.dots:hover {
      border-bottom: 1px solid transparent;
      cursor: default;
    }
    &:hover {
      border-bottom: 1px solid gray;
      cursor: pointer;
    }

    &.selected {
      border-bottom: 1px solid white;
    }

    .arrow {
      &::before {
        position: relative;
        content: "";
        display: inline-block;
        width: 0.4em;
        height: 0.4em;
        border-right: 0.12em solid white;
        border-top: 0.12em solid white;
      }

      &.left {
        transform: rotate(-135deg) translate(-45%);
      }

      &.right {
        transform: rotate(45deg);
      }
    }

    &.disabled {
      pointer-events: none;

      .arrow::before {
        border-right: 0.12em solid gray;
        border-top: 0.12em solid gray;
      }

      &:hover {
        background-color: transparent;
        cursor: default;
      }
    }
  }
`;

const Pagination = ({
  goToPage,
  nextPage,
  prevPage,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}: {
  goToPage(pageNumber: number): any;
  nextPage(): any;
  prevPage(): any;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null;
  }

  let lastPage = paginationRange && paginationRange[paginationRange.length - 1];
  return (
    <PaginationWrapper>
      <li
        className={`pagination-item ${currentPage === 1 ? "disabled" : ""}`}
        onClick={prevPage}
      >
        <div className="arrow left" />
      </li>
      {paginationRange &&
        paginationRange.map((pageNumber) => {
          if (pageNumber === DOTS) {
            return <li className="pagination-item dots">&#8230;</li>;
          }

          return (
            <li
              className={`pagination-item${
                pageNumber === currentPage ? " selected" : ""
              }`}
              onClick={() => goToPage(parseInt(pageNumber as string) - 1)}
            >
              {pageNumber}
            </li>
          );
        })}
      <li
        className={`pagination-item ${
          currentPage === lastPage ? "disabled" : ""
        }`}
        onClick={nextPage}
      >
        <div className="arrow right" />
      </li>
    </PaginationWrapper>
  );
};

export default Pagination;
