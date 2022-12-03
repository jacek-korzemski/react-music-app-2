import { useQuery } from "react-query";
import useGlobal from "src/hooks/useGlobal";

const useVideoById = (id: number) => {
  const { getData, video_api } = useGlobal();
  const queryFn = () => getData(`${video_api}/${id}`);

  const { data, status } = useQuery(`getVideoById_${id}`, queryFn);

  return {
    data,
    status,
  };
};

export default useVideoById;
