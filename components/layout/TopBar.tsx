"use client";

import React from "react";
import { Menu, Bell, Search } from "lucide-react";

interface TopBarProps {
  onMenuClick?: () => void;
}

export function TopBar({ onMenuClick }: TopBarProps) {
  return (
    <header className="h-16 border-b border-border bg-card flex items-center px-6 gap-4">
      {/* Menu button (mobile) */}
      <button
        onClick={onMenuClick}
        className="lg:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
        aria-label="Open menu"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Search bar */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted" />
          <input
            type="text"
            placeholder="Search projects, tasks..."
            className="w-full pl-9 pr-4 py-2 bg-input border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
          />
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center gap-4">
        {/* Notifications */}
        <button
          className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          aria-label="Notifications"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full" />
        </button>

        {/* User menu placeholder */}
        <div className="flex items-center gap-2 pl-4 border-l border-border">
          <div className="text-right">
            <p className="text-sm font-medium text-foreground">Alex Chen</p>
            <p className="text-xs text-muted">Manager</p>
          </div>
          <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-bold">
            A
          </div>
        </div>
      </div>
    </header>
  );
}
