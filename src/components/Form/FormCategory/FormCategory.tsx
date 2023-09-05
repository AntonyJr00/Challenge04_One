import { Box, FormControl, TextField, Typography } from "@mui/material";
import { Button } from "../../../Pages/Button/Button";
import { colorresCSS } from "../../../CustomTheme/variables";
import { cyan } from "@mui/material/colors";

import { valTitle, valColor, valDescription, valUser } from "../validacion";
import { useEffect, useState } from "react";

export const FormCategory = () => {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#2cbed1");
  const [description, setDescription] = useState("");
  const [Usuario, setUsuario] = useState("");

  const [errorTitle, setErrorTitle] = useState<null | boolean>(null);
  const [errorColor, setErrorColor] = useState<null | boolean>(null);
  const [errorDescription, setErrorDescription] = useState<null | boolean>(
    null
  );
  const [errorUsuario, setErrorUsuario] = useState<null | boolean>(null);

  const handleChange = (
    evento: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    seter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const value = evento.target.value;
    console.log(value);

    seter(value);
  };

  const handleClear = () => {
    setTitle("");
    setColor("#f5f5f5");
    setDescription("");
    setUsuario("");
  };

  useEffect(() => {
    console.log(errorTitle, errorColor, errorDescription, errorUsuario);
  }, [errorTitle, errorColor, errorDescription, errorUsuario]);

  const personalData = [
    {
      label: "TItulo",
      variant: "outlined",
      type: "text",
      name: "titulo",
      valid: errorTitle,
      value: title,
      helperText: "completa el campo titulo",
      onchange: handleChange,
      validator: valTitle,
      seter: setTitle,
      setValid: setErrorTitle,
    },
    {
      label: "Color",
      variant: "outlined",
      type: "color",
      name: "color",
      valid: color,
      value: color,
      helperText: "Elije un color",
      onchange: handleChange,
      validator: valColor,
      seter: setColor,
      setValid: setErrorColor,
    },
    {
      label: "Descripcion",
      variant: "outlined",
      name: "description",
      type: "text",
      multiline: true,
      valid: errorDescription,
      value: description,
      helperText: "completa el campo",
      onchange: handleChange,
      validator: valDescription,
      seter: setDescription,
      setValid: setErrorDescription,
    },
    {
      label: "Usuario",
      variant: "outlined",
      type: "text",
      name: "usuario",
      valid: errorUsuario,
      value: Usuario,
      helperText: "completa el campo",
      onchange: handleChange,
      validator: valUser,
      seter: setUsuario,
      setValid: setErrorUsuario,
    },
  ];

  return (
    <>
      <Box
        sx={{
          backgroundColor: `#${colorresCSS.gray.gray_three}`,
          minHeight: "85vh",
        }}
        component={"form"}
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          if (errorTitle && errorDescription && errorUsuario) {
            console.log("formulario video");
          } else console.log("No se puedo pipipipip");
        }}
      >
        <Typography
          variant="h2"
          fontWeight={400}
          component="h2"
          color={cyan[300]}
          textAlign={"center"}
          paddingTop={3}
        >
          Nueva Categoria
        </Typography>
        <FormControl
          fullWidth
          sx={{
            alignItems: "center",
            padding: "2rem 0",
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
          }}
        >
          {personalData.map((data) => {
            const {
              name,
              label,
              type,
              multiline,
              helperText,
              valid,
              value,
              onchange,
              validator,
              seter,
              setValid,
            } = data;
            return (
              <TextField
                key={name}
                sx={{ width: "60%" }}
                multiline={multiline ? true : false}
                label={label}
                value={value}
                variant={"filled"}
                type={type}
                error={valid === false}
                helperText={valid === false && helperText}
                onChange={(e) => onchange(e, seter)}
                onBlur={(e) => {
                  const valido = validator(e.target.value);
                  setValid(valido);
                }}
              />
            );
          })}
        </FormControl>
        <FormControl
          fullWidth
          sx={{
            paddingBottom: "2rem",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: ".7rem",
          }}
        >
          <Button
            typeButton="submit"
            content="Guardar"
            color={colorresCSS.primary}
            padding="1rem 2rem"
          />
          <div onClick={() => handleClear()}>
            <Button
              typeButton="button"
              content="Limpiar"
              color={colorresCSS.gray.gray_one}
              padding="1rem 2rem"
            />
          </div>
        </FormControl>
      </Box>
    </>
  );
};
