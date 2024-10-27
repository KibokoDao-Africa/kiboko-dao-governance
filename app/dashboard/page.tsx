"use client";

import { useEffect, useState } from "react";
import { ethers } from "ethers";
import GovernanceAbi from "../../abis/Governance.json";
import ProposalCard from "../../components/ProposalCard";

interface Proposal {
    id: number;
    title: string;
    votesFor: number;
    votesAgainst: number;
}

export default function Dashboard() {
    const [proposals, setProposals] = useState<Proposal[]>([]);
    const governanceAddress = process.env.NEXT_PUBLIC_GOVERNANCE_ADDRESS || "";

    useEffect(() => {
        async function fetchProposals() {
            if (typeof window.ethereum !== "undefined") {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const contract = new ethers.Contract(governanceAddress, GovernanceAbi.abi, provider);
                const proposalCount = await contract.proposalCount();
                const loadedProposals: Proposal[] = [];

                for (let i = 1; i <= proposalCount; i++) {
                    const proposal = await contract.proposals(i);
                    loadedProposals.push({
                        id: proposal.id.toNumber(),
                        title: proposal.description,
                        votesFor: proposal.votesFor.toNumber(),
                        votesAgainst: proposal.votesAgainst.toNumber(),
                    });
                }
                setProposals(loadedProposals);
            }
        }
        fetchProposals();
    }, [governanceAddress]);

    const voteOnProposal = async (id: number, support: boolean) => {
        if (typeof window.ethereum !== "undefined") {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(governanceAddress, GovernanceAbi.abi, signer);
            await contract.vote(id, support);
            alert("Vote submitted!");
        }
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Governance Dashboard</h1>
            <button className="bg-highlight text-white px-4 py-2 rounded shadow mb-4">Create Proposal</button>
            <div className="space-y-4">
                {proposals.map((proposal) => (
                    <ProposalCard key={proposal.id} proposal={proposal} voteOnProposal={voteOnProposal} />
                ))}
            </div>
        </div>
    );
}
