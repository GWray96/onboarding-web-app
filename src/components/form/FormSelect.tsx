"use client";

import { SelectHTMLAttributes, forwardRef } from "react";

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  error?: string;
  options: { value: string; label: string }[];
  required?: boolean;
}

const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ label, error, options, required, className = "", ...props }, ref) => (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-slate-700">
        {label}
        {required && <span className="text-amber-500"> *</span>}
      </label>
      <select
        ref={ref}
        className={`w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 transition-colors focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 ${
          error ? "border-amber-500 focus:border-amber-500 focus:ring-amber-500/20" : ""
        } ${className}`}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <p className="text-sm text-amber-600">{error}</p>}
    </div>
  )
);

FormSelect.displayName = "FormSelect";

export default FormSelect;
