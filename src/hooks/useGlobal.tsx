import { createContext, useContext, ReactNode, useMemo } from "react";

const GlobalContext = createContext<{
  env: string;
  new_videos_api: string;
  all_channels_api: string;
  single_channel_api: string;
  video_api: string;
  getData(api: string): any;
} | null>(null);

const GlobalContextProvider = ({ children }: { children?: ReactNode }) => {
  // Global Variables
  const env = import.meta.env.VITE_ENV || "dev";
  const new_videos_api = import.meta.env.VITE_NEW_NIVEDOS_API || null;
  const all_channels_api = import.meta.env.VITE_ALL_CHANNEL_API || null;
  const single_channel_api = import.meta.env.VITE_SINGLE_CHANNEL_API || null;
  const video_api = import.meta.env.VITE_VIDEO_API || null;

  // Global methods
  const getData = async (api: string) => {
    const response = await fetch(api);
    return response.json();
  };

  const value = useMemo(
    () => ({
      env,
      new_videos_api,
      all_channels_api,
      single_channel_api,
      video_api,
      getData,
    }),
    []
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
