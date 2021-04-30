import {useEffect, useMemo, useState} from "react";

export type ServiceResult<T> = {
  result: T,
  loading: boolean,
  error: boolean
}

export const useService = <T>(callback: () => Promise<T>): ServiceResult<T> => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [result, setResult] = useState<T>();
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        setResult(await callback());
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    })();
  }, [callback]);

  return useMemo(() => ({
    result,
    loading,
    error
  }), [result, loading, error]);
};