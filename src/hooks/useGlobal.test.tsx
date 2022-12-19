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
    expect(result.current.env).toBe(process.env.VITE_ENV);
    expect(result.current.all_channels_api).toBe(
      process.env.VITE_ALL_CHANNEL_API
    );
    expect(result.current.new_videos_api).toBe(
      process.env.VITE_NEW_NIVEDOS_API
    );
    expect(result.current.single_channel_api).toBe(
      process.env.VITE_SINGLE_CHANNEL_API
    );
    expect(result.current.video_api).toBe(process.env.VITE_VIDEO_API);
    expect(result.current.backend).toBe(process.env.VITE_BACKEND);
    expect(result.current.getData).toBeTruthy();
  });
});
