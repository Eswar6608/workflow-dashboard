"use client";

import React from "react";
import { Project } from "@/types";
import { ProjectCard } from "./ProjectCard";
import { FolderOpen } from "lucide-react";

interface ProjectListProps {
  projects: Project[];
  onEdit?: (project: Project) => void;
  onDelete?: (projectId: string) => void;
}

export function ProjectList({ projects, onEdit, onDelete }: ProjectListProps) {
  if (projects.length === 0) {
    return (
      <div className="bg-card border border-border rounded-lg p-12 text-center">
        <FolderOpen className="w-16 h-16 text-muted/30 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-foreground mb-2">
          No projects found
        </h3>
        <p className="text-muted">
          Try adjusting your filters or create a new project to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
