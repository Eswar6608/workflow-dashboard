"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { loginSchema, type LoginFormData } from "@/lib/validation/auth";
import { FormField, CheckboxField } from "@/components/ui/FormField";
import { ROUTES } from "@/lib/constants";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    setApiError(null);
    setSuccessMessage(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Demo: Check for specific credentials
      if (
        data.email === "demo@workflow.com" &&
        data.password === "Demo1234"
      ) {
        console.log("✅ Credentials valid, preparing redirect...");
        setSuccessMessage("Login successful! Redirecting to dashboard...");
        
        // Use a setTimeout to ensure state updates before redirect
        setTimeout(() => {
          console.log("🔄 Attempting redirect to:", ROUTES.DASHBOARD);
          try {
            router.push(ROUTES.DASHBOARD);
            console.log("✅ Router push called successfully");
          } catch (err) {
            console.error("❌ Router push error:", err);
            // Fallback to window.location
            window.location.href = ROUTES.DASHBOARD;
          }
        }, 500);
      } else {
        console.log("❌ Invalid credentials");
        setApiError("Invalid email or password. Try demo@workflow.com / Demo1234");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("❌ Login error:", error);
      setApiError("An error occurred. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground mb-2">Sign In</h1>
        <p className="text-muted">Enter your credentials to access WorkFlow</p>
      </div>

      {/* Demo credentials hint */}
      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
        <p className="text-sm text-blue-900 dark:text-blue-200">
          <span className="font-semibold">Demo credentials:</span> demo@workflow.com / Demo1234
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Error message */}
        {apiError && (
          <div className="p-4 bg-error/10 border border-error/30 rounded-lg">
            <p className="text-sm text-error flex items-center gap-2">
              <span>⚠</span>
              {apiError}
            </p>
          </div>
        )}

        {/* Success message */}
        {successMessage && (
          <div className="p-4 bg-success/10 border border-success/30 rounded-lg">
            <p className="text-sm text-success flex items-center gap-2">
              <span>✓</span>
              {successMessage}
            </p>
          </div>
        )}

        {/* Email field */}
        <FormField
          id="email"
          type="email"
          label="Email Address"
          placeholder="you@example.com"
          error={errors.email}
          disabled={isLoading}
          {...register("email")}
        />

        {/* Password field */}
        <FormField
          id="password"
          type="password"
          label="Password"
          placeholder="••••••••"
          error={errors.password}
          disabled={isLoading}
          {...register("password")}
        />

        {/* Remember me & Forgot password */}
        <div className="flex items-center justify-between">
          <CheckboxField
            id="rememberMe"
            label="Remember me"
            error={errors.rememberMe}
            disabled={isLoading}
            {...register("rememberMe")}
          />
          <Link
            href={ROUTES.FORGOT_PASSWORD}
            className="text-sm text-primary hover:text-primary-600 transition-colors"
          >
            Forgot password?
          </Link>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Signing in...
            </>
          ) : (
            "Sign In"
          )}
        </button>
      </form>

      {/* Sign up link */}
      <div className="text-center">
        <p className="text-sm text-muted">
          Don't have an account?{" "}
          <Link
            href={ROUTES.REGISTER}
            className="text-primary hover:text-primary-600 font-medium transition-colors"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
