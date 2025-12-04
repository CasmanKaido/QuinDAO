'use client';

import { Layout } from '@/components/Layout';
import { CreateProposalForm } from '@/components/CreateProposalForm';

export default function CreateProposalPage() {
    const handleProposalSubmit = (data: any) => {
        console.log('Proposal data:', data);
        // In production, this would call the smart contract
    };

    return (
        <Layout>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold mb-2">Create Proposal</h1>
                    <p className="text-gray-400">Submit a new proposal for DAO voting</p>
                </div>

                <CreateProposalForm onSubmit={handleProposalSubmit} />
            </div>
        </Layout>
    );
}
