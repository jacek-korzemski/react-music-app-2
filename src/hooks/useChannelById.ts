import { useQuery } from "react-query";
import useGlobal from "src/hooks/useGlobal";

const useChannelById = (id?: string | number) => {
  const { getData, single_channel_api } = useGlobal();
  const queryFn = () => getData(`${single_channel_api}/${id}`);

  const { data, status } = useQuery({
    queryKey: `getChannelsById_${id}`, 
    queryFn: queryFn,
    enabled: id ? true : false
  });

  return {
    data,
    status,
  };
};

export default useChannelById;
