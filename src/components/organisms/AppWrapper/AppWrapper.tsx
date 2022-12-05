import { ReactNode } from "react";
import ExtraUi from "src/components/molecules/ExtraUi";
import { GlobalContextProvider } from "src/hooks/useGlobal";
import { UiContextProvider } from "src/hooks/useUi";
import { QueryClientProvider, QueryClient } from "react-query";
import useBackendHealth from "src/hooks/useBackendHealth";

const queryClient = new QueryClient();

const AppWrapper = ({ children }: { children?: ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalContextProvider>
        <UiContextProvider>
          <ExtraUi />
          {children}
        </UiContextProvider>
      </GlobalContextProvider>
    </QueryClientProvider>
  );
};

export default AppWrapper;
