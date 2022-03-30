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
import 'dayjs/locale/ru';

const HomeOnlineChart = ({ dataChart }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={730}
        height={250}
        data={dataChart}
        margin={{ left: -10 }}
      >
        <defs>
          <linearGradient id="colorMs" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ba68c8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#9c27b0" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorUs" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#03a9f4" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="date" tickFormatter={(data) => dayjs(data).locale('ru').format('D MMM')} />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" vertical={false} />
        <Tooltip labelFormatter={(data) => dayjs(data).locale('ru').format('D MMMM')} />
        <Legend />
        <Area
          type="monotone"
          dataKey="count_users"
          stroke="#9c27b0"
          fillOpacity={1}
          fill="url(#colorMs)"
          name="Пользователи"
        />
        <Area
          type="monotone"
          dataKey="total_message"
          stroke="#03a9f4"
          fillOpacity={1}
          fill="url(#colorUs)"
          name="Сообщения"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default HomeOnlineChart;
