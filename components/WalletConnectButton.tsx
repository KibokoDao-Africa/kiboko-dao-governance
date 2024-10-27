"use client";

import { useState } from "react";
import { ethers } from "ethers"; // Ensure ethers is installed at version 6

export default function WalletConnectButton() {
    const [account, setAccount] = useState<string | null>(null);

    const connectWallet = async () => {
        if (typeof window.ethereum !== "undefined") {
            try {
                const provider = new ethers.BrowserProvider(window.ethereum); // Correct provider for Ethers 6
                const accounts = await provider.send("eth_requestAccounts", []);
                setAccount(accounts[0]);
            } catch (error) {
                console.error("Error connecting wallet:", error);
            }
        } else {
            alert("MetaMask is required to connect to this application.");
        }
    };

    return (
        <button
            onClick={connectWallet}
            className="bg-accent text-white px-4 py-2 rounded shadow"
        >
            {account ? `Connected: ${account}` : "Connect Wallet"}
        </button>
    );
}
