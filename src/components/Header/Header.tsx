import { NavBar, Logo } from "../../utils/CustomTheme/CustomComponents";
import { Button } from "../../utils/Button/Button";
import logo from "../../assets/logo.png";
import { colorresCSS } from "../../utils/CustomTheme/variables";

import { Link } from "react-router-dom";

export const Header = (): React.JSX.Element => {
  const pathName = window.parent.location.pathname;

  return (
    <>
      <NavBar>
        <Link to="/">
          <Logo src={logo} alt="Logotipo" />
        </Link>
        {pathName === "/" && (
          <Link to="/formvideo">
            <Button
              typeButton="button"
              content="Nuevo Video"
              color={colorresCSS.black.black_one}
              padding=".4rem .8rem"
            />
          </Link>
        )}
      </NavBar>
    </>
  );
};
