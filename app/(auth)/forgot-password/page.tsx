"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, ArrowLeft } from "lucide-react";
import {
  forgotPasswordSchema,
  type ForgotPasswordFormData,
} from "@/lib/validation/auth";
import { FormField } from "@/components/ui/FormField";
import { ROUTES } from "@/lib/constants";

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const email = watch("email");

  const onSubmit = async (data: ForgotPasswordFormData) => {
    setIsLoading(true);
    setApiError(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Demo: Just log the data
      console.log("Password reset requested for:", data.email);

      setSuccessMessage(`Password reset link sent to ${data.email}`);
      setSubmitted(true);
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
        <h1 className="text-3xl font-bold text-foreground mb-2">Reset Password</h1>
        <p className="text-muted">
          {submitted
            ? "Check your email for reset instructions"
            : "Enter your email to receive a password reset link"}
        </p>
      </div>

      {submitted ? (
        // Success state
        <div className="space-y-6">
          {/* Success message */}
          <div className="p-4 bg-success/10 border border-success/30 rounded-lg">
            <p className="text-sm text-success flex items-center gap-2">
              <span>✓</span>
              {successMessage}
            </p>
          </div>

          {/* Instructions */}
          <div className="bg-card border border-border rounded-lg p-6 space-y-4">
            <h3 className="font-semibold text-foreground">What's next?</h3>
            <ol className="space-y-3 text-sm text-muted">
              <li className="flex gap-3">
                <span className="font-medium text-foreground min-w-fit">1.</span>
                <span>Check your email inbox for a message from WorkFlow</span>
              </li>
              <li className="flex gap-3">
                <span className="font-medium text-foreground min-w-fit">2.</span>
                <span>Click the password reset link in the email</span>
              </li>
              <li className="flex gap-3">
                <span className="font-medium text-foreground min-w-fit">3.</span>
                <span>Create a new password and sign in</span>
              </li>
            </ol>
          </div>

          {/* Check spam note */}
          <p className="text-xs text-muted text-center">
            If you don't see the email, check your spam folder.
          </p>
        </div>
      ) : (
        // Form state
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

          {/* Submit button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Sending...
              </>
            ) : (
              "Send Reset Link"
            )}
          </button>
        </form>
      )}

      {/* Back to login */}
      <div className="text-center">
        <Link
          href={ROUTES.LOGIN}
          className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-600 font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Sign In
        </Link>
      </div>
    </div>
  );
}
