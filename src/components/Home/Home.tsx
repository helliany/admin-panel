import React, { useEffect, useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import HomeUserMoney from "./HomeUserMoney/HomeUserMoney";
import HomeUserOnline from "./HomeUserOnline/HomeUserOnline";
import HomeOnlineChart from "./HomeOnlineChart/HomeOnlineChart";
import { homeAPI } from "../../api/api";
import dayjs from "dayjs";
import { IUserOnline } from "../../types/userOnline.model";

const Home: React.FC = () => {
  const [dataOnline, setDataOnline] = useState<IUserOnline[]>([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    homeAPI
      .useronline({ start: dayjs().subtract(30, "day").format("YYYY-MM-DD"), end: dayjs().format("YYYY-MM-DD") })
      .then((res) => {
        setDataOnline(res.data.graph_info);
      })
      .catch(() => {
        setIsError(true);
      });
  }, []);

  return (
    <Box display="flex" m={4}>
      <Grid container direction="column" alignItems="center">
        <Typography mb={5} variant="h3" component="h1" color={"text.primary"}>
          Admin Panel
        </Typography>
        <Grid container spacing={{xs: 4, lg: 8}}>
          <Grid item xs={12} md={6}>
            <HomeUserMoney />
          </Grid>
          <Grid item xs={12} md={6}>
            <HomeUserOnline dataOnline={dataOnline} />
          </Grid>
          {!isError && (
            <Grid item xs={12} sx={{width: "100%", height: "440px"}}>
              <HomeOnlineChart dataChart={dataOnline} />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
