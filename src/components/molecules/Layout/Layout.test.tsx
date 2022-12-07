// TODO: unit test
// 1. Check if render properly
// 2. Check if with globalcontext backend error, message is shown

import { ReactNode } from "react";
import { afterAll, afterEach, beforeAll } from "vitest";
import { fetch } from "cross-fetch";
import { QueryClient, QueryClientProvider } from "react-query";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, screen, act } from "@testing-library/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useGlobal, { GlobalContextProvider } from "src/hooks/useGlobal";
import Layout from "src/components/molecules/Layout/Layout";

let queryClient: QueryClient;
global.fetch = fetch;

const ok = "ok";

const restHandlers = [
  rest.get("*", (req, res, ctx) => {
    return res(ctx.status(200), ctx.text(ok));
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

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div data-testid="layout">
      <QueryClientProvider client={queryClient}>
        <GlobalContextProvider>{children}</GlobalContextProvider>
      </QueryClientProvider>
    </div>
  );
};

const ControlPanel = () => {
  const { setIsBackendOk } = useGlobal();
  return (
    <button
      data-testid="disable-backend"
      onClick={() => {
        setIsBackendOk(false);
      }}
    ></button>
  );
};

const TestEnvironment = () => {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
        </Routes>
      </BrowserRouter>
      <ControlPanel />
    </Wrapper>
  );
};

describe("Layout", () => {
  test("should render properly", () => {
    render(<TestEnvironment />);

    expect(screen.getByTestId("layout")).toBeTruthy();
  });

  test("if backend is dead, there should be error message", () => {
    render(<TestEnvironment />);

    expect(screen.queryByTestId("backend-warning")).toBeNull();

    act(() => {
      screen.getByTestId("disable-backend").click();
    });

    expect(screen.getByTestId("backend-warning")).toBeTruthy();
  });
});
