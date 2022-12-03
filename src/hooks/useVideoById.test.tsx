import { afterAll, afterEach, beforeAll } from "vitest";
import { fetch } from "cross-fetch";
import { renderHook } from "@testing-library/react-hooks";
import { QueryClient, QueryClientProvider } from "react-query";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { GlobalContextProvider } from "src/hooks/useGlobal";
import useVideoById from "src/hooks/useVideoById";

let queryClient: QueryClient;

global.fetch = fetch;

const data = [
  {
    id: 1,
  },
];

const restHandlers = [
  rest.get("*/getVideoById/*", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data));
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

describe("useVideoById", () => {
  test("should recive data", async () => {
    const wrapper = ({ children }: { children: JSX.Element }) => (
      <QueryClientProvider client={queryClient}>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </QueryClientProvider>
    );

    server.use(
      rest.get("*/getVideoById/*", (req, res, ctx) => {
        res(ctx.json({}));
      })
    );

    const { result, waitFor } = renderHook(() => useVideoById(1), {
      wrapper,
    });

    await waitFor(() => result.current.status === "success");

    expect(result.current.data[0].id).toBe(1);
  });
});
