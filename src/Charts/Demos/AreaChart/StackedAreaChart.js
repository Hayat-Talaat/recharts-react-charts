import React, { PureComponent } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const data = [
  {
    name: "1",
    income: 1568,
    outcome: 1779,
    amt: 10
  },
  {
    name: "2",
    income: 564,
    outcome: 445,
    amt: 20
  },
  {
    name: "3",
    income: 800,
    outcome: 1025,
    amt: 30
  },
  {
    name: "4",
    income: 541,
    outcome: 2145,
    amt: 40
  },
  {
    name: "5",
    income: 8520,
    outcome: 984,
    amt: 50
  },
  {
    name: "6",
    income: 6156,
    outcome: 461,
    amt: 60
  },
  {
    name: "7",
    income: 6131,
    outcome: 644,
    amt: 70
  },
  {
    name: "8",
    income: 9874,
    outcome: 9630,
    amt: 80
  },
  {
    name: "9",
    income: 6110,
    outcome: 3671,
    amt: 90
  },
  {
    name: "10",
    income: 7903,
    outcome: 8620,
    amt: 100
  }
];

export default class Example extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/c1rLyqj1/";

  render() {
    return (
      <AreaChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="income"
          stackId="1"
          stroke="#8884d8"
          fill="#8884d8"
        />
        <Area
          type="monotone"
          dataKey="outcome"
          stackId="1"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
        
      </AreaChart>
    );
  }
}
