import { render, screen } from "@testing-library/react";
import VideoTile from "src/components/molecules/VideoTile/VideoTile";
import { v4 as uuid } from "uuid";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const defaultData = {
  id: parseInt(uuid()),
  high_thumbnail: uuid(),
  title: uuid(),
  channel_title: uuid(),
  published_at: uuid(),
};

const Test = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VideoTile data={defaultData} />} />
      </Routes>
    </BrowserRouter>
  );
};

describe("VideoTile", () => {
  test("Should render properly", () => {
    render(<Test />);

    expect(screen.getByTestId("video-tile")).toBeTruthy();
  });

  test("Props should be valid", () => {
    const { container } = render(<Test />);

    expect(container.querySelector("img")?.getAttribute("src")).toBe(
      defaultData.high_thumbnail
    );
    expect(container.querySelector("img")?.getAttribute("alt")).toBe(
      defaultData.title
    );
    expect(container.querySelector(".title")?.innerHTML).toBe(
      defaultData.title
    );
    expect(container.querySelector(".channel")?.innerHTML).toBe(
      defaultData.channel_title
    );
    expect(container.querySelector(".date")?.innerHTML).toBe(
      defaultData.published_at
    );
  });
});
