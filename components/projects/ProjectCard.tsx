"use client";

import React from "react";
import Link from "next/link";
import { FolderOpen, Edit2, MoreVertical, Trash2 } from "lucide-react";
import { Project } from "@/types";
import { ROUTES, STATUS_COLORS, PROJECT_PRIORITIES } from "@/lib/constants";
import { cn } from "@/lib/utils/helpers";

interface ProjectCardProps {
  project: Project;
  onEdit?: (project: Project) => void;
  onDelete?: (projectId: string) => void;
}

export function ProjectCard({
  project,
  onEdit,
  onDelete,
}: ProjectCardProps) {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <Link href={ROUTES.PROJECT_DETAIL(project.id)}>
      <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-md transition-all cursor-pointer group">
        {/* Header with icon and menu */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <FolderOpen className="w-6 h-6 text-primary" />
          </div>
          <div className="relative">
            <button
              onClick={(e) => {
                e.preventDefault();
                setShowMenu(!showMenu);
              }}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <MoreVertical className="w-4 h-4 text-muted" />
            </button>
            {showMenu && (
              <div className="absolute right-0 top-full mt-1 bg-card border border-border rounded-lg shadow-lg z-10">
                {onEdit && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      onEdit(project);
                      setShowMenu(false);
                    }}
                    className="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-2 border-b border-border"
                  >
                    <Edit2 className="w-4 h-4" />
                    Edit
                  </button>
                )}
                {onDelete && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      onDelete(project.id);
                      setShowMenu(false);
                    }}
                    className="w-full px-4 py-2 text-left text-sm text-error hover:bg-red-50 dark:hover:bg-red-900/20 flex items-center gap-2"
                  >
                    <Trash2 className="w-4 h-4" />
                    Delete
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Title and status */}
        <div className="mb-3">
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
            {project.name}
          </h3>
          <p className="text-sm text-muted line-clamp-1 mt-1">
            {project.description}
          </p>
        </div>

        {/* Status and priority badges */}
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          <span
            className={cn(
              "inline-flex items-center px-2.5 py-1 rounded text-xs font-medium",
              STATUS_COLORS[project.status]
            )}
          >
            {project.status.replace(/_/g, " ")}
          </span>
          <span className="inline-flex items-center px-2.5 py-1 rounded text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300">
            {PROJECT_PRIORITIES[project.priority]}
          </span>
        </div>

        {/* Progress bar */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-muted">Progress</span>
            <span className="text-xs font-semibold text-foreground">
              {project.progress}%
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all"
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>

        {/* Members and dates */}
        <div className="flex items-center justify-between text-xs text-muted pt-3 border-t border-border">
          <div className="flex items-center gap-2">
            <span>{project.members.length} members</span>
          </div>
          <span>{new Date(project.dueDate).toLocaleDateString()}</span>
        </div>
      </div>
    </Link>
  );
}
