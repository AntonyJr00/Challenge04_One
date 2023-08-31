import { Box, FormControl, MenuItem, TextField } from "@mui/material";
import { Button } from "../../../Pages/Button/Button";
import { colorresCSS } from "../../../CustomTheme/variables";

export const FormVideo = () => {
  const personalData = [
    {
      label: "TItulo",
      variant: "outlined",
      type: "text",
      name: "titulo",
      valid: null,
      value: "",
      helperText: "completa el campo titulo",
      onchange: () => {},
      validator: () => {},
    },
    {
      label: "Link del video",
      variant: "outlined",
      type: "text",
      name: "linkvideo",
      valid: null,
      value: "",
      helperText: "completa el campo",
      onchange: () => {},
      validator: () => {},
    },
    {
      label: "Link de la imagen del video",
      variant: "outlined",
      type: "text",
      name: "linkimg",
      valid: null,
      value: "",
      helperText: "completa el campo",
      onchange: () => {},
      validator: () => {},
    },
    {
      label: "Escoja una categoria",
      variant: "outlined",
      name: "category",
      type: "text",
      select: true,
      valid: null,
      value: "",
      options: [{ name: "front-end" }, { name: "backend" }],
      helperText: "completa el campo",
      onchange: () => {},
      validator: () => {},
    },
    {
      label: "Descripcion",
      variant: "outlined",
      name: "description",
      type: "text",
      multiline: true,
      valid: null,
      value: "",
      helperText: "completa el campo",
      onchange: () => {},
      validator: () => {},
    },
    {
      label: "Usuario",
      variant: "outlined",
      type: "text",
      name: "usuario",
      valid: null,
      value: "",
      helperText: "completa el campo",
      onchange: () => {},
      validator: () => {},
    },
  ];

  return (
    <>
      <Box
        sx={{
          backgroundColor: `#${colorresCSS.black.black_one}`,
          height: "85vh",
        }}
        component={"form"}
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          console.log("formulario video");
        }}
      >
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
            const { name, label, type, multiline, select, options } = data;
            return (
              <TextField
                key={name}
                sx={{
                  width: "60%",
                  backgroundColor: `#${colorresCSS.gray.gray_two}`,
                }}
                multiline={multiline ? true : false}
                select={select ? true : false}
                label={label}
                variant="filled"
                type={type}
              >
                {select &&
                  options &&
                  options.map((option, index) => (
                    <MenuItem key={index}>{option.name}</MenuItem>
                  ))}
              </TextField>
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
            gap: "1.2rem",
          }}
        >
          <Button
            content="Guardar"
            color={colorresCSS.primary}
            padding="1rem 2rem"
          />
          <Button
            content="Limpiar"
            color={colorresCSS.gray.gray_one}
            padding="1rem 2rem"
          />
        </FormControl>
      </Box>
    </>
  );
};
