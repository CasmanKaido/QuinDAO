'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { io, Socket } from 'socket.io-client';
import { useWallet } from '@/hooks/useWallet';

interface SocketContextType {
    socket: Socket | null;
    isConnected: boolean;
    onlineUsers: string[];
}

const SocketContext = createContext<SocketContextType>({
    socket: null,
    isConnected: false,
    onlineUsers: [],
});

export function useSocket() {
    return useContext(SocketContext);
}

export function SocketProvider({ children }: { children: ReactNode }) {
    const [socket, setSocket] = useState<Socket | null>(null);
    const [isConnected, setIsConnected] = useState(false);
    const [onlineUsers, setOnlineUsers] = useState<string[]>([]);
    const { address, isConnected: walletConnected } = useWallet();

    useEffect(() => {
        // For demo purposes, we'll simulate a WebSocket connection
        // In production, connect to your actual WebSocket server
        const mockSocket = {
            connected: true,
            on: (event: string, callback: Function) => { },
            emit: (event: string, data: any) => { },
            off: (event: string) => { },
        } as any;

        setSocket(mockSocket);
        setIsConnected(true);

        // Simulate online users
        if (walletConnected && address) {
            setOnlineUsers(prev => [...new Set([...prev, address])]);
        }

        return () => {
            setIsConnected(false);
        };
    }, [address, walletConnected]);

    return (
        <SocketContext.Provider value={{ socket, isConnected, onlineUsers }}>
            {children}
        </SocketContext.Provider>
    );
}
