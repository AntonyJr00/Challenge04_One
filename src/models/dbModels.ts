export interface newVideo {
  title: string;
  linkVideo: string;
  linkImg: string;
  catergory: string;
  description: string;
  user: string;
}

export interface Video {
  id: number | string;
  title: string;
  category: string;
  description: string;
  url: string;
  image: string;
}

export interface Categories {
  id: string | null;
  name: string;
  color: string;
  description: string;
  user: string;
}