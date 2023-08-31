import { Boton } from "../../CustomTheme/CustomComponents";

interface ButtonProps {
  content: string;
}

export const Button = (props: ButtonProps): React.JSX.Element => {
  const { content } = props;
  return (
    <>
      <Boton>{content}</Boton>
    </>
  );
};
