import { useCallback, useState } from "react";

const useLoadFromApi = (initialDataState: any = []) => {
  const [data, setData] = useState(initialDataState);
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

  return { data, loading, apiRequest, setData };
};

export default useLoadFromApi;
