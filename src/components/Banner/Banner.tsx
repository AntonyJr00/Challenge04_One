import { Button } from "@mui/material";
import { Wrapper } from "../../CustomTheme/CustomComponents";
import banner from "../../assets/banner.png";

export const Banner = (): React.JSX.Element => {
  return (
    <Wrapper $urlImgRef={banner}>
      <h2>Challenge React</h2>
      <Button color="primary" variant="contained">
        Ver
      </Button>
    </Wrapper>
  );
};
