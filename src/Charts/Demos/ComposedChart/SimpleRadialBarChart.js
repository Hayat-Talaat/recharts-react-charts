import React, { PureComponent } from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";

const data = [
  {
    name: "1",
    income: 1568,
    outcome: 1779,
    fill: "#8884d8"
  },
  {
    name: "2",
    income: 564,
    outcome: 445,
    fill: "#83a6ed"
  },
  {
    name: "3",
    income: 800,
    outcome: 1025,
    fill: "#8dd1e1"
  },
  {
    name: "4",
    income: 541,
    outcome: 2145,
    fill: "#82ca9d"
  },
  {
    name: "5",
    income: 8520,
    outcome: 984,
    fill: "#a4de6c"
  },
  {
    name: "6",
    income: 6156,
    outcome: 461,
    fill: "#d0ed57"
  },
  {
    name: "7",
    income: 6131,
    outcome: 644,
    fill: "#ffc658"
  }
];

const style = {
  top: 0,
  left: 350,
  lineHeight: "24px"
};

export default class Example extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/9km41z5z/";

  render() {
    return (
      <RadialBarChart
        width={500}
        height={300}
        cx={150}
        cy={150}
        innerRadius={20}
        outerRadius={140}
        barSize={10}
        data={data}
      >
        <RadialBar
          minAngle={15}
          label={{ position: "insideStart", fill: "#fff" }}
          background
          clockWise
          dataKey="income"
        />
        <Legend
          iconSize={10}
          width={120}
          height={140}
          layout="vertical"
          verticalAlign="middle"
          wrapperStyle={style}
        />
      </RadialBarChart>
    );
  }
}
