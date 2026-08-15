"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  FolderOpen,
  CheckSquare,
  Users,
  Calendar,
  BarChart3,
  Settings,
  Menu,
  X,
  Briefcase,
} from "lucide-react";
import { ROUTES } from "@/lib/constants";

interface SidebarProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NAV_ITEMS = [
  {
    label: "Dashboard",
    href: ROUTES.DASHBOARD,
    icon: LayoutGrid,
  },
  {
    label: "Projects",
    href: ROUTES.PROJECTS,
    icon: FolderOpen,
  },
  {
    label: "Tasks",
    href: ROUTES.TASKS,
    icon: CheckSquare,
  },
  {
    label: "Team",
    href: ROUTES.TEAM,
    icon: Users,
  },
  {
    label: "Calendar",
    href: ROUTES.CALENDAR,
    icon: Calendar,
  },
  {
    label: "Analytics",
    href: ROUTES.ANALYTICS,
    icon: BarChart3,
  },
  {
    label: "Settings",
    href: ROUTES.SETTINGS,
    icon: Settings,
  },
];

export function Sidebar({ open, onOpenChange }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => onOpenChange(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform duration-300 ease-in-out lg:relative lg:z-0 lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex items-center justify-between h-16 px-6 border-b border-border">
          <Link href={ROUTES.DASHBOARD} className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
              <Briefcase className="w-5 h-5" />
            </div>
            <span className="text-lg font-bold text-foreground">WorkFlow</span>
          </Link>
          <button
            onClick={() => onOpenChange(false)}
            className="lg:hidden p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
            aria-label="Close sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-6 space-y-2 overflow-y-auto">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive =
              pathname === item.href ||
              pathname?.startsWith(item.href + "/");

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-primary text-white"
                    : "text-foreground hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Sidebar footer */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
            <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">
              A
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">
                Alex Chen
              </p>
              <p className="text-xs text-muted truncate">alex@workflow.com</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
