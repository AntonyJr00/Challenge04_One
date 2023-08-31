export interface newVideo {
  title: string;
  linkVideo: string;
  linkImg: string;
  catergory: string;
  description: string;
  user: string;
}

export interface Video {
  id: number;
  title: string;
  category: string;
  description: string;
  url: string;
  image: string;
}
