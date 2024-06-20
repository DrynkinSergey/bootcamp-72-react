import { useEffect, useState } from 'react';

export const useHttp = (fn, param) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    try {
      setIsLoading(true);
      const getUsers = async () => {
        const data = await fn(param);
        setData(data);
      };
      getUsers();
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, [fn, param]);

  return { data, isLoading, error };
};
