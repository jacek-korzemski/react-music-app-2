import { render, screen } from "@testing-library/react";
import { v4 as uuid } from "uuid";

import Snackbar from "./Snackbar";

const test_string = uuid();

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
});
