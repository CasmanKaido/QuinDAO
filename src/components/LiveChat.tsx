'use client';

import { useState } from 'react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { UserAvatar } from './UserAvatar';
import { useWallet } from '@/hooks/useWallet';

interface Message {
    id: string;
    address: string;
    message: string;
    timestamp: number;
}

export function LiveChat() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: '1',
            address: '0x742d35Cc6634C0532925a3b844Bc9e4e89',
            message: 'I think this proposal makes sense for long-term growth',
            timestamp: Date.now() - 300000,
        },
        {
            id: '2',
            address: '0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p',
            message: 'Agreed! The budget breakdown looks reasonable',
            timestamp: Date.now() - 180000,
        },
    ]);
    const [input, setInput] = useState('');
    const { address } = useWallet();

    const sendMessage = () => {
        if (!input.trim() || !address) return;

        const newMessage: Message = {
            id: Date.now().toString(),
            address,
            message: input,
            timestamp: Date.now(),
        };

        setMessages(prev => [...prev, newMessage]);
        setInput('');
    };

    return (
        <Card className="h-[500px] flex flex-col">
            <h3 className="text-xl font-bold mb-4">Live Discussion</h3>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto space-y-4 mb-4">
                {messages.map((msg) => (
                    <div key={msg.id} className="flex gap-3">
                        <UserAvatar address={msg.address} size="sm" />
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="text-sm font-medium">
                                    {msg.address.slice(0, 6)}...{msg.address.slice(-4)}
                                </span>
                                <span className="text-xs text-gray-500">
                                    {new Date(msg.timestamp).toLocaleTimeString()}
                                </span>
                            </div>
                            <p className="text-sm text-gray-300">{msg.message}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Input */}
            <div className="flex gap-2">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-2 rounded-lg bg-[var(--input-bg)] border border-[var(--input-border)] focus:border-[var(--primary)] outline-none"
                    disabled={!address}
                />
                <Button onClick={sendMessage} disabled={!address || !input.trim()}>
                    Send
                </Button>
            </div>
        </Card>
    );
}
