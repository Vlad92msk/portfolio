import React, { useContext } from "react";
import { Bar } from "react-chartjs-2";
import { FormDataType, RowsContext } from "../../Routes/Application2";

type PropsType = {};

export const SchoolChurch: React.FC<PropsType> = () => {
  const dataChart: Array<FormDataType | null> = useContext(RowsContext);
  const myBcgColorChart1 = "red";
  const myBorderColorChart1 = "red";
  let bcgColorArray1 = [];
  let bordergColorArray1 = [];

  const myBcgColorChart2 = "orange";
  const myBorderColorChart2 = "orange";
  let bcgColorArray2 = [];
  let bordergColorArray2 = [];

  let years: Array<any> = [];
  dataChart.forEach((t) => {
    t !== null && years.push(t.year);
    bcgColorArray1.push(myBcgColorChart1);
    bordergColorArray1.push(myBorderColorChart1);
    bcgColorArray2.push(myBcgColorChart2);
    bordergColorArray2.push(myBorderColorChart2);
  });
  let data_schools: Array<any> = [];
  dataChart.forEach((t) => {
    t !== null && data_schools.push(t.schools);
  });
  let data_church: Array<any> = [];
  dataChart.forEach((t) => {
    t !== null && data_church.push(t.church);
  });

  const data = {
    labels: years,
    datasets: [
      {
        label: "Кол-во школ",
        data: data_schools,
        backgroundColor: myBcgColorChart1,
        borderColor: myBorderColorChart1,
        pointBackgroundColor: ["rgba(255, 99, 132, 1)"],
        pointBorderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
      {
        label: "Кол-во храмов",
        data: data_church,
        backgroundColor: myBcgColorChart2,
        borderColor: myBorderColorChart2,
        pointBackgroundColor: ["rgba(255, 99, 132, 1)"],
        pointBorderColor: ["rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "Кол-во храмов/школ",
    },
    legend: {
      display: false,
      labels: {
        fontColor: "rgb(255, 99, 132)",
      },
    },
  };

  return <Bar data={data} options={options} height={250} width={700} />;
};
