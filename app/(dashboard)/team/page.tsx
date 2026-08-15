import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Users } from "lucide-react";
import { ROUTES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Team - WorkFlow",
  description: "Manage your team members",
};

export default function TeamPage() {
  return (
    <div className="p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Link href={ROUTES.DASHBOARD} className="text-primary hover:text-primary-600 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-4xl font-bold text-foreground">Team</h1>
            <p className="text-muted mt-1">Manage team members and roles</p>
          </div>
        </div>
        <div className="bg-card border border-border rounded-lg p-12 text-center">
          <Users className="w-16 h-16 text-muted/30 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-foreground mb-2">Team Page</h2>
          <p className="text-muted">Team member management features coming soon</p>
        </div>
      </div>
    </div>
  );
}
