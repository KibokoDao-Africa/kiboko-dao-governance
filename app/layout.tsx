import "./globals.css";
import Header from "../components/Header";

export const metadata = {
    title: "KibokoDAO Governance Portal",
    description: "A decentralized governance portal for KibokoDAO",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-gray-50 font-sans">
                <Header />
                <main className="container mx-auto p-6">{children}</main>
            </body>
        </html>
    );
}
