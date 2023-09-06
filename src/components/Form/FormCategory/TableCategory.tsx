import { useFetchCategory } from "../../../Services/useFetch";
import { useEffect } from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TableCategoryRows } from "../../../Pages/TableCategoryRow/TableCategoryRows";
import { blueGrey } from "@mui/material/colors";

export const TableCategory = () => {
  const { dataCategory } = useFetchCategory();
  useEffect(() => {
    console.log(dataCategory);
  }, [dataCategory]);

  return (
    <Paper sx={{ border: `1px solid ${blueGrey[300]}`, margin: "1rem" }}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: blueGrey[200] }}>
            <TableCell>Nombre</TableCell>
            <TableCell>Descripccion</TableCell>
            <TableCell width={1} align="center">
              Editar
            </TableCell>
            <TableCell width={1} align="center">
              Remover
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataCategory?.map((data, index) => (
            <TableCategoryRows key={index} data={data} index={index} />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};
