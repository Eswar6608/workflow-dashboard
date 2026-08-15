"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Plus, ArrowLeft } from "lucide-react";
import { ProjectList } from "@/components/projects/ProjectList";
import { ProjectFilters } from "@/components/projects/ProjectFilters";
import { ROUTES } from "@/lib/constants";
import { MOCK_PROJECTS } from "@/data/mock";
import { Project } from "@/types";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const [selectedPriority, setSelectedPriority] = useState<string | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);

  // Filter and search projects
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        searchQuery === "" ||
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus = !selectedStatus || project.status === selectedStatus;
      const matchesPriority =
        !selectedPriority || project.priority === selectedPriority;

      return matchesSearch && matchesStatus && matchesPriority;
    });
  }, [projects, searchQuery, selectedStatus, selectedPriority]);

  const handleEdit = (project: Project) => {
    // TODO: Implement edit form modal
    console.log("Edit project:", project);
  };

  const handleDelete = (projectId: string) => {
    // TODO: Implement delete confirmation
    setProjects((prev) => prev.filter((p) => p.id !== projectId));
  };

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href={ROUTES.DASHBOARD}
              className="text-primary hover:text-primary-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-4xl font-bold text-foreground">Projects</h1>
              <p className="text-muted mt-1">
                Manage and organize all your projects
              </p>
            </div>
          </div>
          <button
            onClick={() => setShowCreateForm(!showCreateForm)}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary-600 transition-colors"
          >
            <Plus className="w-5 h-5" />
            New Project
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-sm text-muted mb-1">Total Projects</p>
            <p className="text-3xl font-bold text-foreground">{projects.length}</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-sm text-muted mb-1">Active</p>
            <p className="text-3xl font-bold text-green-600">
              {projects.filter((p) => p.status === "ACTIVE").length}
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-sm text-muted mb-1">Completed</p>
            <p className="text-3xl font-bold text-blue-600">
              {projects.filter((p) => p.status === "COMPLETED").length}
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <p className="text-sm text-muted mb-1">Avg Progress</p>
            <p className="text-3xl font-bold text-primary">
              {Math.round(
                projects.reduce((sum, p) => sum + p.progress, 0) / projects.length
              )}
              %
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <ProjectFilters
              searchQuery={searchQuery}
              selectedStatus={selectedStatus}
              selectedPriority={selectedPriority}
              onSearchChange={setSearchQuery}
              onStatusChange={setSelectedStatus}
              onPriorityChange={setSelectedPriority}
            />
          </div>

          {/* Projects List */}
          <div className="lg:col-span-3">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-foreground">
                  {filteredProjects.length} Projects
                </h2>
                {(searchQuery || selectedStatus || selectedPriority) && (
                  <p className="text-sm text-muted">Filtered results</p>
                )}
              </div>
            </div>
            <ProjectList
              projects={filteredProjects}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
