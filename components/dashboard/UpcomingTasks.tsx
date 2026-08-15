"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, CheckSquare, AlertCircle } from "lucide-react";
import { Task } from "@/types";
import { ROUTES, PRIORITY_COLORS } from "@/lib/constants";
import { cn, formatDate, isOverdue } from "@/lib/utils/helpers";

interface UpcomingTasksProps {
  tasks: Task[];
  limit?: number;
}

export function UpcomingTasks({ tasks, limit = 8 }: UpcomingTasksProps) {
  // Sort by due date and filter out completed tasks
  const sortedTasks = tasks
    .filter((t) => t.status !== "DONE")
    .sort((a, b) => {
      if (!a.dueDate) return 1;
      if (!b.dueDate) return -1;
      return new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime();
    })
    .slice(0, limit);

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-foreground">Upcoming Tasks</h2>
          <p className="text-sm text-muted mt-1">Tasks due soon that need attention</p>
        </div>
        <Link
          href={ROUTES.TASKS}
          className="inline-flex items-center gap-2 text-primary hover:text-primary-600 font-medium transition-colors text-sm"
        >
          View All
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="space-y-2">
        {sortedTasks.map((task) => {
          const overdue = isOverdue(task.dueDate);
          return (
            <div
              key={task.id}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
            >
              {/* Checkbox icon */}
              <div className="flex-shrink-0">
                <CheckSquare className="w-5 h-5 text-muted group-hover:text-primary transition-colors" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-medium text-foreground truncate group-hover:text-primary transition-colors">
                    {task.title}
                  </p>
                  {overdue && (
                    <AlertCircle className="w-4 h-4 text-error flex-shrink-0" />
                  )}
                </div>
                <p className="text-xs text-muted truncate">
                  {task.assignee?.name || "Unassigned"}
                </p>
              </div>

              {/* Priority and due date */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <span
                  className={cn(
                    "inline-flex px-2 py-1 rounded text-xs font-medium",
                    PRIORITY_COLORS[task.priority]
                  )}
                >
                  {task.priority}
                </span>
                <span className={`text-xs font-medium whitespace-nowrap ${
                  overdue ? "text-error" : "text-muted"
                }`}>
                  {task.dueDate ? formatDate(task.dueDate) : "No date"}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {sortedTasks.length === 0 && (
        <div className="text-center py-12">
          <CheckSquare className="w-12 h-12 text-muted/30 mx-auto mb-3" />
          <p className="text-muted">No upcoming tasks</p>
        </div>
      )}
    </div>
  );
}
