import React from "react";
import { Line } from "react-chartjs-2";
import { FormDataType } from "../../Routes/Application2";

type PropsType = {
  dataChart: Array<FormDataType | null>;
};

const PeopleChart: React.FC<PropsType> = ({ dataChart }) => {
  let years: Array<any> = [];
  dataChart.forEach((t) => {
    t !== null && years.push(t.year);
  });
  let data1: Array<any> = [];
  dataChart.forEach((t) => {
    t !== null && data1.push(t.naselenie);
  });

  const data = {
    labels: years,
    datasets: [
      {
        data: data1,
        backgroundColor: ["rgba(100, 99, 132, 0.2)"],
        borderColor: ["rgba(100, 99, 132, 1)"],
        pointBackgroundColor: ["rgba(255, 99, 132, 1)"],
        pointBorderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    tooltips: {
      intersect: false,
    },
    title: {
      display: true,
      text: "Численность населения России",
    },
    legend: {
      display: false,
    },
    scales: {
      yAxies: [
        {
          ticks: {
            stepSize: 100,
          },
        },
      ],
    },
  };

  return <Line data={data} options={options} height={250} width={700} />;
};

export default PeopleChart;
