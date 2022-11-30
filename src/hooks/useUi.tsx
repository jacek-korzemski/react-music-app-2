import { createContext, useContext, ReactNode, useMemo, useState } from "react";
import { v4 as uuid } from "uuid";
import { Snackbars, NewSnackbar } from "src/types/Ui";

const UiContext = createContext<{
  snackbars: Snackbars;
  addSnackbar?({ type, message }: NewSnackbar): void;
  modal?: ReactNode;
  setModal?(content: ReactNode): void;
  closeModal?(): void;
} | null>(null);

const UiContextProvider = ({ children }: { children: ReactNode }) => {
  const [snackbars, setSnackbars] = useState<Snackbars>([]);

  const closeSnackbar = (id: string) => {
    setSnackbars((prev) => prev.filter((elem) => elem.id !== id));
  };

  const addSnackbar = ({ type, message }: NewSnackbar) => {
    const uniqueid = uuid();
    const newSnackbar = {
      type,
      message,
      id: uniqueid,
      closeHandler: () => {
        closeSnackbar(uniqueid);
      },
    };
    setSnackbars((prev) => [newSnackbar, ...prev]);
  };

  const [modal, setModal] = useState<ReactNode | undefined | null>(undefined);

  const closeModal = () => {
    setModal(undefined);
  };

  const value = useMemo(
    () => ({
      snackbars,
      addSnackbar,
      closeSnackbar,
      modal,
      setModal,
      closeModal,
    }),
    [snackbars, modal]
  );

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
};

const useUi = () => {
  const context = useContext(UiContext);

  if (context === null) {
    throw new Error("useUi context cannot be null");
  }

  return context;
};

export { UiContext, UiContextProvider };
export default useUi;
