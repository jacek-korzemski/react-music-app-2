import { useQuery } from 'react-query';
import useGlobal from 'src/hooks/useGlobal';

const useNewVideos = () => {
  const { getData, new_videos_api } = useGlobal();
  const queryFn = () => getData(new_videos_api)

  const { data, status } = useQuery('newVideos', queryFn);

  return { 
    data, 
    status
  }
}

export default useNewVideos;