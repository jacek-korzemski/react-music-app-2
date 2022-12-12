import { render, screen, act } from "@testing-library/react";
import { v4 as uuid } from "uuid";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VideoList from "src/components/VideoList";

const title = uuid();

const smallData = Array.apply(null, Array(3)).map(function () {
  return {
    id: parseInt(uuid()),
    high_thumbnail: uuid(),
    title: uuid(),
    channel_title: uuid(),
    published_at: uuid(),
  };
});

const hugeData = Array.apply(null, Array(100)).map(function () {
  return {
    id: parseInt(uuid()),
    high_thumbnail: uuid(),
    title: uuid(),
    channel_title: uuid(),
    published_at: uuid(),
  };
});

const Test = (props: { pagination?: boolean; noBait?: boolean; data: any }) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <VideoList
              data={props.data}
              title={title}
              pagination={props?.pagination || undefined}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

describe("VideoList", () => {
  test("Should render properly, without pagination", () => {
    render(<Test data={smallData} />);

    expect(screen.getByText(title)).toBeTruthy();
    expect(screen.queryByTestId("pagination")).toBeNull();
  });

  test("There should be one tile per record", () => {
    render(<Test data={smallData} />);

    expect(screen.getAllByTestId("video-tile").length).toBe(smallData.length);
  });

  test("There should be pagination, and no more than 30 tiles", () => {
    render(<Test data={hugeData} pagination={true} />);

    expect(screen.getAllByTestId("video-tile").length).toBe(30);
    expect(screen.getAllByTestId("pagination").length).toBeGreaterThan(0);
  });

  test("Pagination should change pages", () => {
    const { container } = render(<Test data={hugeData} pagination={true} />);

    expect(container.querySelectorAll(".title")[0].innerHTML).toBe(
      hugeData[0].title
    );

    act(() => {
      screen.getAllByTestId("pagination-arrow-right")[0].click();
    });

    expect(container.querySelectorAll(".title")[0].innerHTML).toBe(
      hugeData[30].title
    );

    act(() => {
      screen.getAllByTestId("pagination-arrow-left")[0].click();
    });

    expect(container.querySelectorAll(".title")[0].innerHTML).toBe(
      hugeData[0].title
    );
  });
});
