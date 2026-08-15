/**
 * Domain Types
 * Core data models for the WorkFlow application
 */

export type UserRole = "ADMIN" | "MANAGER" | "DEVELOPER" | "DESIGNER" | "VIEWER";
export type UserStatus = "active" | "inactive" | "away";

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: UserRole;
  status: UserStatus;
  createdAt: Date;
  updatedAt: Date;
}

export type ProjectStatus = "PLANNING" | "ACTIVE" | "ON_HOLD" | "COMPLETED";
export type ProjectPriority = "LOW" | "MEDIUM" | "HIGH" | "URGENT";

export interface Project {
  id: string;
  name: string;
  description: string;
  status: ProjectStatus;
  priority: ProjectPriority;
  startDate: Date;
  dueDate: Date;
  progress: number; // 0-100
  members: User[];
  createdAt: Date;
  updatedAt: Date;
}

export type TaskStatus = "TODO" | "IN_PROGRESS" | "IN_REVIEW" | "DONE";
export type TaskPriority = "LOW" | "MEDIUM" | "HIGH" | "URGENT";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  assignee?: User;
  projectId: string;
  dueDate?: Date;
  labels: string[];
  comments: Comment[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Comment {
  id: string;
  content: string;
  author: User;
  taskId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Team {
  id: string;
  name: string;
  members: User[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Activity {
  id: string;
  type: string;
  description: string;
  actor: User;
  target: string; // e.g., "project", "task"
  targetId: string;
  createdAt: Date;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: "info" | "success" | "warning" | "error";
  read: boolean;
  userId: string;
  createdAt: Date;
}

// Statistics types
export interface DashboardStats {
  totalProjects: number;
  activeProjects: number;
  totalTasks: number;
  completedTasks: number;
  overdueTasks: number;
  tasksInProgress: number;
}
