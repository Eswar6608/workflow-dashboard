"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Project } from "@/types";
import { FormField } from "@/components/ui/FormField";
import { PROJECT_PRIORITIES, PROJECT_STATUSES } from "@/lib/constants";

// Validation schema
const projectSchema = z.object({
  name: z.string().min(1, "Project name is required").min(3, "Name must be at least 3 characters"),
  description: z.string().min(1, "Description is required").min(10, "Description must be at least 10 characters"),
  status: z.enum(["PLANNING", "ACTIVE", "ON_HOLD", "COMPLETED"]),
  priority: z.enum(["LOW", "MEDIUM", "HIGH", "URGENT"]),
  startDate: z.string().min(1, "Start date is required"),
  dueDate: z.string().min(1, "Due date is required"),
  progress: z.number().min(0).max(100, "Progress must be between 0 and 100"),
});

type ProjectFormData = z.infer<typeof projectSchema>;

interface ProjectFormProps {
  project?: Project;
  onSubmit: (data: Partial<Project>) => void;
  isLoading?: boolean;
}

export function ProjectForm({ project, onSubmit, isLoading = false }: ProjectFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ProjectFormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: project
      ? {
          name: project.name,
          description: project.description,
          status: project.status,
          priority: project.priority,
          startDate: new Date(project.startDate).toISOString().split("T")[0],
          dueDate: new Date(project.dueDate).toISOString().split("T")[0],
          progress: project.progress,
        }
      : {
          status: "PLANNING",
          priority: "MEDIUM",
          progress: 0,
        },
  });

  const progress = watch("progress");

  const handleFormSubmit = (data: ProjectFormData) => {
    onSubmit({
      name: data.name,
      description: data.description,
      status: data.status,
      priority: data.priority,
      startDate: new Date(data.startDate),
      dueDate: new Date(data.dueDate),
      progress: data.progress,
    });
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      {/* Name */}
      <FormField
        label="Project Name"
        error={errors.name?.message}
        required
      >
        <input
          type="text"
          {...register("name")}
          placeholder="e.g., Website Redesign"
          className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </FormField>

      {/* Description */}
      <FormField
        label="Description"
        error={errors.description?.message}
        required
      >
        <textarea
          {...register("description")}
          placeholder="Describe the project goals and scope..."
          rows={4}
          className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
        />
      </FormField>

      {/* Status and Priority */}
      <div className="grid grid-cols-2 gap-6">
        <FormField label="Status" error={errors.status?.message} required>
          <select
            {...register("status")}
            className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {Object.entries(PROJECT_STATUSES).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </select>
        </FormField>

        <FormField label="Priority" error={errors.priority?.message} required>
          <select
            {...register("priority")}
            className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {Object.entries(PROJECT_PRIORITIES).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </select>
        </FormField>
      </div>

      {/* Dates */}
      <div className="grid grid-cols-2 gap-6">
        <FormField label="Start Date" error={errors.startDate?.message} required>
          <input
            type="date"
            {...register("startDate")}
            className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </FormField>

        <FormField label="Due Date" error={errors.dueDate?.message} required>
          <input
            type="date"
            {...register("dueDate")}
            className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-900 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </FormField>
      </div>

      {/* Progress */}
      <FormField
        label={`Progress: ${progress}%`}
        error={errors.progress?.message}
        required
      >
        <div className="space-y-2">
          <input
            type="range"
            {...register("progress", { valueAsNumber: true })}
            min="0"
            max="100"
            step="5"
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary"
          />
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </FormField>

      {/* Submit Button */}
      <div className="pt-6 border-t border-border flex gap-3">
        <button
          type="submit"
          disabled={isLoading}
          className="flex-1 bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? "Saving..." : project ? "Update Project" : "Create Project"}
        </button>
      </div>
    </form>
  );
}
