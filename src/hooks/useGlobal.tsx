import {
  createContext,
  useContext,
  ReactNode,
  useMemo,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

const GlobalContext = createContext<{
  env: string;
  new_videos_api: string;
  all_channels_api: string;
  single_channel_api: string;
  video_api: string;
  backend: string;
  isBackendOk: boolean;
  setIsBackendOk: Dispatch<SetStateAction<boolean>>;
  getData(api: string, text?: boolean): any;
} | null>(null);

const GlobalContextProvider = ({ children }: { children?: ReactNode }) => {
  const [isBackendOk, setIsBackendOk] = useState(true);
  // Global Variables
  const env = import.meta.env.VITE_ENV || "dev";
  const new_videos_api = import.meta.env.VITE_NEW_NIVEDOS_API || null;
  const all_channels_api = import.meta.env.VITE_ALL_CHANNEL_API || null;
  const single_channel_api = import.meta.env.VITE_SINGLE_CHANNEL_API || null;
  const video_api = import.meta.env.VITE_VIDEO_API || null;
  const backend = import.meta.env.VITE_BACKEND || null;

  // Global methods
  const getData = async (api: string, text?: boolean) => {
    const response = await fetch(api);
    return text ? response.text() : response.json();
  };

  const value = useMemo(
    () => ({
      env,
      new_videos_api,
      all_channels_api,
      single_channel_api,
      video_api,
      backend,
      isBackendOk,
      setIsBackendOk,
      getData,
    }),
    [isBackendOk]
  );

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
};

const useGlobal = () => {
  const context = useContext(GlobalContext);

  if (context === null) {
    throw new Error("useGlobal context cannot be null");
  }

  return context;
};

export { GlobalContextProvider, GlobalContext };

export default useGlobal;
