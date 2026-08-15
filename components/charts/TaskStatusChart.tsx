"use client";

import React from "react";
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";

interface TaskStatusData {
  name: string;
  value: number;
  color: string;
}

interface TaskStatusChartProps {
  data: TaskStatusData[];
}

export function TaskStatusChart({ data }: TaskStatusChartProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-foreground">Task Distribution</h2>
        <p className="text-sm text-muted mt-1">By status</p>
      </div>

      <div className="w-full h-80 flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, value }) => `${name}: ${value}`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--color-card)",
                border: "1px solid var(--color-border)",
                borderRadius: "8px",
              }}
              formatter={(value) => [`${value} tasks`, "Count"]}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
