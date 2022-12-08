import { renderHook } from "@testing-library/react";
import usePagination, { DOTS } from "src/hooks/usePagination";

const defaultProps = {
  totalCount: 1000,
  pageSize: 10,
  siblingCount: 3,
  currentPage: 1,
};

describe("usePagination", () => {
  test("with default props should return valid array", () => {
    const { result } = renderHook(() =>
      usePagination({
        ...defaultProps,
      })
    );

    if (!result || !result.current) {
      throw new Error("Didn't get result");
    }

    expect(result.current[0]).toBe(1);
    expect(result.current[result.current.length - 1]).toBe(100);
    expect(result.current[result.current.length - 2]).toBe(DOTS);
    expect(result.current.length).toBe(11);
  });
});
