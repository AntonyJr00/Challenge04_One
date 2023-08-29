import logo from "../assets/logo.png";
import { colorresCSS } from "../CustomTheme/variables";

export const Navbar = (): React.JSX.Element => {
  return (
    <>
      <nav
        style={{
          backgroundColor: colorresCSS.black.black_one,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: ".3rem .5rem",
        }}
      >
        <img src={logo} alt="logo-antony" style={{ width: "100px" }} />
      </nav>
    </>
  );
};
