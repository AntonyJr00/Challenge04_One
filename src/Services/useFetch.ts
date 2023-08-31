import { useEffect, useState } from "react";
import { Video } from "../models/newVideo";

export const useFetch = (url: string) => {
  const [dataApi, setDataApi] = useState<Video[] | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setDataApi(data))
      .finally(() => setLoading(false));
  }, [url]);
  return { dataApi, loading };
};
