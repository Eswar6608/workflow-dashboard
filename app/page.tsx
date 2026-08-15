import Link from "next/link";
import { ROUTES } from "@/lib/constants";
import { Briefcase, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border sticky top-0 bg-background/95 backdrop-blur z-40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href={ROUTES.HOME} className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
              <Briefcase className="w-5 h-5" />
            </div>
            <span className="text-lg font-bold text-foreground">WorkFlow</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href={ROUTES.FEATURES}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Features
            </Link>
            <Link
              href={ROUTES.PRICING}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
            <Link
              href={ROUTES.LOGIN}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              Sign In
            </Link>
            <Link
              href={ROUTES.REGISTER}
              className="text-sm font-medium bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Project Management
            <br />
            <span className="text-primary">Made Simple</span>
          </h1>
          <p className="text-xl text-muted mb-8 max-w-2xl mx-auto">
            WorkFlow helps teams organize projects, manage tasks, and collaborate
            effectively. All in one beautiful, intuitive platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href={ROUTES.REGISTER}
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-600 transition-colors font-medium"
            >
              Start for Free
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href={ROUTES.FEATURES}
              className="inline-flex items-center justify-center gap-2 border border-border px-8 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
            >
              Learn More
            </Link>
          </div>

          {/* Dashboard Preview */}
          <div className="rounded-xl border border-border overflow-hidden shadow-lg bg-card p-4 md:p-8">
            <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <p className="text-sm text-muted mb-4">Dashboard Preview</p>
                <div className="w-full h-full flex items-center justify-center">
                  <svg
                    className="w-32 h-32 text-gray-300 dark:text-gray-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Everything You Need
            </h2>
            <p className="text-lg text-muted">
              Powerful features designed for modern teams
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Project Management",
                description:
                  "Organize projects with custom statuses, priorities, and team members",
              },
              {
                title: "Task Tracking",
                description:
                  "Create, assign, and track tasks with deadlines and labels",
              },
              {
                title: "Kanban Board",
                description:
                  "Visualize workflow with intuitive kanban-style boards",
              },
              {
                title: "Team Collaboration",
                description:
                  "Comments, activity logs, and real-time collaboration",
              },
              {
                title: "Analytics Dashboard",
                description:
                  "Track productivity and completion rates with charts",
              },
              {
                title: "Calendar View",
                description:
                  "See all your tasks and deadlines in a calendar view",
              },
            ].map((feature, idx) => (
              <div key={idx} className="p-6 rounded-lg border border-border hover:border-primary transition-colors">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <h3 className="text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-muted">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted mb-8">
            Join teams around the world using WorkFlow to organize their work and
            get more done.
          </p>
          <Link
            href={ROUTES.REGISTER}
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-600 transition-colors font-medium text-lg"
          >
            Start for Free
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                <Briefcase className="w-5 h-5" />
              </div>
              <span className="font-bold text-foreground">WorkFlow</span>
            </div>
            <div className="flex flex-col md:flex-row gap-8 text-sm text-muted">
              <Link href={ROUTES.FEATURES} className="hover:text-foreground transition-colors">
                Features
              </Link>
              <Link href={ROUTES.PRICING} className="hover:text-foreground transition-colors">
                Pricing
              </Link>
              <Link href={ROUTES.LOGIN} className="hover:text-foreground transition-colors">
                Sign In
              </Link>
            </div>
            <p className="text-sm text-muted">
              © 2026 WorkFlow. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
