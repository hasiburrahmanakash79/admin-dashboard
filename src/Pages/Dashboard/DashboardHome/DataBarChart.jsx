import { BarChart } from '@mui/x-charts';

const DataBarChart = () => {
    return (
        <div className='bg-white p-4 border '>
            <BarChart
      series={[
        { data: [3, 4, 1, 4, 5], stack: 'A', label: 'Series A1' },
        { data: [4, 3, 1, 5, 8], stack: 'A', label: 'Series A2' },
        { data: [4, 2, 5, 4, 1], stack: 'B', label: 'Series B1' },
        { data: [2, 8, 1, 3, 1], stack: 'B', label: 'Series B2' },
        { data: [10, 6, 5, 8, 9], label: 'Series C1' },
      ]}
      width={550}
      height={350}
    />
        </div>
    );
};

export default DataBarChart;