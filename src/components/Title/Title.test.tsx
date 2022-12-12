import { render, screen } from "@testing-library/react";

import Title from "./Title";

describe("Title", () => {
  test("Title should render without issues", () => {
    render(<Title data-testid="title">ExampleIsOk</Title>);

    expect(screen.getByTestId("title")).toBeTruthy();
    expect(screen.getByText("ExampleIsOk")).toBeTruthy();
  });
});
