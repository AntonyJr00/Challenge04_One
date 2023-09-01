import { Box } from "@mui/joy";
import { Container, Typography } from "@mui/material";
import { useFetchCategory, useFetchVideos } from "../../Services/useFetch";
import { Button } from "../../Pages/Button/Button";
import { Categories } from "../../models/newVideo";
import { colorresCSS } from "../../CustomTheme/variables";
import { Slider } from "../Home/Slider/Slider";

export const CategoryVideo = (): React.JSX.Element => {
  const { dataVideos } = useFetchVideos();
  const { dataCategory } = useFetchCategory();
  const filterVideosCategory = (categoryName: string) =>
    dataVideos?.filter((video) => video.category === categoryName);

  return (
    <>
      <Box
        p={2}
        sx={{
          backgroundColor: `#${colorresCSS.black.black_one}`,
        }}
      >
        {dataCategory?.map((category: Categories) => {
          const { id, name, color, description } = category;
          const videoForCategory = filterVideosCategory(name);
          return (
            <Container key={id} maxWidth="xl" sx={{ marginTop: "2rem" }}>
              <Button padding="1rem 2rem" content={name} color={color} />
              <Typography variant="h6" mt={1} color="lightblue">
                {description}
              </Typography>
              <Box>
                <Slider videoForCategory={videoForCategory} />
              </Box>
            </Container>
          );
        })}
      </Box>
    </>
  );
};
