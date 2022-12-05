import { useQuery } from "react-query";
import useGlobal from "src/hooks/useGlobal";

const useBackendHealth = () => {
  const { getData, backend } = useGlobal();
  const queryFn = () => getData(backend, true);

  const { data, isLoading } = useQuery("checkBackendHealth", queryFn);

  return {
    health: data,
    isLoading,
  };
};

export default useBackendHealth;
