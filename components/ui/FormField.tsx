"use client";

import React from "react";
import { FieldError } from "react-hook-form";

interface FormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string | React.ReactNode;
  error?: FieldError | string;
  helpText?: string;
  required?: boolean;
  children?: React.ReactNode;
}

export const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, error, helpText, required, children, className = "", ...props }, ref) => {
    const errorMessage = typeof error === "string" ? error : error?.message;

    return (
      <div className="space-y-2">
        <label htmlFor={props.id} className="block text-sm font-medium text-foreground">
          {label}
          {required && <span className="text-error ml-1">*</span>}
        </label>
        {children || (
          <input
            ref={ref}
            className={`w-full px-4 py-2 bg-input border border-border rounded-lg text-foreground placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
              errorMessage ? "border-error ring-2 ring-error/20" : ""
            } ${className}`}
            {...props}
          />
        )}
        {errorMessage && (
          <p className="text-sm text-error flex items-center gap-1">
            <span>⚠</span>
            {errorMessage}
          </p>
        )}
        {helpText && !error && (
          <p className="text-sm text-muted">{helpText}</p>
        )}
      </div>
    );
  }
);

FormField.displayName = "FormField";

interface CheckboxFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string | React.ReactNode;
  error?: FieldError;
}

export const CheckboxField = React.forwardRef<
  HTMLInputElement,
  CheckboxFieldProps
>(({ label, error, className = "", ...props }, ref) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-3">
        <input
          ref={ref}
          type="checkbox"
          className={`w-4 h-4 rounded border border-border bg-input text-primary cursor-pointer focus:ring-2 focus:ring-primary focus:ring-offset-0 transition-colors ${
            error ? "border-error" : ""
          } ${className}`}
          {...props}
        />
        <label htmlFor={props.id} className="text-sm text-foreground cursor-pointer">
          {label}
        </label>
      </div>
      {error && (
        <p className="text-sm text-error flex items-center gap-1 ml-7">
          <span>⚠</span>
          {error.message}
        </p>
      )}
    </div>
  );
});

CheckboxField.displayName = "CheckboxField";
