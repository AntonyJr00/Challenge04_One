import { Boton } from "../../CustomTheme/CustomComponents";

interface ButtonProps {
  content: string;
  color: string;
  padding: string;
}

export const Button = (props: ButtonProps): React.JSX.Element => {
  const { content, color, padding } = props;
  return (
    <>
      <Boton $colorRef={color} $paddingRef={padding}>
        {content}
      </Boton>
    </>
  );
};
