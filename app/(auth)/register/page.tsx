"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { registerSchema, type RegisterFormData } from "@/lib/validation/auth";
import { FormField, CheckboxField } from "@/components/ui/FormField";
import { ROUTES } from "@/lib/constants";

export default function RegisterPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    },
  });

  const onSubmit = async (data: RegisterFormData) => {
    setIsLoading(true);
    setApiError(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Demo: Just log the data
      console.log("Registration data:", data);

      setSuccessMessage("Account created successfully! Redirecting to login...");
      setTimeout(() => {
        router.push(ROUTES.LOGIN);
      }, 2000);
    } catch (error) {
      setApiError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-foreground mb-2">Create Account</h1>
        <p className="text-muted">Join WorkFlow to manage your projects</p>
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

        {/* Full name field */}
        <FormField
          id="name"
          type="text"
          label="Full Name"
          placeholder="John Doe"
          error={errors.name}
          disabled={isLoading}
          {...register("name")}
        />

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
          helpText="Must contain uppercase, lowercase, and numbers (min 8 characters)"
          {...register("password")}
        />

        {/* Confirm password field */}
        <FormField
          id="confirmPassword"
          type="password"
          label="Confirm Password"
          placeholder="••••••••"
          error={errors.confirmPassword}
          disabled={isLoading}
          {...register("confirmPassword")}
        />

        {/* Terms agreement */}
        <CheckboxField
          id="agreeToTerms"
          label={
            <>
              I agree to the{" "}
              <a href="#" className="text-primary hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="#" className="text-primary hover:underline">
                Privacy Policy
              </a>
            </>
          }
          error={errors.agreeToTerms}
          disabled={isLoading}
          {...register("agreeToTerms")}
        />

        {/* Submit button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Creating account...
            </>
          ) : (
            "Create Account"
          )}
        </button>
      </form>

      {/* Sign in link */}
      <div className="text-center">
        <p className="text-sm text-muted">
          Already have an account?{" "}
          <Link
            href={ROUTES.LOGIN}
            className="text-primary hover:text-primary-600 font-medium transition-colors"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
