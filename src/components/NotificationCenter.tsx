'use client';

import { useState, useRef, useEffect } from 'react';
import { useNotifications } from '@/context/NotificationContext';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { formatTimeAgo } from '@/utils/helpers';

export function NotificationCenter() {
    const { notifications, unreadCount, markAsRead, markAllAsRead, clearNotification } = useNotifications();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-2 rounded-lg hover:bg-[var(--input-bg)] transition-colors"
            >
                <svg
                    className="w-6 h-6 text-gray-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                </svg>
                {unreadCount > 0 && (
                    <span className="absolute top-1 right-1 w-4 h-4 bg-[var(--error)] rounded-full text-[10px] flex items-center justify-center text-white font-bold">
                        {unreadCount > 9 ? '9+' : unreadCount}
                    </span>
                )}
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-80 sm:w-96 z-50">
                    <Card className="shadow-xl border-[var(--card-border)] max-h-[80vh] flex flex-col p-0 overflow-hidden">
                        <div className="p-4 border-b border-[var(--card-border)] flex items-center justify-between bg-[var(--card-bg)]">
                            <h3 className="font-bold">Notifications</h3>
                            {unreadCount > 0 && (
                                <button
                                    onClick={markAllAsRead}
                                    className="text-xs text-[var(--primary)] hover:underline"
                                >
                                    Mark all as read
                                </button>
                            )}
                        </div>

                        <div className="overflow-y-auto flex-1 p-2 space-y-2">
                            {notifications.length === 0 ? (
                                <div className="text-center py-8 text-gray-500">
                                    No notifications yet
                                </div>
                            ) : (
                                notifications.map((notification) => (
                                    <div
                                        key={notification.id}
                                        className={`p-3 rounded-lg transition-colors relative group ${notification.read ? 'bg-transparent' : 'bg-[var(--input-bg)]'
                                            }`}
                                        onClick={() => markAsRead(notification.id)}
                                    >
                                        <div className="flex gap-3">
                                            <div className={`mt-1 w-2 h-2 rounded-full flex-shrink-0 ${notification.type === 'success' ? 'bg-[var(--success)]' :
                                                    notification.type === 'error' ? 'bg-[var(--error)]' :
                                                        notification.type === 'warning' ? 'bg-[var(--warning)]' :
                                                            'bg-[var(--primary)]'
                                                }`} />
                                            <div className="flex-1">
                                                <h4 className={`text-sm font-medium ${notification.read ? 'text-gray-400' : 'text-white'}`}>
                                                    {notification.title}
                                                </h4>
                                                <p className="text-xs text-gray-500 mt-1">
                                                    {notification.message}
                                                </p>
                                                <span className="text-[10px] text-gray-600 mt-2 block">
                                                    {formatTimeAgo(notification.timestamp)}
                                                </span>
                                            </div>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    clearNotification(notification.id);
                                                }}
                                                className="opacity-0 group-hover:opacity-100 text-gray-500 hover:text-white transition-opacity px-2"
                                            >
                                                ×
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </Card>
                </div>
            )}
        </div>
    );
}
