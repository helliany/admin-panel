import React, { useEffect, useState } from "react";
import { homeAPI } from "../../../api/api";
import PaidIcon from "@mui/icons-material/Paid";
import LiquorIcon from "@mui/icons-material/Liquor";
import { Grid, Card, Box } from "@mui/material";
import { IUserMoney } from "../../../types/userMoney.model";

const HomeUserMoney: React.FC = () => {
  const [data, setData] = useState<IUserMoney>({ money: 0, bottle: 0 });

  useEffect(() => {
    homeAPI
      .usermoney()
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Card sx={{ p: 3, height: "100%" }} elevation={4}>
      <Grid container direction="column" alignItems="flex-start" spacing={2}>
        <Grid container item alignItems="flex-start" spacing={2} wrap="nowrap">
          <Grid item>
            <PaidIcon sx={{ color: "warning.main" }} />
          </Grid>
          <Grid item sx={{ fontSize: 18 }}>
            Всего денег у пользователей:{" "}
            <Box component="span" sx={{ fontWeight: "700" }}>
              {data?.money}
            </Box>
          </Grid>
        </Grid>
        <Grid container item alignItems="flex-start" spacing={2} wrap="nowrap">
          <Grid item>
            <LiquorIcon sx={{ color: "primary.dark" }} />
          </Grid>
          <Grid item sx={{ fontSize: 18 }}>
            Всего бутылок у пользователей:{" "}
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
