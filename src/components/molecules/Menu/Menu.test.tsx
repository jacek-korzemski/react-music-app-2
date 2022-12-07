import { screen, render } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Menu";

const menuPositions = [
  "Metal Catalogue",
  "Newest",
  "Channels",
  "Search",
  "About",
];

describe("Menu", () => {
  test("should render properly", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />} />
        </Routes>
      </BrowserRouter>
    );

    menuPositions.forEach((text) => {
      expect(screen.queryByText(text)).toBeTruthy();
    });
  });
});
