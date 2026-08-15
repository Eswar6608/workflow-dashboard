"use client";

import React from "react";
import { Search, X } from "lucide-react";
import { PROJECT_STATUSES, PROJECT_PRIORITIES } from "@/lib/constants";

interface ProjectFiltersProps {
  searchQuery: string;
  selectedStatus: string | null;
  selectedPriority: string | null;
  onSearchChange: (query: string) => void;
  onStatusChange: (status: string | null) => void;
  onPriorityChange: (priority: string | null) => void;
}

export function ProjectFilters({
  searchQuery,
  selectedStatus,
  selectedPriority,
  onSearchChange,
  onStatusChange,
  onPriorityChange,
}: ProjectFiltersProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 space-y-4">
      {/* Search */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Search Projects
        </label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted" />
          <input
            type="text"
            placeholder="Search by name or description..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-900 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted hover:text-foreground transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Status Filter */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Status
        </label>
        <div className="space-y-2">
          {[
            {
              value: null,
              label: "All Statuses",
            },
            ...Object.entries(PROJECT_STATUSES).map(([key, value]) => ({
              value: key,
              label: value,
            })),
          ].map((option) => (
            <label
              key={option.value}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="radio"
                name="status"
                value={option.value || ""}
                checked={selectedStatus === option.value}
                onChange={() => onStatusChange(option.value)}
                className="w-4 h-4 accent-primary"
              />
              <span className="text-sm text-foreground">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Priority Filter */}
      <div>
        <label className="block text-sm font-medium text-foreground mb-2">
          Priority
        </label>
        <div className="space-y-2">
          {[
            {
              value: null,
              label: "All Priorities",
            },
            ...Object.entries(PROJECT_PRIORITIES).map(([key, value]) => ({
              value: key,
              label: value,
            })),
          ].map((option) => (
            <label
              key={option.value}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="radio"
                name="priority"
                value={option.value || ""}
                checked={selectedPriority === option.value}
                onChange={() => onPriorityChange(option.value)}
                className="w-4 h-4 accent-primary"
              />
              <span className="text-sm text-foreground">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Active filters display */}
      {(selectedStatus || selectedPriority || searchQuery) && (
        <div className="pt-4 border-t border-border">
          <p className="text-xs text-muted mb-2">Active Filters:</p>
          <div className="flex flex-wrap gap-2">
            {searchQuery && (
              <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-lg">
                <span className="text-xs text-primary">Search: {searchQuery}</span>
                <button
                  onClick={() => onSearchChange("")}
                  className="text-primary hover:text-primary-600"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            )}
            {selectedStatus && (
              <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-lg">
                <span className="text-xs text-primary">
                  Status: {PROJECT_STATUSES[selectedStatus as keyof typeof PROJECT_STATUSES]}
                </span>
                <button
                  onClick={() => onStatusChange(null)}
                  className="text-primary hover:text-primary-600"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            )}
            {selectedPriority && (
              <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-lg">
                <span className="text-xs text-primary">
                  Priority: {PROJECT_PRIORITIES[selectedPriority as keyof typeof PROJECT_PRIORITIES]}
                </span>
                <button
                  onClick={() => onPriorityChange(null)}
                  className="text-primary hover:text-primary-600"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
