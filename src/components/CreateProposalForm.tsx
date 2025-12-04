'use client';

import { useState } from 'react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import toast from 'react-hot-toast';

interface CreateProposalFormProps {
    onSubmit?: (data: any) => void;
}

export function CreateProposalForm({ onSubmit }: CreateProposalFormProps) {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        target: '',
        value: '',
        calldata: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.title || !formData.description) {
            toast.error('Please fill in all required fields');
            return;
        }

        toast.success('Proposal created successfully!');
        onSubmit?.(formData);

        // Reset form
        setFormData({
            title: '',
            description: '',
            target: '',
            value: '',
            calldata: '',
        });
    };

    return (
        <Card>
            <h3 className="text-2xl font-bold mb-6">Create New Proposal</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title */}
                <div>
                    <label className="block text-sm font-medium mb-2">
                        Title <span className="text-[var(--error)]">*</span>
                    </label>
                    <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder="e.g., Allocate 100 ETH to Development Fund"
                        className="w-full px-4 py-3 rounded-lg bg-[var(--input-bg)] border border-[var(--input-border)] focus:border-[var(--primary)] outline-none"
                        required
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm font-medium mb-2">
                        Description <span className="text-[var(--error)]">*</span>
                    </label>
                    <textarea
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder="Provide detailed information about the proposal..."
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg bg-[var(--input-bg)] border border-[var(--input-border)] focus:border-[var(--primary)] outline-none resize-none"
                        required
                    />
                    <div className="text-xs text-gray-500 mt-1">
                        Supports Markdown formatting
                    </div>
                </div>

                {/* Target Address */}
                <div>
                    <label className="block text-sm font-medium mb-2">
                        Target Address (Optional)
                    </label>
                    <input
                        type="text"
                        value={formData.target}
                        onChange={(e) => setFormData({ ...formData, target: e.target.value })}
                        placeholder="0x..."
                        className="w-full px-4 py-3 rounded-lg bg-[var(--input-bg)] border border-[var(--input-border)] focus:border-[var(--primary)] outline-none"
                    />
                    <div className="text-xs text-gray-500 mt-1">
                        Contract or wallet address to interact with
                    </div>
                </div>

                {/* Value */}
                <div>
                    <label className="block text-sm font-medium mb-2">
                        ETH Value (Optional)
                    </label>
                    <input
                        type="text"
                        value={formData.value}
                        onChange={(e) => setFormData({ ...formData, value: e.target.value })}
                        placeholder="0.0"
                        className="w-full px-4 py-3 rounded-lg bg-[var(--input-bg)] border border-[var(--input-border)] focus:border-[var(--primary)] outline-none"
                    />
                    <div className="text-xs text-gray-500 mt-1">
                        Amount of ETH to send with the transaction
                    </div>
                </div>

                {/* Calldata */}
                <div>
                    <label className="block text-sm font-medium mb-2">
                        Calldata (Optional)
                    </label>
                    <textarea
                        value={formData.calldata}
                        onChange={(e) => setFormData({ ...formData, calldata: e.target.value })}
                        placeholder="0x..."
                        rows={3}
                        className="w-full px-4 py-3 rounded-lg bg-[var(--input-bg)] border border-[var(--input-border)] focus:border-[var(--primary)] outline-none resize-none font-mono text-sm"
                    />
                    <div className="text-xs text-gray-500 mt-1">
                        Encoded function call data for contract interaction
                    </div>
                </div>

                {/* Info Box */}
                <div className="bg-[var(--primary)] bg-opacity-10 border border-[var(--primary)] rounded-lg p-4">
                    <h4 className="font-semibold mb-2 text-[var(--primary)]">📋 Proposal Guidelines</h4>
                    <ul className="text-sm space-y-1 text-gray-300">
                        <li>• Be clear and concise in your title</li>
                        <li>• Provide detailed rationale in the description</li>
                        <li>• Include budget breakdown if applicable</li>
                        <li>• Voting period: 1 week</li>
                        <li>• Quorum required: 4% of total supply</li>
                    </ul>
                </div>

                {/* Submit Button */}
                <div className="flex gap-4">
                    <Button type="submit" className="flex-1">
                        Create Proposal
                    </Button>
                    <Button
                        type="button"
                        variant="outline"
                        onClick={() => setFormData({ title: '', description: '', target: '', value: '', calldata: '' })}
                    >
                        Clear
                    </Button>
                </div>
            </form>
        </Card>
    );
}
