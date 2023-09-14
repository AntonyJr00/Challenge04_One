import { useState, useEffect, useMemo } from "react";

import { Box, FormControl, TextField, Typography } from "@mui/material";
import { Button } from "../../../Pages/Button/Button";
import { colorresCSS } from "../../../CustomTheme/variables";
import { cyan } from "@mui/material/colors";

import { valTitle, valColor, valDescription, valUser } from "../validacion";
import { TableCategory } from "./TableCategory";

import { helpHttp } from "../../../Services/helpers/helpHttp";
import { Categories } from "../../../models/dbModels";
import { v4 as uuidv4 } from "uuid";

export const FormCategory = () => {
  const initialForm: Categories = useMemo(
    () => ({
      id: null,
      name: "",
      color: "#2cbed1",
      description: "",
      user: "",
    }),
    []
  );

  const [form, setForm] = useState(initialForm);
  const [toEdit, setToEdit] = useState<null | Categories>(null);
  const [db, setDb] = useState<Categories[] | null>(null);

  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#cccccc");
  const [description, setDescription] = useState("");
  const [Usuario, setUsuario] = useState("");

  const [errorTitle, setErrorTitle] = useState<null | boolean>(null);
  const [errorColor, setErrorColor] = useState<null | boolean>(null);
  const [errorDescription, setErrorDescription] = useState<null | boolean>(
    null
  );
  const [errorUsuario, setErrorUsuario] = useState<null | boolean>(null);

  const url = "http://localhost:3000/categories";
  const api = useMemo(() => helpHttp(), []);

  useEffect(() => {
    helpHttp()
      .get(url)
      .then((res) => {
        if (!res.err) {
          setDb(res);
        } else {
          setDb(null);
        }
      });
  }, []);

  //------------------------------------------------------------------------------///
  //------------------------------------------------------------------------------///

  useEffect(() => {
    if (toEdit) {
      setForm(toEdit);
      console.log(toEdit);
    } else setForm(initialForm);
  }, [initialForm, toEdit]);

  useEffect(() => {
    if (toEdit) {
      setTitle(toEdit?.name);
      setColor(toEdit?.color);
      setDescription(toEdit?.description);
      setUsuario(toEdit?.user);
    }
  }, [toEdit]);
  //------------------------------------------------------------------------------///
  //------------------------------------------------------------------------------///

  const createData = (data: Categories) => {
    data.id = uuidv4();
    api
      .post(url, {
        body: JSON.stringify(data),
        headers: { "content-type": "application/json" },
      })
      .then((res) => {
        console.log(res);
        if (!res.err) {
          if (db) setDb([...db, res]);
        }
      });
  };

  const updateData = (data: Categories) => {
    const endPoint = `${url}/${data.id}`;
    api
      .put(endPoint, {
        body: JSON.stringify(data),
        headers: { "content-type": "application/json" },
      })
      .then((res) => {
        if (!res.err) {
          const newData = db?.map((el) => (el.id === data.id ? data : el));
          newData && setDb(newData);
        }
      })
      .finally(() => handleClear());
  };
  const deleteData = (id: number | null | string) => {
    console.log(id);
    api
      .del(`${url}/${id}`, {
        headers: { "content-type": "application/json" },
      })
      .then((res) => {
        if (!res.err) {
          const newData = db?.filter((el) => el.id !== id);
          newData && setDb(newData);
        }
      });
  };

  //------------------------------------------------------------------------------///
  //------------------------------------------------------------------------------///
  //------------------------------------------------------------------------------///

  const handleChange = (
    evento: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    seter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    const value = evento.target.value;

    setForm({ ...form, [evento.target.name]: value });
    seter(value);
  };

  const handleClear = () => {
    setTitle("");
    setColor("#f5f5f5");
    setDescription("");
    setUsuario("");
    setForm(initialForm);
    setToEdit(null);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (errorTitle && errorColor && errorDescription && errorUsuario) {
      if (form.id === null) createData(form);
      else updateData(form);
    } else console.log("No se puedo pipipipip");
  };

  const personalData = [
    {
      label: "TItulo",
      variant: "outlined",
      type: "text",
      name: "name",
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
      valid: errorColor,
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
    <div
      style={{
        minHeight: "85vh",
        backgroundColor: `${colorresCSS.gray.gray_three}`,
      }}
    >
      <Box
        component={"form"}
        autoComplete="off"
        onSubmit={(e) => handleSubmit(e)}
      >
        <Typography
          variant="h3"
          fontWeight={400}
          component="h2"
          color={cyan[400]}
          textAlign={"center"}
          paddingTop={3}
        >
          {toEdit === null ? "Nueva" : "Editar"} Categoria
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
                name={name}
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
      {db && window.screen.width >= 768 && (
        <TableCategory
          dataDb={db}
          setToEdit={setToEdit}
          deleteData={deleteData}
        />
      )}
    </div>
  );
};
