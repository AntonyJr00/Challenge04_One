import { useState, useEffect, useMemo } from "react";
import {
  Box,
  FormControl,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { Button } from "../../../Pages/Button/Button";
import { colorresCSS } from "../../../CustomTheme/variables";
import { cyan } from "@mui/material/colors";

import {
  valTitle,
  valLinkVideo,
  valLinkImg,
  valCategory,
  valDescription,
  valUser,
} from "../validacion";
import { Link } from "react-router-dom";
import { useFetchCategory } from "../../../Services/useFetch";
import { Video } from "../../../models/dbModels";
import { helpHttp } from "../../../Services/helpers/helpHttp";
import { v4 as uuidv4 } from "uuid";

export const FormVideo = () => {
  const { dataCategory } = useFetchCategory();

  const initialForm: Video = useMemo(
    () => ({
      id: "",
      title: "",
      category: "",
      description: "",
      url: "",
      image: "",
    }),
    []
  );

  const [formVideo, setFormVideo] = useState(initialForm);

  const [title, setTitle] = useState("");
  const [linkVideo, setLinkVideo] = useState("");
  const [linImg, setLinkImg] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [Usuario, setUsuario] = useState("");

  const [errorTitle, setErrorTitle] = useState<null | boolean>(null);
  const [errorLinkVideo, setErrorLinkVideo] = useState<null | boolean>(null);
  const [errorLinImg, setErrorLinkImg] = useState<null | boolean>(null);
  const [errorCategory, setErrorCategory] = useState<null | boolean>(null);
  const [errorDescription, setErrorDescription] = useState<null | boolean>(
    null
  );
  const [errorUsuario, setErrorUsuario] = useState<null | boolean>(null);

  const api = useMemo(() => helpHttp(), []);

  const createVideo = (data: Video) => {
    data.id = uuidv4();
    api
      .post("http://localhost:3000/videos", {
        body: JSON.stringify(data),
        headers: { "content-type": "application/json" },
      })
      .then((res) => {
        console.log(res);
        if (!res.err) console.log(formVideo);
      });
  };

  const handleChange = (
    evento: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    seter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const value = evento.target.value;
    setFormVideo({ ...formVideo, [evento.target.name]: value });
    seter(value);
  };

  const handleClear = () => {
    setTitle("");
    setLinkVideo("");
    setLinkImg("");
    setCategory("");
    setDescription("");
    setUsuario("");
    setFormVideo(initialForm);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      errorTitle &&
      errorCategory &&
      errorDescription &&
      errorLinImg &&
      errorLinkVideo &&
      errorUsuario
    ) {
      console.log("formulario video");
      createVideo(formVideo);
    } else console.log("No se puedo pipipipip");
  };

  useEffect(() => {
    console.log(formVideo);
  }, [formVideo]);

  const personalData = [
    {
      label: "TItulo",
      variant: "outlined",
      type: "text",
      name: "title",
      valid: errorTitle,
      value: title,
      helperText: "completa el campo titulo",
      onchange: handleChange,
      validator: valTitle,
      seter: setTitle,
      setValid: setErrorTitle,
    },
    {
      label: "Link del video",
      variant: "outlined",
      type: "text",
      name: "url",
      valid: errorLinkVideo,
      value: linkVideo,
      helperText: "completa el campo",
      onchange: handleChange,
      validator: valLinkVideo,
      seter: setLinkVideo,
      setValid: setErrorLinkVideo,
    },
    {
      label: "Link de la imagen del video",
      variant: "outlined",
      type: "text",
      name: "image",
      valid: errorLinImg,
      value: linImg,
      helperText: "completa el campo",
      onchange: handleChange,
      validator: valLinkImg,
      seter: setLinkImg,
      setValid: setErrorLinkImg,
    },
    {
      label: "Escoja una categoria",
      variant: "outlined",
      name: "category",
      type: "text",
      select: true,
      valid: errorCategory,
      value: category,
      helperText: "completa el campo",
      onchange: handleChange,
      validator: valCategory,
      seter: setCategory,
      setValid: setErrorCategory,
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
      name: "user",
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
          backgroundColor: `${colorresCSS.gray.gray_three}`,
          minHeight: "85vh",
        }}
        component={"form"}
        autoComplete="off"
        onSubmit={(e) => handleSubmit(e)}
      >
        <Typography
          variant="h2"
          fontWeight={400}
          component="h2"
          color={cyan[200]}
          textAlign={"center"}
          paddingTop={3}
        >
          Nuevo Video
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
              select,
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
                name={name}
                sx={{ width: "60%" }}
                multiline={multiline ? true : false}
                select={select}
                label={label}
                variant={"filled"}
                type={type}
                value={value}
                error={valid === false}
                helperText={valid === false && helperText}
                onChange={(e) => !select && onchange(e, seter)}
                onBlur={(e) => {
                  const valido = validator(e.target.value);
                  setValid(valido);
                }}
              >
                {select && dataCategory ? (
                  dataCategory?.map((option, index) => (
                    <MenuItem
                      value={option.name}
                      children={option.name}
                      key={index}
                      onClick={() => {
                        seter(option.name);
                        setFormVideo({ ...formVideo, [name]: option.name });
                      }}
                    />
                  ))
                ) : (
                  <MenuItem value={"No option"} children={"No options"} />
                )}
              </TextField>
            );
          })}
        </FormControl>
        <FormControl
          fullWidth
          sx={{
            paddingBottom: "2rem",
            display: "flex",
            flexDirection: "",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.2rem",
          }}
        >
          <div style={{ display: "flex", gap: ".5rem" }}>
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
          </div>
          <Link to={"/formcategory"}>
            <Button
              typeButton="button"
              content="Nueva Categoria"
              color={colorresCSS.primary}
              padding="1rem 2rem"
            />
          </Link>
        </FormControl>
      </Box>
    </>
  );
};
