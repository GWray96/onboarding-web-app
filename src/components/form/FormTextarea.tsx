"use client";

import { TextareaHTMLAttributes, forwardRef } from "react";

interface FormTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
  required?: boolean;
  rows?: number;
}

const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ label, error, required, className = "", rows, ...props }, ref) => (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-slate-700">
        {label}
        {required && <span className="text-amber-500"> *</span>}
      </label>
      <textarea
        ref={ref}
        rows={rows ?? 3}
        className={`w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder-slate-400 transition-colors focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 ${
          error ? "border-amber-500 focus:border-amber-500 focus:ring-amber-500/20" : ""
        } ${className}`}
        {...props}
      />
      {error && <p className="text-sm text-amber-600">{error}</p>}
    </div>
  )
);

FormTextarea.displayName = "FormTextarea";

export default FormTextarea;
