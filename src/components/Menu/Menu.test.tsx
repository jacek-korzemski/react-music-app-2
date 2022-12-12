import { screen, render } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UiContextProvider } from "src/hooks/useUi";
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
      <UiContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Menu />} />
          </Routes>
        </BrowserRouter>
      </UiContextProvider>
    );

    menuPositions.forEach((text) => {
      expect(screen.queryByText(text)).toBeTruthy();
    });
  });
});
