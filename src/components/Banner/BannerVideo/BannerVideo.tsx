import { Grid, Typography } from "@mui/material";
import { Button } from "../../../utils/Button/Button";
import { colorresCSS } from "../../../utils/CustomTheme/variables";
import { useEffect, useState } from "react";
import { helpHttp } from "../../../Services/helpers/helpHttp";

export const BannerVideo = () => {
  const initialForm = {
    id: "",
    title: "",
    category: "",
    description: "",
    url: "",
    image: "",
    code: "",
  };
  const [db, setDb] = useState(initialForm);

  const url = "http://localhost:3000/videos";

  useEffect(() => {
    helpHttp()
      .get(url)
      .then((res) => {
        setDb(res[res.length - 1]);
      });
  }, []);

  return (
    <Grid
      container
      direction={"row"}
      zIndex={111}
      gap={1}
      padding={1}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Grid item md={6} lg={7} xs={12}>
        <Button
          color={colorresCSS.courses.violet}
          content={db.category}
          typeButton="button"
          padding="1rem 2rem"
        />
        <Typography
          component={"h2"}
          color={colorresCSS.gray.gray_two}
          fontWeight={"bold"}
          variant="h5"
          marginTop={1}
          marginBottom={1}
        >
          {db.title}
        </Typography>
        <Typography
          component={"p"}
          color={colorresCSS.gray.gray_one}
          fontWeight={100}
          fontSize={"14px"}
        >
          {db.description}
        </Typography>
      </Grid>
      <Grid md={5} lg={4} item xs={8}>
        <img
          loading="lazy"
          src={db.image}
          alt="imagen-banner"
          style={{
            width: "80%",
            height: "auto",
            backgroundColor: "red",
            outline: `3px solid ${colorresCSS.courses.violet}`,
          }}
        />
      </Grid>
    </Grid>
  );
};
