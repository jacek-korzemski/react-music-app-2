import { renderHook } from "@testing-library/react-hooks";
import useGlobal, { GlobalContextProvider } from "./useGlobal";

describe("useGlobal", () => {
  const wrapper = ({ children }: { children: JSX.Element }) => (
    <GlobalContextProvider>{children}</GlobalContextProvider>
  );

  test("without context, shoud throw error", () => {
    const { result } = renderHook(() => {
      useGlobal();
    });

    expect(result.error).toStrictEqual(
      new Error("useGlobal context cannot be null")
    );
  });

  test("With contex, should render without issues", async () => {
    const { result } = renderHook(() => useGlobal(), {
      wrapper,
    });

    expect(result.current).toBeTruthy();
    expect(result.current.env).toBe("test");
    expect(result.current.all_channels_api).toBe(
      "http://mock.for.test/getAllChannels"
    );
    expect(result.current.new_videos_api).toBe(
      "http://mock.for.test/getNewVideos"
    );
    expect(result.current.single_channel_api).toBe(
      "http://mock.for.test/getChannelById"
    );
    expect(result.current.video_api).toBe("http://mock.for.test/getVideoById");
    expect(result.current.getData).toBeTruthy();
  });
});
