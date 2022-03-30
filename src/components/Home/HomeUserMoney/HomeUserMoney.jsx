import React, { useEffect, useState } from "react";
import { homeAPI } from "../../../api/api";
import PaidIcon from "@mui/icons-material/Paid";
import LiquorIcon from "@mui/icons-material/Liquor";
import { Grid, Card, Box } from "@mui/material";

const HomeUserMoney = () => {
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    homeAPI
      .usermoney()
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch(() => {
        setIsError(true);
      });
  }, []);

  return (
    <Card sx={{ p: 3, height: "100%" }}>
      <Grid container direction="column" alignItems="flex-start" spacing={2}>
        <Grid container item alignItems="flex-start" spacing={2}>
          <Grid item>
            <PaidIcon sx={{ color: "warning.main" }} />
          </Grid>
          <Grid item sx={{ fontSize: 18 }}>
            Денег:{" "}
            <Box component="span" sx={{ fontWeight: "700" }}>
              {data?.money}
            </Box>
          </Grid>
        </Grid>
        <Grid container item alignItems="flex-start" spacing={2}>
          <Grid item>
            <LiquorIcon sx={{ color: "primary.dark" }} />
          </Grid>
          <Grid item sx={{ fontSize: 18 }}>
            Бутылок:{" "}
            <Box component="span" sx={{ fontWeight: "700" }}>
              {data?.bottle}
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default HomeUserMoney;
