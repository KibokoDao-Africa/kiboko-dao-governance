import { Pie } from "react-chartjs-2";

interface TreasuryChartProps {
    data: {
        labels: string[];
        values: number[];
    };
}

export default function TreasuryChart({ data }: TreasuryChartProps) {
    const chartData = {
        labels: data.labels,
        datasets: [{
            data: data.values,
            backgroundColor: ['#ED058A', '#FB6269', '#7DC9CF'],
        }],
    };

    return <Pie data={chartData} />;
}
