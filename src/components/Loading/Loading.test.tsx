import { render } from "@testing-library/react";

import Loading from "./Loading";

describe("Loading", () => {
  test("Loading should render without issues", () => {
    const result = render(<Loading />);

    expect(result.container.querySelector(".lds-ellipsis")).toBeTruthy();
  });
});
