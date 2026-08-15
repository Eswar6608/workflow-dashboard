import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, TrendingUp } from "lucide-react";
import { ROUTES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Analytics - WorkFlow",
  description: "View analytics and reports",
};

export default function AnalyticsPage() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Link href={ROUTES.DASHBOARD} className="text-primary hover:text-primary-600 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-4xl font-bold text-foreground">Analytics</h1>
            <p className="text-muted mt-1">View detailed reports and insights</p>
          </div>
        </div>
        <div className="bg-card border border-border rounded-lg p-12 text-center">
          <TrendingUp className="w-16 h-16 text-muted/30 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-foreground mb-2">Analytics Page</h2>
          <p className="text-muted">Advanced analytics and reporting features coming soon</p>
        </div>
      </div>
    </div>
  );
}
