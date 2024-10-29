"use client";

import { useEffect, useState } from "react";
import { ethers, Interface } from "ethers"; // Ensure ethers is at version 6
import GovernanceAbi from "../../abis/Governance.json";
import ProposalCard from "../../components/ProposalCard";

const governanceAbi = GovernanceAbi.abi; 

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
            if (window.ethereum) {
                // Initialize the provider with ethers 6 syntax
                const provider = new ethers.BrowserProvider(window.ethereum);
                const contract = new ethers.Contract(governanceAddress, governanceAbi, provider);
                
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
        if (window.ethereum) {
            const provider = new ethers.BrowserProvider(window.ethereum);
            const signer = await provider.getSigner(); // Await the signer here
            const contract = new ethers.Contract(governanceAddress, governanceAbi, signer);
            await contract.vote(id, support);
            alert("Vote submitted!");
        }
    };
    

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Governance Dashboard</h1>
            <div className="space-y-4">
                {proposals.map((proposal) => (
                    <ProposalCard key={proposal.id} proposal={proposal} voteOnProposal={voteOnProposal} />
                ))}
            </div>
        </div>
    );
}
