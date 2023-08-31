import { NavBar, Logo } from "../../CustomTheme/CustomComponents";
import { Button } from "../../Pages/Button/Button";
import logo from "../../assets/logo.png";

export const Header = (): React.JSX.Element => {
  return (
    <>
      <NavBar>
        <Logo src={logo} alt="Logotipo" />
        <Button content="Nuevo Video" />
      </NavBar>
    </>
  );
};
