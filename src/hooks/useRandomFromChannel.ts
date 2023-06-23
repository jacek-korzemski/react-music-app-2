import { useQuery } from "react-query";
import useGlobal from "src/hooks/useGlobal";

const useRandomFromChannel = (id?: string) => {
  const { getData, random_from_channel_api } = useGlobal();
  const queryFn = () => getData(`${random_from_channel_api}/${id}`);

  const { data, status } = useQuery({
    queryKey: `getRandom_from_channel_${id}`, 
    queryFn: queryFn,
    enabled: id ? true : false
  });

  return {
    data,
    status,
  };
};

export default useRandomFromChannel;
