import { useQuery } from "react-query";
import useGlobal from "src/hooks/useGlobal";

const useVideoById = (id?: number | string) => {
  const { getData, video_api } = useGlobal();
  const queryFn = () => getData(`${video_api}/${id}`);

  const { data, status } = useQuery({
    queryKey: `getVideoById_${id}`, 
    queryFn: queryFn, 
    enabled: id ? true : false,
  });

  return {
    data,
    status,
  };
};

export default useVideoById;
