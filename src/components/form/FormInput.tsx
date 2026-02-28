"use client";

import { InputHTMLAttributes, forwardRef } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  required?: boolean;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ label, error, required, className = "", ...props }, ref) => (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-slate-700">
        {label}
        {required && <span className="text-amber-500"> *</span>}
      </label>
      <input
        ref={ref}
        className={`w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 placeholder-slate-400 transition-colors focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 ${
          error ? "border-amber-500 focus:border-amber-500 focus:ring-amber-500/20" : ""
        } ${className}`}
        {...props}
      />
      {error && <p className="text-sm text-amber-600">{error}</p>}
    </div>
  )
);

FormInput.displayName = "FormInput";

export default FormInput;
