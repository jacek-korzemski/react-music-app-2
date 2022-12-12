import { ReactNode } from "react";
import { render, screen, act, getByTestId } from "@testing-library/react";
import useUi, { UiContextProvider } from "src/hooks/useUi";
import ExtraUi from "src/components/ExtraUi/ExtraUi";
import { v4 as uuid } from "uuid";

const controlString = uuid();

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div data-testid="example">
      <UiContextProvider>{children}</UiContextProvider>
    </div>
  );
};

const ControlPanel = () => {
  const { addSnackbar, setModal, closeModal } = useUi();
  return (
    <>
      <button
        data-testid="add-snackbar"
        onClick={() => {
          addSnackbar({
            type: "success",
            message: controlString,
          });
        }}
      ></button>
      <button
        data-testid="set-modal"
        onClick={() => {
          setModal(
            <button onClick={closeModal} data-testid="close-modal">
              {controlString}
            </button>
          );
        }}
      ></button>
    </>
  );
};

describe("ExtraUi", () => {
  test("ExtraUi layer should render with valid context", () => {
    render(
      <Wrapper>
        <ExtraUi />
      </Wrapper>
    );

    expect(screen.getByTestId("example").textContent).toBe("");
  });

  test("useUi.addSnackbar shoud add snackbar to ExtraUi layer", () => {
    render(
      <Wrapper>
        <ExtraUi />
        <ControlPanel />
      </Wrapper>
    );

    act(() => {
      screen.getByTestId("add-snackbar").click();
    });

    expect(screen.getByText(controlString)).toBeTruthy();
  });

  test("useUi.setModal should open modal, and useUi.closeModal should remove modal", () => {
    render(
      <Wrapper>
        <ExtraUi />
        <ControlPanel />
      </Wrapper>
    );

    act(() => {
      screen.getByTestId("set-modal").click();
    });

    expect(screen.getByText(controlString)).toBeTruthy();

    act(() => {
      screen.getByTestId("close-modal").click();
    });

    expect(screen.queryByText(controlString)).toBeNull();
  });
});
