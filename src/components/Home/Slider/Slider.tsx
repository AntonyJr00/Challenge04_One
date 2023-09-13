import SliderSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import { CardMedia } from "@mui/material";
import { Video } from "../../../models/newVideo";

interface PropsSlider {
  videoForCategory: Video[] | undefined;
  colors: string;
}

export const Slider = (props: PropsSlider): React.ReactElement => {
  const { videoForCategory, colors } = props;
  const [settings, setSettings] = useState({
    dots: false,
    lazyload: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  useEffect(() => {
    const pantalla = window.screen.width;
    let newSettings = { ...settings };

    if (pantalla > 430)
      newSettings = {
        ...settings,
        slidesToShow: 2,
        slidesToScroll: 2,
      };
    if (pantalla > 768)
      newSettings = {
        ...settings,
        slidesToShow: 3,
        slidesToScroll: 3,
      };
    if (pantalla >= 1440)
      newSettings = {
        ...settings,
        slidesToShow: 4,
        slidesToScroll: 4,
      };

    if (
      newSettings.slidesToShow !== settings.slidesToShow ||
      newSettings.slidesToScroll !== settings.slidesToScroll
    )
      setSettings(newSettings);
  }, [settings]);

  return (
    <SliderSlick {...settings}>
      {videoForCategory?.map((data: Video) => {
        const { id, image, url } = data;
        return (
          <a key={id} href={url} target="_blank">
            <CardMedia
              loading="lazy"
              component="img"
              sx={{
                width: "97%",
                gap: "10px",
                outline: `3px solid ${colors}`,
                margin: "2px",
              }}
              image={image}
              alt="video"
            />
          </a>
        );
      })}
    </SliderSlick>
  );
};
