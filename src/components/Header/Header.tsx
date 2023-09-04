import { NavBar, Logo } from "../../CustomTheme/CustomComponents";
import { Button } from "../../Pages/Button/Button";
import logo from "../../assets/logo.png";
import { colorresCSS } from "../../CustomTheme/variables";

import { Link } from "react-router-dom";

export const Header = (): React.JSX.Element => {
  return (
    <>
      <NavBar>
        <Link to="/home">
          <Logo src={logo} alt="Logotipo" />
        </Link>
        <Link to="/formvideo">
          <Button
            typeButton="button"
            content="Nuevo Video"
            color={colorresCSS.black.black_one}
            padding=".4rem .8rem"
          />
        </Link>
      </NavBar>
    </>
  );
};
