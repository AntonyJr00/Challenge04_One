import { useEffect, useState } from "react";
import { Categories, Video } from "../models/dbModels";

export const useFetchVideos = () => {
  const url = "http://localhost:3000/videos";
  const [dataVideos, setDataVideos] = useState<Video[] | null>(null);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setDataVideos(data));
  }, [url]);
  return { dataVideos };
};

export const useFetchCategory = () => {
  const url = "http://localhost:3000/categories";
  const [dataCategory, setDataCategory] = useState<Categories[] | null>(null);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setDataCategory(data));
  }, [url]);
  return { dataCategory };
};
