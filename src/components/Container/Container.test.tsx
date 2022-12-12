import { render, screen } from "@testing-library/react";

import Container from "./Container";

describe("Container", () => {
  test("Container should render without issues", () => {
    render(<Container data-testid="container" />);

    expect(screen.getByTestId("container")).toBeTruthy();
  });
});
