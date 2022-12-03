import { useQuery } from "react-query";
import useGlobal from "src/hooks/useGlobal";

const useChannelById = (id: number) => {
  const { getData, single_channel_api } = useGlobal();
  const queryFn = () => getData(`${single_channel_api}/${id}`);

  const { data, status } = useQuery(`getChannelsById_${id}`, queryFn);

  return {
    data,
    status,
  };
};

export default useChannelById;
