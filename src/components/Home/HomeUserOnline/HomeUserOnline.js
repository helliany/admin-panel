import { Box, Card, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import EventIcon from "@mui/icons-material/Event";
import MessageIcon from "@mui/icons-material/Message";
import PersonIcon from "@mui/icons-material/Person";
import dayjs from "dayjs";
import 'dayjs/locale/ru';

const HomeUserOnline = ({ dataOnline }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(dataOnline[dataOnline.length - 1]);
  }, [dataOnline]);

  return (
    <Card sx={{ p: 3, height: "100%" }}>
      <Grid container direction="column" alignItems="flex-start" spacing={2}>
        <Grid container item alignItems="flex-start" spacing={2}>
          <Grid item>
            <EventIcon sx={{ color: "success.main" }} />
          </Grid>
          <Grid item sx={{ fontSize: 18 }}>
            <Box component="span" sx={{ fontWeight: "700" }}>
              {dayjs(data?.date).locale('ru').format('D MMMM, YYYY')}
            </Box>
          </Grid>
        </Grid>
        <Grid container item alignItems="flex-start" spacing={2}>
          <Grid item>
            <MessageIcon sx={{ color: "primary.light" }} />
          </Grid>
          <Grid item sx={{ fontSize: 18 }}>
            Сообщений:{" "}
            <Box component="span" sx={{ fontWeight: "700" }}>
              {data?.total_message}
            </Box>
          </Grid>
        </Grid>
        <Grid container item alignItems="flex-start" spacing={2}>
          <Grid item>
            <PersonIcon sx={{ color: "secondary.main" }} />
          </Grid>
          <Grid item sx={{ fontSize: 18 }}>
            Пользователей:{" "}
            <Box component="span" sx={{ fontWeight: "700" }}>
              {data?.count_users}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default HomeUserOnline;
