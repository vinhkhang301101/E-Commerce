import { cache } from "@/utils/cache";
import { useEffect, useRef, useState } from "react";

export const useQuery = ({
    queryKey,
    queryFn,
    cacheTime,
    enabled = true,
    keepPreviousData = false,
    dependencyList = [],
    storeDriver = 'localStorage'
  } = {}) => {
    const dataRef = useRef({

    })
    // const cache = _cache[storeDriver]
    const refetchRef = useRef();
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [status, setStatus] = useState("idle");

    const cacheName = Array.isArray(queryKey) ? queryKey[0] : queryKey

    // useEffect(() => {
    //   if (typeof refetchRef.current === "boolean") {
    //     refetchRef.current = true;
    //   }
    // }, dependencyList);

    useEffect(() => {
      if (enabled) {
        fetchData();
      }
    }, [enabled].concat(queryKey));

    const getCacheDataOrPreviousData = async () => {
      if (keepPreviousData && dataRef[cacheName]) {
        return dataRef[cacheName];
      }

      if (queryKey && !refetchRef.current) {
        return cache.get(queryKey);
      }
    }

    const setCacheDataOrPreviousData = (data) => {
      if(keepPreviousData) {
        dataRef[cacheName] = data
      }

      if (cacheName) {
        let expired = cacheTime;
        if (cacheTime) {
          expired += Date.now();
        }
        cache.set(cacheName, res, expired);
      }
    }

    const fetchData = async () => {
      try {
        setLoading(true);
        setStatus("pending");

        let res = await getCacheDataOrPreviousData()

        if (!res) {
          res = await queryFn();
        }

        setStatus("success");
        setData(res);

        setCacheDataOrPreviousData(res);
        refetchRef.current = false;
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
