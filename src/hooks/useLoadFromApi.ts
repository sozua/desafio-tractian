import { useCallback, useState } from "react";

const useLoadFromApi = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiRequest = useCallback(async (apiFunction: Function) => {
    try {
      setLoading(true);
      setData(await apiFunction());
    } catch (err) {
      console.log(err);
      setData([]);
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, loading, apiRequest };
};

export default useLoadFromApi;
