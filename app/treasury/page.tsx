import TreasuryChart from "../../components/TreasuryChart";

export default function Treasury() {
    const data = {
        labels: ["Community Development", "Research & Development", "Operations"],
        values: [40, 35, 25],
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Treasury Overview</h1>
            <TreasuryChart data={data} />
        </div>
    );
}
