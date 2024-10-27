import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png";

export default function Header() {
    return (
        <header className="bg-primary p-4 text-white flex justify-between items-center">
            <div className="flex items-center space-x-4">
                <Image src={logo} alt="KibokoDAO" width={40} height={40} />
                <span className="font-bold text-lg">KibokoDAO</span>
            </div>
            <nav className="space-x-4">
                <Link href="/">Home</Link>
                <Link href="/dashboard">Dashboard</Link>
                <Link href="/proposals">Proposals</Link>
                <Link href="/treasury">Treasury</Link>
                <Link href="/profile">Profile</Link>
            </nav>
        </header>
    );
}
