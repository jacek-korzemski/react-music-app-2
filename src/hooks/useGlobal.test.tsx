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
    expect(result.current.env).toBe("dev");
  });
});
