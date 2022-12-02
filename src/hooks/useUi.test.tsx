import { renderHook } from "@testing-library/react-hooks";
import { render, act, screen } from "@testing-library/react";
import useUi, { UiContextProvider } from "./useUi";

describe("useUi", () => {
  const InnerContent = () => {
    const { addSnackbar, setModal, snackbars, modal, closeModal } = useUi();

    return (
      <>
        <div data-testid="modal">{modal}</div>
        <div data-testid="snackabars">
          {snackbars.map((snackbar, index) => (
            <div className="snackbar" key={index}>
              {snackbar.message}
              <button
                data-testid={`close-snackbar-${index}`}
                onClick={() => snackbar.closeHandler()}
              >
                close
              </button>
            </div>
          ))}
        </div>
        <button
          data-testid="button-add-snackbar"
          onClick={() =>
            addSnackbar && addSnackbar({ type: "succeess", message: "test" })
          }
        >
          add snackbar
        </button>
        <button
          data-testid="button-set-modal"
          onClick={() =>
            setModal &&
            setModal(
              <div data-testid="test-modal">
                <button data-testid="close-modal" onClick={() => closeModal()}>
                  OK
                </button>
              </div>
            )
          }
        >
          add snackbar
        </button>
      </>
    );
  };

  const TestEnvironment = () => (
    <UiContextProvider>
      <InnerContent />
    </UiContextProvider>
  );

  test("without context, shoud throw error", () => {
    const { result } = renderHook(() => {
      useUi();
    });

    expect(result.error).toStrictEqual(
      new Error("useUi context cannot be null")
    );
  });

  test("addSnackbar should add message to context", () => {
    const { container } = render(<TestEnvironment />);
    expect(container.querySelector(".snackbar")).toBeFalsy();
    act(() => {
      screen.getByTestId("button-add-snackbar").click();
    });
    expect(container.querySelector(".snackbar")).toBeTruthy();
    act(() => {
      screen.getByTestId("button-add-snackbar").click();
    });
    expect(container.querySelectorAll(".snackbar")).toHaveLength(2);
  });

  test("addSnackbar should create messages with valid closeHandler", () => {
    const { container } = render(<TestEnvironment />);
    act(() => {
      screen.getByTestId("button-add-snackbar").click();
      screen.getByTestId("button-add-snackbar").click();
    });
    expect(container.querySelectorAll(".snackbar")).toHaveLength(2);
    act(() => {
      screen.getByTestId("close-snackbar-1").click();
    });
    expect(container.querySelectorAll(".snackbar")).toHaveLength(1);
    act(() => {
      screen.getByTestId("close-snackbar-0").click();
    });
    expect(container.querySelector(".snackbar")).toBeFalsy();
  });

  test("setModal should create modal in context, and closeModal should remove it", () => {
    const { container } = render(<TestEnvironment />);

    expect(container.querySelector('[data-testid="test-modal"]')).toBeNull();

    act(() => {
      screen.getByTestId("button-set-modal").click();
    });

    expect(screen.getByTestId("test-modal")).toBeTruthy();

    act(() => {
      screen.getByTestId("close-modal").click();
    });

    expect(container.querySelector('[data-testid="test-modal"]')).toBeNull();
  });
});
