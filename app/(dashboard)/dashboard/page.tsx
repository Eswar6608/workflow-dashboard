"use client";

import React from "react";
import {
  BarChart3,
  CheckCircle2,
  AlertCircle,
  TrendingUp,
  Users,
} from "lucide-react";
import { StatsCards, type StatCard } from "@/components/dashboard/StatsCards";
import { RecentProjects } from "@/components/dashboard/RecentProjects";
import { UpcomingTasks } from "@/components/dashboard/UpcomingTasks";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { TaskCompletionChart } from "@/components/charts/TaskCompletionChart";
import { TaskStatusChart } from "@/components/charts/TaskStatusChart";
import { PriorityChart } from "@/components/charts/ProductivityChart";
import { MOCK_PROJECTS, MOCK_TASKS, MOCK_ACTIVITIES } from "@/data/mock";

export default function DashboardPage() {
  // Calculate statistics
  const totalProjects = MOCK_PROJECTS.length;
  const activeProjects = MOCK_PROJECTS.filter(
    (p) => p.status === "ACTIVE"
  ).length;
  const totalTasks = MOCK_TASKS.length;
  const completedTasks = MOCK_TASKS.filter((t) => t.status === "DONE").length;
  const overdueTasks = MOCK_TASKS.filter(
    (t) => t.status !== "DONE" && t.dueDate && new Date(t.dueDate) < new Date()
  ).length;
  const tasksInProgress = MOCK_TASKS.filter(
    (t) => t.status === "IN_PROGRESS"
  ).length;

  // Stats cards
  const statsCards: StatCard[] = [
    {
      title: "Total Projects",
      value: totalProjects,
      subtitle: `${activeProjects} active`,
      icon: <BarChart3 className="w-6 h-6" />,
      color: "blue",
      trend: { value: 8, direction: "up" },
    },
    {
      title: "Total Tasks",
      value: totalTasks,
      subtitle: `${completedTasks} completed`,
      icon: <CheckCircle2 className="w-6 h-6" />,
      color: "green",
      trend: { value: 22, direction: "up" },
    },
    {
      title: "In Progress",
      value: tasksInProgress,
      subtitle: "Currently active",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "purple",
      trend: { value: 5, direction: "down" },
    },
    {
      title: "Overdue",
      value: overdueTasks,
      subtitle: "Needs attention",
      icon: <AlertCircle className="w-6 h-6" />,
      color: "orange",
      trend: { value: 2, direction: "down" },
    },
  ];

  // Task completion trend data
  const taskCompletionData = [
    { date: "Aug 9", completed: 12, total: 28 },
    { date: "Aug 10", completed: 14, total: 30 },
    { date: "Aug 11", completed: 18, total: 32 },
    { date: "Aug 12", completed: 22, total: 35 },
    { date: "Aug 13", completed: 24, total: 36 },
    { date: "Aug 14", completed: 26, total: 38 },
    { date: "Aug 15", completed: 28, total: 42 },
  ];

  // Task status distribution
  const taskStatusData = [
    {
      name: "To Do",
      value: MOCK_TASKS.filter((t) => t.status === "TODO").length,
      color: "var(--color-gray-400)",
    },
    {
      name: "In Progress",
      value: MOCK_TASKS.filter((t) => t.status === "IN_PROGRESS").length,
      color: "var(--color-primary-500)",
    },
    {
      name: "In Review",
      value: MOCK_TASKS.filter((t) => t.status === "IN_REVIEW").length,
      color: "var(--color-warning-500)",
    },
    {
      name: "Done",
      value: MOCK_TASKS.filter((t) => t.status === "DONE").length,
      color: "var(--color-success-500)",
    },
  ];

  // Priority distribution
  const priorityData = [
    {
      name: "Low",
      tasks: MOCK_TASKS.filter((t) => t.priority === "LOW").length,
      color: "var(--color-gray-400)",
    },
    {
      name: "Medium",
      tasks: MOCK_TASKS.filter((t) => t.priority === "MEDIUM").length,
      color: "var(--color-warning-500)",
    },
    {
      name: "High",
      tasks: MOCK_TASKS.filter((t) => t.priority === "HIGH").length,
      color: "var(--color-orange-500)",
    },
    {
      name: "Urgent",
      tasks: MOCK_TASKS.filter((t) => t.priority === "URGENT").length,
      color: "var(--color-error-500)",
    },
  ];

  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted">Welcome back! Here's your project overview.</p>
        </div>

        {/* Stats Cards */}
        <StatsCards cards={statsCards} />

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TaskCompletionChart data={taskCompletionData} />
          <TaskStatusChart data={taskStatusData} />
        </div>

        {/* Priority and Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <PriorityChart data={priorityData} />
          </div>
          <div className="lg:col-span-2">
            <ActivityFeed activities={MOCK_ACTIVITIES} />
          </div>
        </div>

        {/* Projects and Tasks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RecentProjects projects={MOCK_PROJECTS} />
          <UpcomingTasks tasks={MOCK_TASKS} />
        </div>
      </div>
    </div>
  );
}
