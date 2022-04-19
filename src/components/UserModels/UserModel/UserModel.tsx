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
import { IUserModalData } from "../../../types/userModel.model";

const UserModel: React.FC = () => {
  const [data, setData] = useState<IUserModalData[]>([]);
  const [dataValues, setDataValues] = useState<(string | number)[][]>([]);
  const [isError, setIsError] = useState(false);
  let { name } = useParams<string>();

  useEffect(() => {
    if (name) {
      modelsAPI
        .model(name)
        .then((res) => {
          setData(res.data.data);
        })
        .catch(() => {
          setIsError(true);
        });
    }
  }, [name]);

  useEffect(() => {
    if (data.length > 0) {
      const valuesArr = data.map((item) => [...Object.values(item)]);
      setDataValues(valuesArr);
    }
  }, [data]);

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
          <Table sx={{ mt: 2 }}>
            <TableHead>
              <TableRow>
                {data.length > 0 &&
                  Object.keys(data[0]).map((item, i) => (
                    <TableCell component="th" key={i} sx={{ fontWeight: 700 }}>
                      {item}
                    </TableCell>
                  ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {dataValues.length > 0 &&
                dataValues.map((_, i) => (
                  <TableRow
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    {dataValues[i].map((item, ind) => (
                      <TableCell key={ind}>
                        {item.toString() ? item : "-"}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default UserModel;
