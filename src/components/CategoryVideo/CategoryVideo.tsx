import { Box } from "@mui/joy";
import { Container, Typography, CardMedia } from "@mui/material";
import { useFetchCategory, useFetchVideos } from "../../Services/useFetch";
import { Button } from "../../Pages/Button/Button";
import { Categories, Video } from "../../models/newVideo";
import { colorresCSS } from "../../CustomTheme/variables";

export const CategoryVideo = (): React.JSX.Element => {
  const { dataVideos } = useFetchVideos();
  const { dataCategory } = useFetchCategory();
  // console.log(dataVideos);
  const filterVideosCategory = (categoryName: string) =>
    dataVideos?.filter((video) => video.category === categoryName);
  return (
    <>
      <Box p={2} sx={{ backgroundColor: `#${colorresCSS.black.black_one}` }}>
        {dataCategory?.map((category: Categories) => {
          const { id, name, color, description } = category;
          const videoForCategory = filterVideosCategory(name);
          return (
            <Container key={id} maxWidth="xl">
              <Button padding="1rem 2rem" content={name} color={color} />
              <Typography variant="h6" color="lightblue">
                {description}
              </Typography>
              <Box
                sx={{
                  padding: "1rem 0",
                  gap: "20px",
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                {videoForCategory?.map((data: Video) => {
                  console.log(data);

                  const { id, image, url } = data;
                  return (
                    <a href={url} target="_blank">
                      <CardMedia
                        key={id}
                        component="img"
                        sx={{ width: 300 }}
                        image={image}
                        alt="video"
                      />
                    </a>
                  );
                })}
              </Box>
            </Container>
          );
        })}
      </Box>
    </>
  );
};
