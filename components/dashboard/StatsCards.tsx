"use client";

import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

export interface StatCard {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: React.ReactNode;
  color: "blue" | "green" | "purple" | "orange";
  trend?: {
    value: number;
    direction: "up" | "down";
  };
}

interface StatsCardsProps {
  cards: StatCard[];
}

const colorMap = {
  blue: {
    bg: "bg-blue-50 dark:bg-blue-900/20",
    text: "text-blue-600 dark:text-blue-400",
    accent: "bg-blue-100 dark:bg-blue-800",
  },
  green: {
    bg: "bg-green-50 dark:bg-green-900/20",
    text: "text-green-600 dark:text-green-400",
    accent: "bg-green-100 dark:bg-green-800",
  },
  purple: {
    bg: "bg-purple-50 dark:bg-purple-900/20",
    text: "text-purple-600 dark:text-purple-400",
    accent: "bg-purple-100 dark:bg-purple-800",
  },
  orange: {
    bg: "bg-orange-50 dark:bg-orange-900/20",
    text: "text-orange-600 dark:text-orange-400",
    accent: "bg-orange-100 dark:bg-orange-800",
  },
};

export function StatsCards({ cards }: StatsCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => {
        const colors = colorMap[card.color];
        return (
          <div
            key={index}
            className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`${colors.accent} p-3 rounded-lg`}>
                <div className={`${colors.text} w-6 h-6`}>{card.icon}</div>
              </div>
              {card.trend && (
                <div
                  className={`flex items-center gap-1 text-sm font-medium ${
                    card.trend.direction === "up"
                      ? "text-success"
                      : "text-error"
                  }`}
                >
                  {card.trend.direction === "up" ? (
                    <TrendingUp className="w-4 h-4" />
                  ) : (
                    <TrendingDown className="w-4 h-4" />
                  )}
                  {card.trend.value}%
                </div>
              )}
            </div>
            <p className="text-sm text-muted mb-1">{card.title}</p>
            <p className="text-3xl font-bold text-foreground mb-2">
              {card.value}
            </p>
            {card.subtitle && (
              <p className="text-xs text-muted">{card.subtitle}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
