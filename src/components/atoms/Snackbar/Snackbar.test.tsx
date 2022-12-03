import { render, screen, act } from "@testing-library/react";
import { vi } from "vitest";
import { v4 as uuid } from "uuid";

import Snackbar from "./Snackbar";

const test_string = uuid();
const test_functions = {
  closeHandler: () => {},
};

describe("Snackbar", () => {
  test("Snackbar should render without issues", () => {
    render(
      <Snackbar
        message={test_string}
        type="success"
        id="1"
        closeHandler={() => {}}
      />
    );

    expect(screen.getByText(test_string)).toBeTruthy();
  });

  test("Click should trigger closeHandler", () => {
    const closeHandler = vi.spyOn(test_functions, "closeHandler");

    render(
      <Snackbar
        message={test_string}
        type="success"
        id="1"
        closeHandler={test_functions.closeHandler}
      />
    );

    act(() => {
      screen.getByText(test_string).click();
    });

    expect(closeHandler).toHaveBeenCalled();
  });
});
