import { useQuery } from "react-query";
import useGlobal from "src/hooks/useGlobal";

const useAllChannels = () => {
  const { getData, all_channels_api } = useGlobal();
  const queryFn = () => getData(all_channels_api);

  const { data, status } = useQuery("getAllChannels", queryFn);

  return {
    data,
    status,
  };
};

export default useAllChannels;
