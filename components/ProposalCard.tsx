interface ProposalCardProps {
    proposal: {
        id: number;
        title: string;
        votesFor: number;
        votesAgainst: number;
    };
    voteOnProposal: (id: number, support: boolean) => Promise<void>;
}

export default function ProposalCard({ proposal, voteOnProposal }: ProposalCardProps) {
    return (
        <div className="border border-neutral rounded p-4 bg-white shadow">
            <h3 className="text-lg font-bold text-primary">{proposal.title}</h3>
            <p>Votes For: {proposal.votesFor} | Votes Against: {proposal.votesAgainst}</p>
            <div className="flex space-x-4 mt-4">
                <button
                    onClick={() => voteOnProposal(proposal.id, true)}
                    className="bg-accent text-white px-4 py-2 rounded"
                >
                    Vote For
                </button>
                <button
                    onClick={() => voteOnProposal(proposal.id, false)}
                    className="bg-highlight text-white px-4 py-2 rounded"
                >
                    Vote Against
                </button>
            </div>
        </div>
    );
}
