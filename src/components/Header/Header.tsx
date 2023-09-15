import { NavBar, Logo } from "../../utils/CustomTheme/CustomComponents";
import { Button } from "../../utils/Button/Button";
import logo from "../../assets/logo.png";
import { colorresCSS } from "../../utils/CustomTheme/variables";
import { Link, NavLink } from "react-router-dom";

export const Header = (): React.JSX.Element => {
  return (
    <>
      <NavBar>
        <Link to="/">
          <Logo src={logo} alt="Logotipo" />
        </Link>
        <NavLink to="/formvideo">
          {({ isActive }) =>
            !isActive && (
              <Button
                typeButton="button"
                content="Nuevo Video"
                color={colorresCSS.black.black_one}
                padding=".4rem .8rem"
              />
            )
          }
        </NavLink>
      </NavBar>
    </>
  );
};
