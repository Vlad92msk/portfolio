import { Button } from "@material-ui/core";
import React, { useContext, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { FormDataType, RowsContext } from "../../Routes/Application2";

type PropsType = {};

export const SalaryChart: React.FC<PropsType> = () => {
  const dataChart: Array<FormDataType | null> = useContext(RowsContext);
  let data_schools_church: Array<any> = [];
  const [visibleYear, setVisibleYear] = useState<number>(2015);
  dataChart
    .filter((t) => t !== null && t.year === visibleYear)
    .forEach((t) => {
      t !== null && data_schools_church.push(t.deputy);
    });

  dataChart
    .filter((t) => t !== null && t.year === visibleYear)
    .forEach((t) => {
      t !== null && data_schools_church.push(t.citizens);
    });

  const data = {
    labels: ["Средемесячная з/п депутатов", "Средемесячная з/п граждан"],
    datasets: [
      {
        data: data_schools_church,
        backgroundColor: ["orange", "red"],
        borderColor: ["orange", "red"],
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "Сравнение средней з/п депутатов и обычных граждан",
    },
    legend: {
      display: false,
      labels: {
        fontColor: "rgb(255, 99, 132)",
      },
    },
  };

  return (
    <>
      <Doughnut data={data} options={options} height={250} width={700} />
      {dataChart.map((t: any) => (
        <Button
          key={t.year}
          onClick={() => setVisibleYear(t.year * 1)}
          style={{ color: "orange" }}
        >
          {t.year}
        </Button>
      ))}
    </>
  );
};
