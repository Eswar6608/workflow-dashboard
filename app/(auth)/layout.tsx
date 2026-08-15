import Link from "next/link";
import { Briefcase } from "lucide-react";
import { ROUTES } from "@/lib/constants";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header with logo and sign in link */}
      <header className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href={ROUTES.HOME} className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
              <Briefcase className="w-5 h-5" />
            </div>
            <span className="text-lg font-bold text-foreground">WorkFlow</span>
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">{children}</div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-muted">
            © 2026 WorkFlow. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
