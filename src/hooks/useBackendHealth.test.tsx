import { afterAll, afterEach, beforeAll } from "vitest";
import { fetch } from "cross-fetch";
import { renderHook } from "@testing-library/react-hooks";
import { QueryClient, QueryClientProvider } from "react-query";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { GlobalContextProvider } from "src/hooks/useGlobal";
import useBackendHeakth from "./useBackendHealth";

let queryClient: QueryClient;

global.fetch = fetch;

const data = "ok";

const restHandlers = [
  rest.get("*", (req, res, ctx) => {
    return res(ctx.status(200), ctx.text(data));
  }),
];

const server = setupServer(...restHandlers);

beforeAll(() => {
  server.listen({ onUnhandledRequest: "error" });
});

beforeEach(() => {
  queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("useBackendHealth", () => {
  test("should recive data", async () => {
    const wrapper = ({ children }: { children: JSX.Element }) => (
      <QueryClientProvider client={queryClient}>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </QueryClientProvider>
    );

    server.use(
      rest.get("*", (req, res, ctx) => {
        res(ctx.text(data));
      })
    );

    const { result, waitFor } = renderHook(() => useBackendHeakth(), {
      wrapper,
    });

    await waitFor(() => result.current.isLoading === false);

    expect(result.current.health).toBe("ok");
  });
});
