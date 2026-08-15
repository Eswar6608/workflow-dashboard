"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface TaskCompletionData {
  date: string;
  completed: number;
  total: number;
}

interface TaskCompletionChartProps {
  data: TaskCompletionData[];
}

export function TaskCompletionChart({ data }: TaskCompletionChartProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-foreground">Task Completion Trend</h2>
        <p className="text-sm text-muted mt-1">Tasks completed over time</p>
      </div>

      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="var(--color-border)"
              vertical={false}
            />
            <XAxis
              dataKey="date"
              stroke="var(--color-muted)"
              style={{ fontSize: "12px" }}
            />
            <YAxis
              stroke="var(--color-muted)"
              style={{ fontSize: "12px" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--color-card)",
                border: "1px solid var(--color-border)",
                borderRadius: "8px",
              }}
              labelStyle={{ color: "var(--color-foreground)" }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="completed"
              stroke="var(--color-success-500)"
              strokeWidth={2}
              dot={{ fill: "var(--color-success-500)", r: 4 }}
              name="Completed"
            />
            <Line
              type="monotone"
              dataKey="total"
              stroke="var(--color-primary-500)"
              strokeWidth={2}
              dot={{ fill: "var(--color-primary-500)", r: 4 }}
              name="Total"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
