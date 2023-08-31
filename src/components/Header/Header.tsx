import { NavBar, Logo } from "../../CustomTheme/CustomComponents";
import { Button } from "../../Pages/Button/Button";
import logo from "../../assets/logo.png";
import { colorresCSS } from "../../CustomTheme/variables";

export const Header = (): React.JSX.Element => {
  return (
    <>
      <NavBar>
        <Logo src={logo} alt="Logotipo" />
        <Button
          content="Nuevo Video"
          color={colorresCSS.black.black_one}
          padding=".4rem .8rem"
        />
      </NavBar>
    </>
  );
};
