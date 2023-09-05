import { useFetchCategory } from "../../Services/useFetch";
import { useEffect } from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export const TableCategory = () => {
  const { dataCategory } = useFetchCategory();
  useEffect(() => {
    console.log(dataCategory);
  }, [dataCategory]);

  return (
    <Paper sx={{ border: "1px solid black", margin: "1rem" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Descripccion</TableCell>
            <TableCell width={1}>Editar</TableCell>
            <TableCell width={1}>Remover</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataCategory?.map((data, index) => (
            <TableRow key={index} hover>
              <TableCell>{data.name}</TableCell>
              <TableCell>{data.description}</TableCell>
              <TableCell>Editar</TableCell>
              <TableCell>Remover</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};
