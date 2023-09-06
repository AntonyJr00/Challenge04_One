import { TableCell, TableRow, Button } from "@mui/material";
import { Categories } from "../../models/newVideo";
import { blueGrey } from "@mui/material/colors";
import DeleteIcon from "@mui/icons-material/Delete";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

interface TCRowsProps {
  data: Categories;
  index: number;
}

export const TableCategoryRows = (props: TCRowsProps) => {
  const { data, index } = props;
  return (
    <>
      <TableRow
        hover
        sx={{ backgroundColor: `${index % 2 === 0 && blueGrey[50]}` }}
      >
        <TableCell>{data.name}</TableCell>
        <TableCell>{data.description}</TableCell>
        <TableCell>
          <Button
            children="editar"
            variant="outlined"
            color="info"
            endIcon={<EditOutlinedIcon />}
          />
        </TableCell>
        <TableCell>
          <Button
            children="remover"
            variant="outlined"
            color="error"
            endIcon={<DeleteIcon />}
          />
        </TableCell>
      </TableRow>
    </>
  );
};
