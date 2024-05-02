import { LineChart } from "@mui/x-charts/LineChart";

const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490, 4322, 3223];
const pData = [2400, 1398, 3800, 3900, 1800, 2800, 2300, 1300, 3242];
const xLabels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
];

const DataLineChart = () => {
  return (
    <div className="bg-white p-10 border">
      <LineChart
        width={500}
        height={300}
        series={[
          { data: pData, label: "pv", yAxisKey: "leftAxisId" },
          { data: uData, label: "uv", yAxisKey: "rightAxisId" },
        ]}
        xAxis={[{ scaleType: "point", data: xLabels }]}
        yAxis={[{ id: "leftAxisId" }, { id: "rightAxisId" }]}
        rightAxis="rightAxisId"
      />
    </div>
  );
};

export default DataLineChart;
