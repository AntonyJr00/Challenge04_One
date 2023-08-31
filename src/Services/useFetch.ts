import { useEffect, useState } from "react";
import { Categories, Video } from "../models/newVideo";

export const useFetchVideos = () => {
  const url = "http://localhost:3000/videos";
  const [dataVideos, setDataVideos] = useState<Video[] | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setDataVideos(data))
      .finally(() => setLoading(false));
  }, [url]);
  return { dataVideos, loadingV: loading };
};

export const useFetchCategory = () => {
  const url = "http://localhost:3000/categories";
  const [dataCategory, setDataCategory] = useState<Categories[] | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => setDataCategory(data))
      .finally(() => setLoading(false));
  }, [url]);
  return { dataCategory, loadingC: loading };
};
