import { cache } from "@/utils/cache";
import { useEffect, useRef, useState } from "react";

export const useQuery = (options = {}) => {
  const {
    queryKey,
    queryFn,
    cacheTime,
    enabled = true,
    dependencyList = [],
  } = options;
  // const cache = _cache[storeKey]
  const refetchRef = useRef()
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(() => {
    if (queryKey) {
      return cache.get(queryKey);
    }
  });
  const [error, setError] = useState();
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if(typeof refetchRef.current === "boolean") {
      refetchRef.current = true
    }
  }, dependencyList)

  useEffect(() => {
    if (enabled) {
      fetchData();
    }
  }, [queryKey, enabled].concat(...dependencyList));

  const fetchData = async () => {
    try {
      setLoading(true);
      setStatus("pending");

      let res
      if(queryKey && !refetchRef.current) {
        res = cache.get(queryKey)
      }

      if(!res) {
        res = await queryFn()
      }

      setStatus("success");
      setData(res);
      
      if (queryKey) {
        let expired = cacheTime;
        if (cacheTime) {
          expired += Date.now();
        }
        cache.set(queryKey, res, expired);
      }
      refetchRef.current = false
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
