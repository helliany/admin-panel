import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import { Card, useTheme } from "@mui/material";
import { IUserOnline } from "../../../types/userOnline.model";

interface IProps {
  dataChart: IUserOnline[];
}

const HomeOnlineChart: React.FC<IProps> = ({ dataChart }) => {
  const theme = useTheme();

  const formatCount = (n: number): string => {
    if (n >= 1e3) {
      return `${+(n / 1e3).toFixed(1)}K`;
    }
    return `${n}`;
  };

  return (
    <Card sx={{ p: 3, height: "100%" }} elevation={4}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={730}
          height={250}
          data={dataChart}
          margin={{ left: -10 }}
        >
          <defs>
            <linearGradient id="colorMs" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={theme.palette.secondary.light}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={theme.palette.secondary.dark}
                stopOpacity={0}
              />
            </linearGradient>
            <linearGradient id="colorUs" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={theme.palette.info.light}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={theme.palette.success.light}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="date"
            tickFormatter={(data) => dayjs(data).locale("ru").format("D MMM")}
            tick={{ fill: theme.palette.text.primary }}
          />
          <YAxis
            tick={{ fill: theme.palette.text.primary }}
            tickFormatter={(data) => formatCount(data)}
          />
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <Tooltip
            labelFormatter={(data) => dayjs(data).locale("ru").format("D MMMM")}
            contentStyle={{
              backgroundColor: theme.palette.background.default,
              borderRadius: "6px",
              borderColor: theme.palette.grey[300],
            }}
            labelStyle={{ color: theme.palette.text.primary }}
          />
          <Legend />
          <Area
            type="monotone"
            dataKey="count_users"
            stroke={theme.palette.secondary.main}
            fillOpacity={1}
            fill="url(#colorMs)"
            name="Пользователи"
          />
          <Area
            type="monotone"
            dataKey="total_message"
            stroke={theme.palette.info.light}
            fillOpacity={1}
            fill="url(#colorUs)"
            name="Сообщения"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default HomeOnlineChart;
