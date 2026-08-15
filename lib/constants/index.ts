/**
 * Application Constants
 * Centralized configuration for statuses, priorities, routes, etc.
 */

import type {
  ProjectStatus,
  ProjectPriority,
  TaskStatus,
  TaskPriority,
  UserRole,
  UserStatus,
} from "@/types";

// Route paths
export const ROUTES = {
  HOME: "/",
  FEATURES: "/features",
  PRICING: "/pricing",
  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgot-password",
  DASHBOARD: "/dashboard",
  PROJECTS: "/projects",
  PROJECT_DETAIL: (id: string) => `/projects/${id}`,
  TASKS: "/tasks",
  TEAM: "/team",
  CALENDAR: "/calendar",
  ANALYTICS: "/analytics",
  SETTINGS: "/settings",
  PROFILE: "/profile",
};

// Project statuses
export const PROJECT_STATUSES: Record<ProjectStatus, string> = {
  PLANNING: "Planning",
  ACTIVE: "Active",
  ON_HOLD: "On Hold",
  COMPLETED: "Completed",
};

// Project priorities
export const PROJECT_PRIORITIES: Record<ProjectPriority, string> = {
  LOW: "Low",
  MEDIUM: "Medium",
  HIGH: "High",
  URGENT: "Urgent",
};

// Task statuses
export const TASK_STATUSES: Record<TaskStatus, string> = {
  TODO: "To Do",
  IN_PROGRESS: "In Progress",
  IN_REVIEW: "In Review",
  DONE: "Done",
};

// Task priorities
export const TASK_PRIORITIES: Record<TaskPriority, string> = {
  LOW: "Low",
  MEDIUM: "Medium",
  HIGH: "High",
  URGENT: "Urgent",
};

// User roles
export const USER_ROLES: Record<UserRole, string> = {
  ADMIN: "Admin",
  MANAGER: "Manager",
  DEVELOPER: "Developer",
  DESIGNER: "Designer",
  VIEWER: "Viewer",
};

// User statuses
export const USER_STATUSES: Record<UserStatus, string> = {
  active: "Active",
  inactive: "Inactive",
  away: "Away",
};

// Colors for statuses (Tailwind classes)
export const STATUS_COLORS: Record<string, string> = {
  // Project statuses
  PLANNING: "bg-blue-50 text-blue-700 border-blue-200",
  ACTIVE: "bg-green-50 text-green-700 border-green-200",
  ON_HOLD: "bg-yellow-50 text-yellow-700 border-yellow-200",
  COMPLETED: "bg-gray-50 text-gray-700 border-gray-200",

  // Task statuses
  TODO: "bg-gray-50 text-gray-700 border-gray-200",
  IN_PROGRESS: "bg-blue-50 text-blue-700 border-blue-200",
  IN_REVIEW: "bg-purple-50 text-purple-700 border-purple-200",
  DONE: "bg-green-50 text-green-700 border-green-200",
};

// Colors for priorities (Tailwind classes)
export const PRIORITY_COLORS: Record<string, string> = {
  LOW: "bg-gray-50 text-gray-700 border-gray-200",
  MEDIUM: "bg-yellow-50 text-yellow-700 border-yellow-200",
  HIGH: "bg-orange-50 text-orange-700 border-orange-200",
  URGENT: "bg-red-50 text-red-700 border-red-200",
};

// Navigation menu items
export const NAVIGATION_ITEMS = [
  {
    label: "Dashboard",
    href: ROUTES.DASHBOARD,
    icon: "LayoutGrid",
  },
  {
    label: "Projects",
    href: ROUTES.PROJECTS,
    icon: "FolderOpen",
  },
  {
    label: "Tasks",
    href: ROUTES.TASKS,
    icon: "CheckSquare",
  },
  {
    label: "Team",
    href: ROUTES.TEAM,
    icon: "Users",
  },
  {
    label: "Calendar",
    href: ROUTES.CALENDAR,
    icon: "Calendar",
  },
  {
    label: "Analytics",
    href: ROUTES.ANALYTICS,
    icon: "BarChart3",
  },
  {
    label: "Settings",
    href: ROUTES.SETTINGS,
    icon: "Settings",
  },
];

// Pagination defaults
export const PAGINATION_DEFAULTS = {
  PAGE_SIZE: 10,
  MAX_PAGE_SIZE: 100,
};

// Search defaults
export const SEARCH_DEFAULTS = {
  MIN_QUERY_LENGTH: 2,
  DEBOUNCE_MS: 300,
};
