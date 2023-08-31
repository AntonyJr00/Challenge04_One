import { Button, Box } from "@mui/joy";
import { Video } from "../../models/newVideo";
import { useFetch } from "../../Services/useFetch";

export const CategoryVideo = (): React.JSX.Element => {
  const { dataApi, loading } = useFetch("http://localhost:3000/videos");
  console.log(dataApi);

  return (
    <>
      <Box>
        {loading && <Button loading></Button>}
        {dataApi?.map((data: Video) => {
          const { id, category, image } = data;
          return (
            <div key={id}>
              <Button variant="outlined">{category.toUpperCase()}</Button>
              <h4>Formacion {category} de Alura Latam</h4>
              <div>
                <img src={image} alt="imagencard" />
              </div>
            </div>
          );
        })}
      </Box>
    </>
  );
};
