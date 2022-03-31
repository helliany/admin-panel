import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { modelsAPI } from "../../api/api";
import LinkIcon from "@mui/icons-material/Link";
import { Box } from "@mui/system";

const Models = () => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    modelsAPI
      .models()
      .then((res) => {
        setData(res.data);
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
          Models
        </Typography>
        <nav>
          <List sx={{ maxHeight: "510px", overflow: "auto" }}>
            {data.length > 0 &&
              data.map((item) => (
                <ListItem key={item} sx={{ px: 2 }} disablePadding>
                  <ListItemButton component={Link} to={`${item}`} divider>
                    <ListItemIcon>
                      <LinkIcon sx={{ color: "primary.dark" }} />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItemButton>
                </ListItem>
              ))}
          </List>
        </nav>
      </Paper>
    </Box>
  );
};

export default Models;
