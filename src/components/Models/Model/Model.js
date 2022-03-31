import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { modelsAPI } from "../../../api/api";

const Model = () => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);
  let { name } = useParams();

  useEffect(() => {
    modelsAPI
      .model(name)
      .then((res) => {
        setData(res.data.data);
      })
      .catch(() => {
        setIsError(true);
      });
  }, []);

  return (
    <Box my={4}>
      <Paper elevation={4} sx={{ p: 2 }}>
        <Typography
          mb={2}
          align="center"
          variant="h3"
          component="h1"
          color={"text.primary"}
        >
          Model {name}
        </Typography>
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {data.length > 0 &&
                  data.map((item, i) => <TableCell key="i">Data</TableCell>)}
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))} */}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default Model;
