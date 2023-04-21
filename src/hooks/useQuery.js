import { cache } from "@/utils/cache";
import { useEffect, useState } from "react";

export const useQuery = (options = {}) => {
  const {
    queryKey,
    queryFn,
    cacheTime,
    enabled = true,
    dependencyList = [],
  } = options;
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(() => {
    if (queryKey) {
      return cache.get(queryKey);
    }
  });
  const [error, setError] = useState();
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (enabled) {
      fetchData();
    }
  }, dependencyList);

  const fetchData = async () => {
    try {
      setLoading(true);
      setStatus("pending");
      const res = await queryFn();
      setData(res.data);
      if (queryKey) {
        let expired = Date.now();
        if (cacheTime) {
          expired += cacheTime;
        } else {
          expired = undefined;
        }
        cache.set(queryKey, res.data, expired);
      }
      setStatus("success");
    } catch (err) {
      setError(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };
  return {
    loading,
    error,
    data,
    status,
  };
};
