"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Edit2, Save, X } from "lucide-react";
import { ROUTES } from "@/lib/constants";
import { MOCK_PROJECTS } from "@/data/mock";
import { ProjectForm } from "@/components/projects/ProjectForm";
import { Project } from "@/types";

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = MOCK_PROJECTS.find((p) => p.id === params.id);
  const [isEditing, setIsEditing] = useState(false);

  if (!project) {
    return (
      <div className="p-8">
        <div className="max-w-7xl mx-auto">
          <Link
            href={ROUTES.PROJECTS}
            className="inline-flex items-center gap-2 text-primary hover:text-primary-600 transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </Link>
          <div className="bg-card border border-border rounded-lg p-12 text-center">
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Project not found
            </h1>
            <p className="text-muted">
              The project you're looking for doesn't exist.
            </p>
          </div>
        </div>
      </div>
    );
  }

  const handleSubmit = (data: Partial<Project>) => {
    // TODO: Implement project update
    console.log("Update project:", data);
    setIsEditing(false);
  };

  return (
    <div className="p-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Link
            href={ROUTES.PROJECTS}
            className="inline-flex items-center gap-2 text-primary hover:text-primary-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Projects
          </Link>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {isEditing ? (
              <>
                <X className="w-5 h-5" />
                Cancel
              </>
            ) : (
              <>
                <Edit2 className="w-5 h-5" />
                Edit
              </>
            )}
          </button>
        </div>

        {isEditing ? (
          // Edit form
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Edit Project
            </h2>
            <ProjectForm project={project} onSubmit={handleSubmit} />
          </div>
        ) : (
          // View mode
          <>
            <div className="bg-card border border-border rounded-lg p-8">
              <div className="mb-6">
                <h1 className="text-4xl font-bold text-foreground mb-2">
                  {project.name}
                </h1>
                <p className="text-lg text-muted">{project.description}</p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <p className="text-sm text-muted mb-1">Status</p>
                  <p className="text-lg font-semibold text-foreground">
                    {project.status.replace(/_/g, " ")}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted mb-1">Priority</p>
                  <p className="text-lg font-semibold text-foreground">
                    {project.priority}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted mb-1">Progress</p>
                  <p className="text-lg font-semibold text-foreground">
                    {project.progress}%
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted mb-1">Team Size</p>
                  <p className="text-lg font-semibold text-foreground">
                    {project.members.length} members
                  </p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm font-medium text-foreground mb-2">
                  Overall Progress
                </p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-primary h-3 rounded-full transition-all"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Dates and members */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Timeline
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-muted">Start Date</p>
                    <p className="text-foreground font-medium">
                      {new Date(project.startDate).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted">Due Date</p>
                    <p className="text-foreground font-medium">
                      {new Date(project.dueDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Team Members
                </h3>
                <div className="space-y-2">
                  {project.members.map((member) => (
                    <div
                      key={member.id}
                      className="flex items-center justify-between py-2"
                    >
                      <div>
                        <p className="text-foreground font-medium">
                          {member.name}
                        </p>
                        <p className="text-sm text-muted">{member.role}</p>
                      </div>
                      <div
                        className={`w-3 h-3 rounded-full ${
                          member.status === "active"
                            ? "bg-green-500"
                            : member.status === "away"
                              ? "bg-yellow-500"
                              : "bg-gray-500"
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
