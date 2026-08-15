"use client";

import React from "react";
import { Activity } from "@/types";
import { formatRelativeTime } from "@/lib/utils/helpers";
import { CheckCircle2, Zap, MessageSquare, PlusCircle, XCircle } from "lucide-react";

interface ActivityFeedProps {
  activities: Activity[];
  limit?: number;
}

const activityTypeConfig: Record<
  string,
  { icon: React.ReactNode; color: string; label: string }
> = {
  task_completed: {
    icon: <CheckCircle2 className="w-5 h-5" />,
    color: "text-success",
    label: "Task Completed",
  },
  task_assigned: {
    icon: <Zap className="w-5 h-5" />,
    color: "text-primary",
    label: "Task Assigned",
  },
  comment_added: {
    icon: <MessageSquare className="w-5 h-5" />,
    color: "text-info",
    label: "Comment Added",
  },
  project_created: {
    icon: <PlusCircle className="w-5 h-5" />,
    color: "text-success",
    label: "Project Created",
  },
  project_completed: {
    icon: <CheckCircle2 className="w-5 h-5" />,
    color: "text-success",
    label: "Project Completed",
  },
  project_updated: {
    icon: <Zap className="w-5 h-5" />,
    color: "text-primary",
    label: "Project Updated",
  },
  task_started: {
    icon: <Zap className="w-5 h-5" />,
    color: "text-info",
    label: "Task Started",
  },
};

export function ActivityFeed({ activities, limit = 10 }: ActivityFeedProps) {
  const displayActivities = activities.slice(0, limit);

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-foreground">Activity Feed</h2>
        <p className="text-sm text-muted mt-1">Recent team activity and updates</p>
      </div>

      <div className="space-y-4">
        {displayActivities.map((activity) => {
          const config = activityTypeConfig[activity.type] || {
            icon: <MessageSquare className="w-5 h-5" />,
            color: "text-muted",
            label: activity.type,
          };

          return (
            <div key={activity.id} className="flex gap-4">
              {/* Timeline dot */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className={`${config.color}`}>{config.icon}</div>
                <div className="w-0.5 h-8 bg-border mt-2" />
              </div>

              {/* Content */}
              <div className="flex-1 pt-1 pb-4">
                <div className="flex items-start justify-between gap-2 mb-1">
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      <span className="text-primary font-semibold">
                        {activity.actor.name}
                      </span>
                    </p>
                    <p className="text-sm text-foreground mt-0.5">
                      {activity.description}
                    </p>
                  </div>
                  <span className="text-xs text-muted whitespace-nowrap">
                    {formatRelativeTime(activity.createdAt)}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {displayActivities.length === 0 && (
        <div className="text-center py-12">
          <MessageSquare className="w-12 h-12 text-muted/30 mx-auto mb-3" />
          <p className="text-muted">No recent activity</p>
        </div>
      )}
    </div>
  );
}
