import WalletConnectButton from "../components/WalletConnectButton";

export default function Home() {
    return (
        <div className="text-center">
            <h1 className="text-4xl font-extrabold text-primary mb-4">Welcome to KibokoDAO</h1>
            <p className="text-xl text-secondary mb-6">Empowering decentralized governance for Africa&apos;s future.</p>
            <WalletConnectButton />
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-neutral p-4 rounded shadow">
                    <h2 className="text-xl font-bold text-primary">Trust</h2>
                    <p>Building a community based on transparency and reliability.</p>
                </div>
                <div className="bg-neutral p-4 rounded shadow">
                    <h2 className="text-xl font-bold text-primary">Egalitarian</h2>
                    <p>Ensuring equal participation for all members in governance.</p>
                </div>
                <div className="bg-neutral p-4 rounded shadow">
                    <h2 className="text-xl font-bold text-primary">Innovation</h2>
                    <p>Fostering technological advancement through community efforts.</p>
                </div>
            </div>
        </div>
    );
}
