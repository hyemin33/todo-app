import { useCallback, useEffect, useState } from 'react';

const useGetData = (api: any, { onSuccess }: any = {}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = useCallback(async () => {
    try {
      setIsLoading(true);

      await api().then((res: any) => {
        setIsLoading(false);
        setData(res.data);
        if (onSuccess) onSuccess(res.data);
      });
    } catch (error) {
      alert(error);
    }
  }, [api, onSuccess]);

  const refetch = useCallback(async () => {
    getData();
  }, [getData]);

  useEffect(() => {
    getData();
  }, []);

  return { data, refetch, isLoading };
};

export default useGetData;
