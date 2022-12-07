import { render, screen, act } from "@testing-library/react";
import { vi } from "vitest";
import Pagination from "./Pagination";

const props = {
  goToPage: () => {},
  prevPage: () => {},
  nextPage: () => {},
  totalCount: 1000,
  siblingCount: 5,
  currentPage: 3,
  pageSize: 10,
};

describe("Pagination", () => {
  test("should render properly", () => {
    const { container } = render(<Pagination {...props} />);

    expect(screen.getByTestId("pagination")).toBeTruthy();
    expect(container.querySelector(".pagination-item")).toBeTruthy();
  });

  test("callbacks should trigger", () => {
    const nextPageHandler = vi.spyOn(props, "nextPage");
    const prevPageHandler = vi.spyOn(props, "prevPage");
    const goToPageHandler = vi.spyOn(props, "goToPage");

    render(<Pagination {...props} />);

    act(() => {
      screen.getByTestId("pagination-arrow-left").click();
      screen.getAllByTestId("pagination-go-to-page")[2].click();
      screen.getByTestId("pagination-arrow-right").click();
    });

    expect(nextPageHandler).toHaveBeenCalled();
    expect(prevPageHandler).toHaveBeenCalled();
    expect(goToPageHandler).toHaveBeenCalled();
  });

  test("There should be 100 pages with default settings", () => {
    render(<Pagination {...props} />);

    expect(
      screen.getAllByTestId("pagination-go-to-page")[
        screen.getAllByTestId("pagination-go-to-page").length - 1
      ]
    ).toHaveTextContent("100");
  });
});
