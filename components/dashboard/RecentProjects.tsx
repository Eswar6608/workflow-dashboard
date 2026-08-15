"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, FolderOpen } from "lucide-react";
import { Project } from "@/types";
import { ROUTES, STATUS_COLORS, PROJECT_PRIORITIES } from "@/lib/constants";
import { cn } from "@/lib/utils/helpers";

interface RecentProjectsProps {
  projects: Project[];
  limit?: number;
}

export function RecentProjects({ projects, limit = 6 }: RecentProjectsProps) {
  const displayProjects = projects.slice(0, limit);

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold text-foreground">Recent Projects</h2>
          <p className="text-sm text-muted mt-1">Your active and recent projects</p>
        </div>
        <Link
          href={ROUTES.PROJECTS}
          className="inline-flex items-center gap-2 text-primary hover:text-primary-600 font-medium transition-colors text-sm"
        >
          View All
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="space-y-3">
        {displayProjects.map((project) => (
          <Link
            key={project.id}
            href={ROUTES.PROJECT_DETAIL(project.id)}
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors group"
          >
            {/* Icon */}
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <FolderOpen className="w-5 h-5 text-primary" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-medium text-foreground truncate group-hover:text-primary transition-colors">
                  {project.name}
                </h3>
                <span
                  className={cn(
                    "inline-flex items-center px-2 py-1 rounded text-xs font-medium whitespace-nowrap",
                    STATUS_COLORS[project.status]
                  )}
                >
                  {project.status.replace(/_/g, " ")}
                </span>
              </div>
              <p className="text-sm text-muted truncate">
                {project.description}
              </p>

              {/* Progress bar */}
              <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all"
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>

            {/* Progress text */}
            <div className="flex-shrink-0 text-right">
              <p className="text-sm font-semibold text-foreground">
                {project.progress}%
              </p>
              <p className="text-xs text-muted">
                {PROJECT_PRIORITIES[project.priority]}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {displayProjects.length === 0 && (
        <div className="text-center py-12">
          <FolderOpen className="w-12 h-12 text-muted/30 mx-auto mb-3" />
          <p className="text-muted">No projects yet</p>
        </div>
      )}
    </div>
  );
}
