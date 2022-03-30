import React, { useEffect, useState } from "react";
import { Grid, Typography, Box } from "@mui/material";
import HomeUserMoney from "./HomeUserMoney/HomeUserMoney";
import HomeUserOnline from "./HomeUserOnline/HomeUserOnline";
import HomeOnlineChart from "./HomeOnlineChart/HomeOnlineChart";
import { homeAPI } from "../../api/api";

const Home = () => {
  const [dataOnline, setDataOnline] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    homeAPI
      .useronline({ start: "2022-03-01", end: "2022-03-30" })
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
        <Grid container spacing={{xs: 4, sm: 6, md: 8}}>
          <Grid item xs={12} sm={6}>
            <HomeUserMoney />
          </Grid>
          <Grid item xs={12} sm={6}>
            <HomeUserOnline dataOnline={dataOnline} />
          </Grid>
          <Grid item xs={12} sx={{width: "100%", height: "440px"}}>
            <HomeOnlineChart dataChart={dataOnline} />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
